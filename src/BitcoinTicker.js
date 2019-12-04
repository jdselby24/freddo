const React = require('react');

class BitcoinTicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: this.props.price
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.price !== prevProps.price) {
            this.setState({
                price: this.props.price
            })
        }
    }

    render() {
        return(
            <h2 className='price'> 1 {this.props.lhtoken} = {this.state.price} {this.props.rhtoken} </h2>
        )
    }
}

export default BitcoinTicker