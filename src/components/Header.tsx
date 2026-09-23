import styles from "./Header.module.scss";
import cornerTri from "../assets/img/corner_tri.svg";
import plusIcon from "../assets/img/plus_icon.svg";
import ConsoleCursor from "./ConsoleCursor.tsx";

const IMAGE_SIZE = 100;
const PLUS_ICON_SIZE = 25;
const stylizedGraphicText = "Stylized graphic";

export default function Header() {
	return (
		<div className={styles.header}>
			<img
				src={cornerTri}
				alt={stylizedGraphicText}
				width={IMAGE_SIZE}
				className={styles.cornerTri}
			/>

			<div className={styles.titleBoxContainer}>
				<div className={styles.titleBox}>
					<PlusColumn />

					<div className={styles.titleContainer}>
						<h1 className={styles.title}>
							Takoda_Paschel // Programmer // Game_Dev
						</h1>
						<ConsoleCursor color={"#c0fe04"} rem={3} />
					</div>

					<PlusColumn />
				</div>
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

function PlusColumn() {
	return (
		<div className={styles.plusColumn}>
			<img
				src={plusIcon}
				alt={stylizedGraphicText}
				width={PLUS_ICON_SIZE}
			/>
			<div className={styles.plusRowSpacer} />
			<img
				src={plusIcon}
				alt={stylizedGraphicText}
				width={PLUS_ICON_SIZE}
			/>
		</div>
	);
}
