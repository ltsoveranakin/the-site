import { Technology } from "./technology.ts";

const rustProjects: ProjectDataCategory = {
	name: Technology.RUST.name.toUpperCase(),
	imageSrc: Technology.RUST.imageSrc,
	imageAlt: Technology.RUST.alt(),
	projects: [
		{
			name: "SerBytes",
			description:
				"A simple data serializer originally made so enums could be serialized in as little space as possible",
			repoName: "serbytes",
			technologies: [Technology.RUST],
		},
		{
			name: "Napoleon Amp",
			description:
				"A minimal music client to manage, play, and store mp3 files",
			repoName: "napoleon_amp",
			technologies: [Technology.RUST],
		},
	],
};

const tsProjects: ProjectDataCategory = {
	name: Technology.TYPESCRIPT.name.toUpperCase(),
	imageSrc: Technology.TYPESCRIPT.imageSrc,
	imageAlt: Technology.TYPESCRIPT.alt(),
	projects: [
		{
			name: "Personal Website",
			description: "My own personal website",
			repoName: "the-site",
			technologies: [Technology.TYPESCRIPT, Technology.REACT],
		},
	],
};

export const projectDataCategories: ProjectDataCategory[] = [
	rustProjects,
	tsProjects,
];

export type ProjectData = {
	name: string;
	description: string;
	technologies: Technology[];
	repoName?: string;
};

export type ProjectDataCategory = {
	name: string;
	imageSrc: string;
	imageAlt: string;
	projects: ProjectData[];
};
