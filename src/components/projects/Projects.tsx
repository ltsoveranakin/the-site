import styles from "./Projects.module.scss";
import ProjectCategoryList from "./ProjectCategoryList.tsx";

import { useState } from "react";
import {
	projectDataCategories,
	type ProjectDataCategory,
} from "./projectDataCategories.ts";

export default function Projects() {
	const [category, setCategory] = useState<ProjectDataCategory>(
		projectDataCategories[0],
	);

	return (
		<div>
			<div className={styles.projectsHeader}>
				{projectDataCategories.map((projectCategory) => {
					return (
						<div
							className={styles.projectCategoryTab}
							key={projectCategory.name}
							onClick={() => {
								setCategory(projectCategory);
							}}
						>
							<div className={styles.projectCategoryTabName}>
								{projectCategory.name}
							</div>

							<div className={styles.projectCategoryTabCount}>
								{projectCategory.projects.length}
							</div>
						</div>
					);
				})}
			</div>
			<ProjectCategoryList category={category} />
		</div>
	);
}
