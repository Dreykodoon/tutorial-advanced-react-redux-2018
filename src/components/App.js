import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import requireAuth from './requireAuth';

class App extends React.Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => {this.props.changeAuth(false)}}>Sign out</button>
            );
        } else {
            return (
                <button onClick={() => {this.props.changeAuth(true)}}>Sign in</button>
            );
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={requireAuth(CommentBox)} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions)(App);
