import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * Styles
 */
import "../scss/_index.scss";

/**
 * Components
 */
import Accordion from "./components/SilcAccordion/index";

ReactDOM.render(
	<Accordion defaultActiveIndex={0}>
		<Accordion.Section>
			<Accordion.Label title="Test Label 1" />
			<Accordion.Content>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eaque odio reprehenderit quidem. Nostrum, vel numquam. Rem nulla blanditiis quasi perspiciatis sed illum earum, velit dolorum, accusantium harum, alias cupiditate.</p>
			</Accordion.Content>
		</Accordion.Section>
		<Accordion.Section>
			<Accordion.Label title="Test Label 2" />
			<Accordion.Content>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat unde nam iste eaque eum quasi minima in dolore, omnis fuga repellat ut quis explicabo enim, magni, nihil vitae. Possimus?</p>
			</Accordion.Content>
		</Accordion.Section>
	</Accordion>,
	document.getElementById("silc-accordion-root")
);

document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("js");
});