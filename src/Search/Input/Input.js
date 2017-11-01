import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		const value = event.target.value;
		this.props.onChangeInput(value);
	}

	render() {
		return (
			<input 
      			type="text"
      			placeholder="github login"
      			autoFocus="true"
      			value={this.props.inputValue}
      			onChange={this.onChange}
      		/>
		);
	}
}

export default Input;