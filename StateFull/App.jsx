import React from 'react'

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            data : [
                {
                    "id"   : 1,
                    "name" : "Tasfin",
                    "age"  : "30"
                },
                {
                    "id"   : 2,
                    "name" : "Hasan",
                    "age"  : "31"
                },
                {
                    "id"   : 3,
                    "name" : "Tareq",
                    "age"  : "32"
                },
                {
                    "id"   : 4,
                    "name" : "Tomal",
                    "age"  : "25"
                }
            ]
        }
    }

    render(){
        var cssStyle = {
            border : '1px solid #e0e0e0',
            width  : '50%'
        }
        return(
            <div>
                <Header />
                <Content />
                <table style={cssStyle}>
                    <tbody>
                    {this.state.data.map( (person, i) => <TableRow key = {i} data = {person} /> )}
                    </tbody>
                </table>
            </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return (
            <div>
                <h3>Content 2</h3>
                <p>This is content text...</p>
            </div>
        );
    }
}

class TableRow extends React.Component{
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

export default App;
