import "./PageBodyContent.scss";

type Content = {
	text: string;
	link?: string;
	sourceLink: string;
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
				{props.content.map((content) => {
					return <a href={content.link}>{content.text}</a>;
				})}
			</div>
		</div>
	);
}
