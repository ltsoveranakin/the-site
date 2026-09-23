import styles from "./Projects.module.scss";
import ProjectCategoryList from "./ProjectCategoryList.tsx";
import rustLogo from "../../assets/img/3rdparty/rust_logo.svg";
import { useState } from "react";
import { projectsData } from "./projectsData.ts";

export default function Projects() {
	const [currentProject, setCurrentProject] = useState();

	return (
		<div>
			<div className={styles.projectsHeader}>{projectsData}</div>
			<ProjectCategoryList
				categoryName={"RUST"}
				categoryImage={rustLogo}
				categoryImageAlt={"Rust logo"}
			/>
		</div>
	);
}
