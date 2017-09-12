import React from 'react';
import {TableRow, Header, Content, Counter} from './template.jsx';

class App extends React.Component{
	constructor(props) {
      super(props);

      this.state = {
         data:
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },

            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },

            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
         header: "Header from props...",
         content: "Content from props...",
         count: 0,
         myName: "",
         mobile: ""
      }

      this.counter = this.counter.bind(this);
      this.handleChangeName   = this.handleChangeName.bind(this);
      this.handleChangeMobile = this.handleChangeMobile.bind(this);
      this.handleSubmit		  = this.handleSubmit.bind(this);
   }

   handleChangeMobile(event){
   		this.setState({mobile: event.target.value});
   }

   handleChangeName(event){
   		this.setState({myName: event.target.value});
   }

   handleSubmit(event){
   		alert("A name submitted: " + this.state.myName + "\n" + "Mobile: " + this.state.mobile);
   		this.setState({myName: ""});
   		this.setState({mobile: ""});
   		event.preventDefault();
   }

   counter(){
   		this.setState({count: this.state.count+1})
   }

	render(){
		var style = {
			border: '1px dotted #e0e0e0'
		}
		return (
			<div>
				Hello World Testing...
				<Header headerProps={this.state.header} />
				<Content contentProps={this.state.content} />
				<table style={style} width='100%'>
	               <tbody>
	                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
	               </tbody>
	            </table> <br />
	            <button onClick = {this.counter}>INCREMENT</button>
	            <Counter countProps={this.state.count} />
	            <br />
	            <form onSubmit={this.handleSubmit}>
		        	<label>
				        Name:
				        <input type="text" value={this.state.myName} onChange={this.handleChangeName} />
			        </label> <br /><br />
			        <label>
				        Mobile:
				        <input type="text" value={this.state.mobile} onChange={this.handleChangeMobile} />
			        </label>

			        <input type="submit" value="Submit" />
			    </form>
			</div>
		)
	}
}


export default App;
