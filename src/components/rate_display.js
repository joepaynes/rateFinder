import React, { Component } from 'react';
import { connect } from 'react-redux';

class RateDisplay extends Component {
    render() {
        return (
            <div>{this.nzPost}</div>
        );
    }
}

function mapStateToProps(state) {
    return { nzPost: state.nzPost};
}

export default connect(mapStateToProps)(RateDisplay);