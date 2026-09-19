import "./Header.scss";
import { BlackBoxed } from "./Boxed.tsx";

export default function Header() {
	return (
		<BlackBoxed>
			<div className="header">
				<h1>~Header~</h1>
			</div>
		</BlackBoxed>
	);
}
