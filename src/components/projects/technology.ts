import typescriptLogo from "../../assets/img/3rdparty/ts_logo.svg";
import rustLogo from "../../assets/img/3rdparty/rust_logo.svg";

export class Technology {
	static TYPESCRIPT = new Technology(
		typescriptLogo,
		"https://www.typescriptlang.org/",
		"TypeScript",
	);

	static RUST = new Technology(rustLogo, "https://rust-lang.org/", "Rust");

	private constructor(
		readonly imageSrc: string,
		readonly link: string,
		readonly name: string,
	) {}

	public alt() {
		return `${this.name} logo`;
	}
}
