import React from 'react'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Content />
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
                <h3>Content</h3>
                <p>This is content text</p>
            </div>
        );
    }
}

export default App;
