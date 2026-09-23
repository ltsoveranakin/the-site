import {
	projectDataCategories,
	type ProjectDataCategory,
} from "./projectDataCategories.ts";
import styles from "./ProjectCategoryTabs.module.scss";

type ProjectCategoryTabsProps = {
	setCategory: (projectCategory: ProjectDataCategory) => void;
};

export default function ProjectCategoryTabs(props: ProjectCategoryTabsProps) {
	return (
		<div className={styles.projectsHeader}>
			{projectDataCategories.map((projectCategory) => {
				return (
					<div
						className={styles.projectCategoryTab}
						key={projectCategory.name}
						onClick={() => {
							props.setCategory(projectCategory);
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
	);
}
