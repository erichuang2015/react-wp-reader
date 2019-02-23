import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LatestBlogPosts from './LatestBlogPosts';
import Post from './Post';


export class AppContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postID: null
        }
        this.endpoint = this.props.endpoint;
    }

    

    render() {
        return (
            <Router>
                <main>
                    <Route exact path="/" render={(props) =>  <LatestBlogPosts {...props} endpoint={this.endpoint}  /> } />
                    <Route path="/:slug" render={(props) => <Post {...props} endpoint={this.endpoint} />} />
                </main>
            </Router>
        );
    }
}

export default AppContent;