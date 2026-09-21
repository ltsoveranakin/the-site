import styles from "./Header.module.scss";
import corner_tri from "../assets/img/corner_tri.svg";

const IMAGE_SIZE = 200;

export default function Header() {
	return (
		<div className={styles.header}>
			<img
				src={corner_tri}
				alt={"Corner stylized image"}
				width={IMAGE_SIZE}
				className={styles.cornerTri}
			/>

			<div className={styles.titleContainer}>
				<h1 className={styles.title}>
					Takoda_Paschel // Programmer // Game_Dev
				</h1>
			</div>

			<div
				style={{
					width: IMAGE_SIZE,
					height: IMAGE_SIZE,
					flexShrink: 0,
				}}
			></div>
		</div>
	);
}
