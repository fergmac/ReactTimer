var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                this.handleStart();
                break;
                case 'stopped':
                this.setState({count: 0});
                case 'paused':
                clearInterval(this.timer)
                this.timer = undefined;
                break;
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    handleStart = () => {
        this.timer = setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000);
    }
    handleStatusChange = (newTimerStatus) => {
        console.log(newTimerStatus);
        this.setState({timerStatus: newTimerStatus});
    }
    render() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <p className="page-title">Timer App</p>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
};

module.exports = Timer;