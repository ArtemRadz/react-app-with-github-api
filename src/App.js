import React, { Component } from 'react';
import axios from 'axios';

import Input from './Search/Input/Input';

class App extends Component {
	constructor(props) {
		super(props);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.state = {
			inputValue: "",
			name: "",
			avatar: ""
		}
	}

	onChangeInput(value) {
		axios.get('https://api.github.com/users/' + value)
			.then((response) => {
				console.log(response);
				this.setState({
					name: response.data.login,
					avatar: response.data.avatar_url
				})
			})
			.catch((error) => {
				console.log(error.response.data.message);
			})
		this.setState({
			inputValue: value
		})
	}

  	render() {
    	return (
    		<div>
	      		<Input inputValue={this.state.inputValue} onChangeInput={this.onChangeInput}/>
	      		<img src={this.state.avatar} alt={this.state.name}/>
      		</div>
    	);
  	}
}

export default App;
