import { createRef, useEffect } from "react";
import styles from "./StaticOverlay.module.scss";
import vertSource from "./overlay.vert?raw";
import fragSource from "./overlay.frag?raw";

function mainRender(
	gl: WebGLRenderingContext,
	glReady: GLReady,
	time: DOMHighResTimeStamp,
) {
	gl.uniform1f(glReady.uTimeLocation, time / 1000);

	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function createShader(
	gl: WebGLRenderingContext,
	shaderType: GLenum,
	shaderSource: string,
) {
	console.log("compiling shader", shaderType);
	const shader = gl.createShader(shaderType)!;

	gl.shaderSource(shader, shaderSource);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader));
		throw new Error("Failed to compile shader of type " + shaderType);
	}

	return shader;
}

type GLReady = {
	uTimeLocation: WebGLUniformLocation;
};

function setupGLContext(gl: WebGLRenderingContext): GLReady {
	gl.clearColor(0, 0, 0, 0);

	const vertShader = createShader(gl, gl.VERTEX_SHADER, vertSource);
	const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragSource);

	const program = gl.createProgram();

	gl.attachShader(program, vertShader);
	gl.attachShader(program, fragShader);

	gl.linkProgram(program);
	gl.useProgram(program);

	const vertices = new Float32Array([
		-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
	]);

	const buffer = gl.createBuffer();

	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

	const position = gl.getAttribLocation(program, "position");

	gl.enableVertexAttribArray(position);

	gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

	const uTimeLocation = gl.getUniformLocation(program, "uTime")!;

	return {
		uTimeLocation,
	};
}

const staticEnabledKey = "static_enabled";

export default function StaticOverlay() {
	if (localStorage.getItem(staticEnabledKey) != "1") {
		return <></>;
	}

	const canvasRef = createRef<HTMLCanvasElement>();

	useEffect(() => {
		const canvas = canvasRef.current!;

		const gl = canvas.getContext("webgl", {
			alpha: true,
		});

		if (gl == null) {
			return;
		}

		const onResize = () => {
			canvas.width = innerWidth;
			canvas.height = innerHeight;
			gl.viewport(0, 0, innerWidth, innerHeight);
		};

		addEventListener("resize", onResize);
		onResize();

		const glReady = setupGLContext(gl);

		let frameRequestId: number;

		let renderFrame = (time: DOMHighResTimeStamp) => {
			mainRender(gl, glReady, time);

			frameRequestId = requestAnimationFrame(renderFrame);
		};

		frameRequestId = requestAnimationFrame(renderFrame);

		return () => {
			cancelAnimationFrame(frameRequestId);
			removeEventListener("resize", onResize);
		};
	}, []);

	return <canvas ref={canvasRef} className={styles.staticCanvas}></canvas>;
}
