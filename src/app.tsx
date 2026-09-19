import Header from "./components/Header.tsx";
import "./App.scss";
import PageBody from "./components/body/PageBody.tsx";

export default function App() {
	return (
		<div className={"main"}>
			<Header />

			<PageBody />
		</div>
	);
}
