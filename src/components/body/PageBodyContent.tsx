import "./PageBodyContent.scss";
import Anchor from "../Anchor.tsx";

type Content = {
	text: string;
} & (DualLink | SingleLink);

type DualLink = {
	link: string;
	sourceLink: string;
};

type SingleLink = {
	link: string;
	isSource: boolean;
	sourceLink?: never;
};

type PageBodyContentProps = {
	header: string;
	content: Content[];
};

export default function PageBodyContent(props: PageBodyContentProps) {
	return (
		<div>
			<h2>{props.header}</h2>
			<div className={"content-container"}>
				<ul>
					{props.content.map((content, i) => {
						return (
							<li key={i.toString()}>
								<div className={"content-item"}>
									{typeof content.sourceLink == "undefined" &&
									content.isSource ? (
										<GithubLink
											repoName={content.link}
											text={content.text}
										/>
									) : (
										<Anchor link={content.link}>
											{content.text}
										</Anchor>
									)}
									{content.sourceLink ? (
										<GithubLink
											repoName={content.sourceLink}
										/>
									) : (
										<></>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

type GithubLinkProps = {
	text?: string;
	repoName: string;
};

function GithubLink(props: GithubLinkProps) {
	return (
		<Anchor link={`github.com/ltsoveranakin/${props.repoName}`}>
			<div className={"source-link-container"}>
				<img
					src={"https://github.com/favicon.ico"}
					width={20}
					alt={"Github logo"}
				/>
				<div className={"red-text"}>
					{props.text ? props.text : "View it on GitHub"}
				</div>
			</div>
		</Anchor>
	);
}
