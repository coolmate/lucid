import React from 'react';
import createClass from 'create-react-class';
import { Button, PlusIcon } from '../../../index';

const sectionStyle = {
	display: 'flex',
	flexDirection: 'column',
};

const articleStyle = {
	display: 'flex',
	margin: '5 0',
};

const buttonStyle = {
	marginRight: '5',
};

export default createClass({
	render() {
		return (
			<section style={sectionStyle}>
				<article style={articleStyle}>
					<Button style={buttonStyle} kind="invisible">Invisible</Button>
					<Button style={buttonStyle} kind="invisible" isDisabled={true}>
						Invisible disabled
					</Button>
					<Button style={buttonStyle} kind="invisible">
						<PlusIcon />Invisible
					</Button>
					<Button kind="invisible" hasOnlyIcon><PlusIcon /></Button>
				</article>
			</section>
		);
	},
});
