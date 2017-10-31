import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class App extends Component {
    state = {
    	query: ""
    }

    handleOnChange = () => {
    	let searchInput = findDOMNode(this.refs.query);
    	this.setState({query: searchInput.value});
    }

    render() {
    	const {query} = this.state;
        return (
        	<div>
        		<input 
        			type="text" 
        			ref="query" 
        			placeholder="Хайх түлхүүр үг..." 
        			onChange={this.handleOnChange}
        		/>
				<p>
					Таны хайсан үг: <span style={{color: "red"}}>{query}</span>
				</p>
        	</div>
        );
    }
}