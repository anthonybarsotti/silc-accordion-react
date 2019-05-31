import * as React from 'react';
import * as PropTypes from 'prop-types';
const uuidv4 = require("uuid/v4");

export interface SilcAccordionSectionProps {
	updateActiveIndex?(): void,
	active?: boolean
};

export default class SilcAccordionSection extends React.Component<SilcAccordionSectionProps, {}> {
	private uuid: string;

	static propTypes = {
		updateActiveIndex: PropTypes.func,
		active: PropTypes.bool
	}

	constructor(props: SilcAccordionSectionProps) {
		super(props);

		this.uuid = uuidv4();
	}

	labelWithInjectedProps() {
		const { active, updateActiveIndex } = this.props;
		const label = React.Children.toArray(this.props.children)[0] as React.ReactElement;
		return React.cloneElement(label, {
			sectionId: this.uuid,
			updateActiveIndex,
			active
		});
	}

	contentWithInjectedProps() {
		const { active } = this.props;
		const content = React.Children.toArray(this.props.children)[1] as React.ReactElement;
		return React.cloneElement(content , {
			sectionId: this.uuid,
			active
		});
	}

	render() {
		return <div className="silc-accordion__section">
			{ this.labelWithInjectedProps() }
			{ this.contentWithInjectedProps() }
		</div>
	}
};
