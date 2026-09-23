import styles from "./ProjectCategoryList.module.scss";

type ProjectCategoryListProps = {
	categoryName: string;
	categoryImage: string;
	categoryImageAlt: string;
};

export default function ProjectCategoryList(props: ProjectCategoryListProps) {
	return (
		<div>
			<div className={styles.categoryDescriptorContainer}>
				<div className={styles.categoryDescriptor}>
					_{props.categoryName}
				</div>
				<img src={props.categoryImage} alt={props.categoryImageAlt} />
			</div>
		</div>
	);
}
