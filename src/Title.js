import React from 'react';

class Title extends React.Component {
    
    constructor(props) {
        super(props);


        this.state = {
            content: this.props.content
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.content !== prevProps.content) {
            this.setState({
                content: this.props.content
            });
        };
    }

    render() {
        return(
            <h1 className="title">{this.state.content}</h1>
        )
    }
}

export default Title;