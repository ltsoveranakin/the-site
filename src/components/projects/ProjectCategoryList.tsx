import styles from "./ProjectCategoryList.module.scss";
import type { ProjectDataCategory } from "./projectDataCategories.ts";

type ProjectCategoryListProps = {
	category: ProjectDataCategory;
};

export default function ProjectCategoryList(props: ProjectCategoryListProps) {
	return (
		<div>
			<div className={styles.categoryDescriptorContainer}>
				<div className={styles.categoryDescriptor}>
					_{props.category.name}
				</div>
				<img
					src={props.category.imageSrc}
					alt={props.category.imageAlt}
				/>
			</div>
		</div>
	);
}
