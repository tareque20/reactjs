import React from "react";


export default class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render(){
        return(
            <div>
                <div>Timer: {this.state.time.toLocaleTimeString()}</div>
            </div>
        );
    }
}