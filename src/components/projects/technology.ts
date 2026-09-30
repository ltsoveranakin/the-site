import typescriptLogo from "../../assets/img/3rdparty/ts_logo.svg";
import rustLogo from "../../assets/img/3rdparty/rust_logo.svg";
import reactLogo from "../../assets/img/3rdparty/react_logo.svg";

export class Technology {
	static TYPESCRIPT = new Technology(
		typescriptLogo,
		"https://www.typescriptlang.org/",
		"TypeScript",
		1,
	);

	static RUST = new Technology(rustLogo, "https://rust-lang.org/", "Rust", 1);

	static REACT = new Technology(reactLogo, "https://react.dev/", "React", 0);

	private constructor(
		readonly imageSrc: string,
		readonly link: string,
		readonly name: string,
		readonly priority: number,
	) {}

	public alt() {
		return `${this.name} logo`;
	}
}
