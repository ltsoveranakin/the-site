import { BlackBoxed } from "../Boxed.tsx";
import PageBodyContent from "./PageBodyContent.tsx";

export default function PageBody() {
	return (
		<>
			<BlackBoxed>
				<PageBodyContent header={"About"} content={[]} />
			</BlackBoxed>

			<BlackBoxed>
				<PageBodyContent
					header={"Projects"}
					content={[
						{
							text: "Personal Website",
						},
					]}
				/>
			</BlackBoxed>
		</>
	);
}
