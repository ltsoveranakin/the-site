import Header from "./components/Header.tsx";
import "./App.scss";
import AboutPage from "./components/AboutPage.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {
	return (
		<>
			<Header />
			<Projects />
			<AboutPage />
		</>
	);
}
