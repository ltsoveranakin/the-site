import styles from "./Header.module.scss";
import cornerTri from "../assets/img/corner_tri.svg";
import plusIconNoSquare from "../assets/img/plus_icon.svg";
import plusIconSquare from "../assets/img/plus_icon_square.svg";
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
					<PlusColumn
						top={PlusType.Square}
						bottom={PlusType.NoSquare}
					/>

					<div className={styles.titleContainer}>
						<h1 className={styles.title}>
							Takoda_Paschel // Programmer // Game_Dev
						</h1>
						<ConsoleCursor color={"#c0fe04"} rem={3} />
					</div>

					<PlusColumn
						top={PlusType.NoSquare}
						bottom={PlusType.Square}
					/>
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

enum PlusType {
	Square,
	NoSquare,
}

function getPlusImgSrc(plusType: PlusType) {
	switch (plusType) {
		case PlusType.Square: {
			return plusIconSquare;
		}

		case PlusType.NoSquare: {
			return plusIconNoSquare;
		}
	}
}

type PlusColumnProps = {
	top: PlusType;
	bottom: PlusType;
};

function PlusColumn(props: PlusColumnProps) {
	return (
		<div className={styles.plusColumn}>
			<img
				src={getPlusImgSrc(props.top)}
				alt={stylizedGraphicText}
				width={PLUS_ICON_SIZE}
			/>
			<div className={styles.plusRowSpacer} />
			<img
				src={getPlusImgSrc(props.bottom)}
				alt={stylizedGraphicText}
				width={PLUS_ICON_SIZE}
			/>
		</div>
	);
}
