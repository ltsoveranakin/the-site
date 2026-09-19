import * as React from "react";
import "./Boxed.scss";

type BoxedProps = {
	children?: React.ReactNode;
};

export function BlackBoxed(props: BoxedProps) {
	return <div className={"black-boxed"}>{props.children}</div>;
}
