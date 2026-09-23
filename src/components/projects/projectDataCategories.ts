import type { ProjectData } from "./ProjectCard.tsx";
import rustLogo from "../../assets/img/3rdparty/rust_logo.svg";
import typescriptLogo from "../../assets/img/3rdparty/ts_logo.svg";

const rustProjects: ProjectDataCategory = {
	name: "RUST",
	imageSrc: rustLogo,
	imageAlt: "Rust Logo",
	projects: [
		{
			projectName: "SerBytes",
			repoName: "serbytes",
		},
	],
};

const tsProjects: ProjectDataCategory = {
	name: "TYPESCRIPT",
	imageSrc: typescriptLogo,
	imageAlt: "Typescript Logo",
	projects: [
		{
			projectName: "Personal Website",
			repoName: "the-site",
		},
	],
};

export type ProjectDataCategory = {
	name: string;
	imageSrc: string;
	imageAlt: string;
	projects: ProjectData[];
};

export const projectDataCategories: ProjectDataCategory[] = [
	rustProjects,
	tsProjects,
];
