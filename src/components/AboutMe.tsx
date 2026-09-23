import styles from "./AboutMe.module.scss";

export default function AboutMe() {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.aboutBody}>
				<div className={styles.aboutHeader}>
					<h2 className={styles.aboutHeading}>About Me</h2>
				</div>

				<div className={styles.aboutContent}>
					<h3 className={styles.aboutText}>

					</h3>
				</div>
			</div>
		</div>
	);
}
