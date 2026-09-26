import { createRef, useEffect } from "react";
import styles from "./StaticOverlay.module.scss";

function mainRender() {}

function renderFrame(setRequestId: (requestId: number) => void) {
	setRequestId(requestAnimationFrame(renderFrame(setRequestId)));

	return mainRender;
}

export default function StaticOverlay() {
	const canvasRef = createRef<HTMLCanvasElement>();

	useEffect(() => {
		const canvas = canvasRef.current!;

		const ctx = canvas.getContext("2d");

		if (ctx == null) {
			return;
		}

		const onResize = () => {
			canvas.width = innerWidth;
			canvas.height = innerHeight;
		};

		addEventListener("resize", onResize);
		onResize();

		let frameRequestId: number;

		renderFrame((requestId) => {
			frameRequestId = requestId;
		});

		return () => {
			removeEventListener("resize", onResize);
		};
	});

	return <canvas ref={canvasRef} className={styles.staticCanvas}></canvas>;
}
