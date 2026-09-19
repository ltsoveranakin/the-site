import * as React from "react";
import "./Boxed.scss";

type BoxedProps = {
	children?: React.JSX.Element;
};

export function BlackBoxed(props: BoxedProps) {
	return <div className={"black-boxed"}>{props.children}</div>;
}
