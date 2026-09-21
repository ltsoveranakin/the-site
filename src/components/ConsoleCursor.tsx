import { useEffect } from "react";

type ConsoleCursorProps = {
	color: string;
	rem: number;
};

let consoleCursorIndex = 0;

export default function ConsoleCursor(props: ConsoleCursorProps) {
	const cursorId = `console-cursor${consoleCursorIndex}`;
	consoleCursorIndex++;

	useEffect(() => {
		let isVisible = true;

		const flashIntervalId = setInterval(() => {
			let cursorElement = document.getElementById(cursorId);

			if (cursorElement == null) {
				return;
			}

			isVisible = !isVisible;

			if (isVisible) {
				cursorElement.style.backgroundColor = props.color;
			} else {
				cursorElement.style.backgroundColor = "#00000000";
			}
		}, 1e3);

		return () => {
			clearInterval(flashIntervalId);
		};
	}, []);

	return (
		<div
			style={{
				backgroundColor: props.color,
				width: `${props.rem * 0.2}rem`,
				height: `${props.rem}rem`,
			}}
			id={cursorId}
		></div>
	);
}
