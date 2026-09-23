import type { ProjectData } from "./Project.tsx";

const rustProjects: ProjectDataCategory = [
	{
		projectName: "Personal Website",
		repoName: "the-site",
	},
];

type ProjectDataCategory = {
	categoryName: string,
	projects: ProjectData[]
}

export const projectsData: ProjectDataCategory[] =
