import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskTimeline extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first: true,
            second: false,
            third: false
        }

        this.changeTime = this.changeTime.bind(this);
        this.addBoldClass = this.addBoldClass.bind(this);
    }

    changeTime(path){
        if(path.includes('new')){
            this.setState({
                first: true,
                second: false,
                third: false
            });
        }else if(path.includes('price')){
            this.setState({
                first: false,
                second: true,
                third: false
            });
        }else{
            this.setState({
                first: false,
                second: false,
                third: true
            });
        }
    }

    componentDidMount(){
        this.changeTime(this.props.location.pathname);
    }

    componentWillReceiveProps(newProps){
        if(newProps.location.pathname !== this.props.location.pathname){
            this.changeTime(newProps.location.pathname);
        }
        // debugger;
    }

    addBoldClass(step){
        if(this.state[step]){
            return 'bold';
        }else{
            return '';
        }
    }

    render(){
        return(
            <div className = 'timeline'>
                <div className = 'form-timeline-container'>
                    <div className = {this.addBoldClass('first')}>
                        <i className="fas fa-pencil-alt"></i>
                        <span>1. Fill Out Task Details</span>
                    </div>
                    <div className={this.addBoldClass('second')}>
                        <i class="fas fa-users"></i>
                        <span>2. View Taskers & Prices</span>
                    </div>
                        <div className={this.addBoldClass('third')}>
                        <i class="fas fa-hands-helping"></i>
                        <span>3. Confirm & Book</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(TaskTimeline);