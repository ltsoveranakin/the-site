import "./Anchor.scss";
import * as React from "react";

interface AnchorProps {
	link: string;
	children: React.ReactNode;
}

export default function Anchor(props: AnchorProps) {
	return (
		<a
			href={`https://${props.link}`}
			target={"_blank"}
			className={"red-text"}
		>
			{props.children}
		</a>
	);
}

// fonts for new page: https://www.gamefontlibrary.com/games/marathon
// https://fontsinuse.com/uses/67879/marathon-2026-video-game-1
// https://www.youtube.com/watch?v=JHApRRthYgQ