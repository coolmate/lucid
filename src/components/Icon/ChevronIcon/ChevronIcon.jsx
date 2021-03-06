import _ from 'lodash';
import React from 'react';
import PropTypes from 'react-peek/prop-types';
import { lucidClassNames } from '../../../util/style-helpers';
import { createClass, omitProps } from '../../../util/component-types';
import Icon from '../Icon';

const cx = lucidClassNames.bind('&-ChevronIcon');

const { oneOf } = PropTypes;

const ChevronIcon = createClass({
	displayName: 'ChevronIcon',

	statics: {
		peek: {
			description: `
				A chevron icon.
			`,
			categories: ['visual design', 'icons'],
			extend: 'Icon',
			madeFrom: ['Icon'],
		},
	},

	propTypes: {
		...Icon.propTypes,
		direction: oneOf(['up', 'down', 'left', 'right'])`
			direction variations of the icon
		`,
	},

	getDefaultProps() {
		return {
			direction: 'down',
		};
	},

	render() {
		const { className, direction, size, ...passThroughs } = this.props;

		return (
			<Icon
				{...omitProps(passThroughs, ChevronIcon, [], false)}
				{..._.pick(passThroughs, _.keys(Icon.propTypes))}
				className={cx(
					'&',
					{
						'&-is-down': direction === 'down',
						'&-is-up': direction === 'up',
						'&-is-left': direction === 'left',
						'&-is-right': direction === 'right',
					},
					className
				)}
				size={size}
			>
				<path d="M12.293 5.293l1.414 1.414-5 5c-.39.39-1.024.39-1.414 0l-5-5 1.414-1.414L8 9.586l4.293-4.293z" />
			</Icon>
		);
	},
});

export default ChevronIcon;
