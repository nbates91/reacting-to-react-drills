import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Goodbye World!',
			placeHolder: 'Type Here!',
			inputVal: '',
			hasLoaded: false,
		};
		this.handleLoad = this.handleLoad.bind(this);
	}
	handleChange = value => {
		this.setState({ inputVal: value });
	};

	handleLoad() {
		this.setState(e => ({
			hasLoaded: !e.hasLoaded,
		}));
	}
	componentDidMount() {
		this.setState({ hasLoaded: true });
	}
	render() {
		if (this.state.hasLoaded === true) {
			return (
				<React.Fragment>
					<h1>{this.props.pizza}</h1>
					<h1>{this.state.text}</h1>
					<input
						placeholder={this.state.placeHolder}
						value={this.state.inputVal}
						onChange={event => this.handleChange(event.target.value)}
					/>
					<br />
					<br />
					<button onClick={this.handleLoad}>Click me!</button>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<h1>Loading...</h1>
					<br />
					<br />
					<button onClick={this.handleLoad}>Click me!</button>
				</React.Fragment>
			);
		}
	}
}
