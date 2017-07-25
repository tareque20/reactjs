import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            "header"   : "Header from props...",
            "content"  : "Content from props..."
        }
    }

    render(){
        return(
            <div>
                <Header headerProps = {this.state.header} />
                <Content contentProps = {this.state.content} />
            </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
                <div>---------------------</div>
                <h4>{this.props.headerProps}</h4>
                <br />
                <br />
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return (
            <div>
                <h3>Content</h3>
                <div>---------------------</div>
                <p>{this.props.contentProps}</p>
            </div>
        );
    }
}

export default App;
