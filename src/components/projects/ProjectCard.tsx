import type { ProjectData } from "./projectDataCategories.ts";
import styles from "./ProjectCard.module.scss";
import projectStyles from "./index.module.scss";
import githubLogo from "../../assets/img/3rdparty/github_logo.svg";

type ProjectCardProps = {
	project: ProjectData;
};

export default function ProjectCard(props: ProjectCardProps) {
	return (
		<div className={styles.projectCard}>
			<div className={styles.projectCardHeader}>
				<span className={styles.projectCardHeaderText}>
					{props.project.name}
				</span>
			</div>

			<div className={styles.projectCardContent}>
				<span className={projectStyles.projectsFont}>
					{props.project.description}
				</span>

				<div className={styles.attribContainer}>
					<a
						href={`https://github.com/ltsoveranakin/${props.project.repoName}`}
						className={styles.viewOnGithub}
					>
						<span className={projectStyles.projectsFont}>
							View on GitHub
						</span>
						<img src={githubLogo} alt={"GitHub Logo"} width={50} />
					</a>

					<div
						className={styles.technologiesUsed}
						title={
							"Technologies used in the making of this project"
						}
					>
						{props.project.technologies.map((technology, i) => {
							let margLeft;
							let margRight;

							if (i == 0) {
								margLeft = true;
							} else {
								if (
									i ==
									props.project.technologies.length - 1
								) {
									margLeft = true;
								}
								margRight = true;
							}

							const margSpace = "10px";

							return (
								<a
									href={technology.link}
									style={{
										marginLeft: margLeft ? margSpace : "0",
										marginRight: margRight
											? margSpace
											: "0",
									}}
									key={technology.name}
								>
									<div className={styles.technologyContainer}>
										<img
											src={technology.imageSrc}
											className={styles.technologyImg}
											width={30}
											height={30}
											alt={technology.alt()}
										/>
									</div>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
