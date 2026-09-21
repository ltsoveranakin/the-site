import styles from "./AboutPage.module.scss";

export default function AboutPage() {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.aboutSideHeader}>
				<span className={styles.aboutText}>ABOUT</span>
			</div>
			<div className={styles.mainAbout}></div>
		</div>
	);
}
