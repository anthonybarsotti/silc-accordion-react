import * as React from 'react';
import * as PropTypes from 'prop-types';


export interface SilcAccordionProps {
	defaultActiveIndex?: number,
	children?: React.ReactElement[]
};

export interface SilcAccordionState {
	activeIndex: number
};

export default class SilcAccordion extends React.Component<SilcAccordionProps, SilcAccordionState> {
	static propTypes = {
		defaultActiveIndex: PropTypes.number
	}

	static defaultProps = {
		defaultActiveIndex: -1 // Assume no sections are active by default
	}

	constructor(props: SilcAccordionProps) {
		super(props);
		
		this.state = {
			activeIndex: props.defaultActiveIndex
		} as SilcAccordionState;
	}

	sectionsWithInjectedProps() {
		return React.Children.map(this.props.children, (section, index) => {
			const active = this.state.activeIndex === index;
			return React.cloneElement(section as React.ReactElement, {
				updateActiveIndex: () => {
					this.setState({
						activeIndex: active ? -1 : index // If the current index is already active, close it
					});
				},
				active
			});
		});
	}

	render() {
		return <div className="silc-accordion">{ this.sectionsWithInjectedProps() }</div>;
	}
};
