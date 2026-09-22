import Header from "./components/Header.tsx";
import "./App.scss";
import Contact from "./components/Contact.tsx";
import Projects from "./components/Projects.tsx";
import AboutMe from "./components/AboutMe.tsx";

export default function App() {
	return (
		<>
			<Header />
			<AboutMe />
			<Projects />
			<Contact />
		</>
	);
}
