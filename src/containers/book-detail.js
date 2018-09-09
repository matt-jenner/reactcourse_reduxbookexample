import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        // Handle initial state of null
        if (!this.props.activeBook || !this.props.activeBook.title) {
            return (
                <div>Select a book to get started...</div>
            );
        };

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.activeBook.title}</div>
                <div>Pages: {this.props.activeBook.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookDetail
    return {
        activeBook: state.activeBook
    };
}

// Promote BookDetail from a component to a container
export default connect(mapStateToProps)(BookDetail)