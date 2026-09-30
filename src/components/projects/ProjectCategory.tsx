import styles from "./ProjectCategory.module.scss";
import type { ProjectDataCategory } from "./projectDataCategories.ts";
import ProjectCard from "./ProjectCard.tsx";

type ProjectCategoryListProps = {
	category: ProjectDataCategory;
};

export default function ProjectCategory(props: ProjectCategoryListProps) {
	return (
		<div className={styles.projectCategory}>
			<div className={styles.categoryDescriptorContainer}>
				<div className={styles.categoryDescriptor}>
					_{props.category.name}
				</div>
				<div className={styles.categoryDescriptorImageContainer}>
					<img
						src={props.category.imageSrc}
						alt={props.category.imageAlt}
						width={180}
					/>
				</div>
			</div>

			<div className={styles.projectCards}>
				{props.category.projects.map((project) => {
					return <ProjectCard project={project} key={project.name} />;
				})}
			</div>
		</div>
	);
}
