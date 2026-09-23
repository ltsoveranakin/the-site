import styles from "./Projects.module.scss";
import ProjectCategory from "./ProjectCategory.tsx";

import { useState } from "react";
import {
	projectDataCategories,
	type ProjectDataCategory,
} from "./projectDataCategories.ts";
import ProjectCategoryTabs from "./ProjectCategoryTabs.tsx";

export default function Projects() {
	const [category, setCategory] = useState<ProjectDataCategory>(
		projectDataCategories[0],
	);

	return (
		<div className={styles.projectsContainer}>
			<ProjectCategoryTabs setCategory={setCategory} />
			<ProjectCategory category={category} />
		</div>
	);
}
