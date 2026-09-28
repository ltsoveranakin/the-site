import type { ProjectData } from "./projectDataCategories.ts";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
	project: ProjectData;
};

export default function ProjectCard(props: ProjectCardProps) {
	return (
		<div>
			<div className={styles.projectCardHeader}>
				<span className={styles.projectCardHeaderText}>
					{props.project.name}
				</span>
			</div>

			<div className={styles.projectCardContent}>
				<span>{props.project.description}</span>

				<div
					className={styles.technologiesUsed}
					title={"Technologies used in the making of this project"}
				>
					{props.project.technologies.map((technology) => {
						return (
							<a href={technology.link} key={technology.name}>
								<div className={styles.technologyContainer}>
									<img
										src={technology.imageSrc}
										className={styles.technologyImg}
										width={30}
										alt={technology.alt()}
									/>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
