import React from 'react';

export class TableRow extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>

		);
	}
}

export class Header extends React.Component{
	render(){
		return(
			<h1>{this.props.headerProps}</h1>
		);
	}
}


export class Content extends React.Component{
	render(){
		return(
			<div>
				<h3>{this.props.contentProps}</h3>
				<p>The content text...</p>
			</div>
		);
	}
}

export class Counter extends React.Component{
	render(){
		return(
			<div>				
				<div>Counter: {this.props.countProps}</div>
			</div>
		);
	}
}