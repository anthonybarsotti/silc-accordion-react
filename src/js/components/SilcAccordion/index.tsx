import * as React from "react";

import SilcAccordion, { SilcAccordionProps } from "./SilcAccordion";
import SilcAccordionSection from "./SilcAccordionSection";
import SilcAccordionLabel from "./SilcAccordionLabel";
import SilcAccordionContent from "./SilcAccordionContent";

function root(props: SilcAccordionProps) {
	return <SilcAccordion {...props} />;
};

root.Section = SilcAccordionSection;
root.Label = SilcAccordionLabel;
root.Content = SilcAccordionContent;

export default root;