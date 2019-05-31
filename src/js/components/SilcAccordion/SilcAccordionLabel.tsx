import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface SilcAccordionLabelProps {
	updateActiveIndex?(): void,
	onClick?(): void,
	sectionId?: string,
	active?: boolean,
	title?: string
};

export default class SilcAccordionLabel extends React.Component<SilcAccordionLabelProps, {}> {
	static propTypes = {
		updateActiveIndex: PropTypes.func,
		onClick: PropTypes.func,
		sectionId: PropTypes.string,
		active: PropTypes.bool,
		title: PropTypes.string
	}

	static defaultProps = {
		onClick: () => {} // noop by default
	}

	constructor(props: SilcAccordionLabelProps) {
		super(props);
	}

	handleClick = () => {
		// Toggle active state
		this.props.updateActiveIndex();

		// Perform any optional side-effects
		this.props.onClick();
	}

	render() {
		const contentId = `silc-accordion__content-${this.props.sectionId}`;
		const labelId = `silc-accordion__label-${this.props.sectionId}`;
		return <button
			id={ labelId }
			className="silc-accordion__label"
			onClick={ this.handleClick }
			aria-controls={ contentId }
			aria-expanded={ this.props.active }
		>
			{ this.props.title }
		</button>;
	}
};