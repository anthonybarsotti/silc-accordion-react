import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface SilcAccordionContentProps {
	sectionId?: string,
	active?: boolean
};

export default class SilcAccordionContent extends React.Component<SilcAccordionContentProps, {}> {
	static propTypes = {
		sectionId: PropTypes.string,
		active: PropTypes.bool
	}

	constructor(props: SilcAccordionContentProps) {
		super(props);
	}

	render() {
		const contentId = `silc-accordion__content-${this.props.sectionId}`;
		const labelId = `silc-accordion__label-${this.props.sectionId}`;
		return <div
			id={ contentId }
			className="silc-accordion__content"
			aria-labelledby={ labelId }
			aria-hidden={ !this.props.active }
		>
			{ this.props.children }
		</div>;
	}
};