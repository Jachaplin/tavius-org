import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMerch } from '../../actions/merchActions';
import { getPosts } from '../../actions/postsActions';
import { getSubscribers } from '../../actions/subscActions';
import Spinner from './Spinner';
import ScrollUpButton from 'react-scroll-up-button';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import Navboxes from './Navboxes';
import Merch from '../merch/Merch';
import Books2 from '../books/Books2';
import Music from '../music/Music';
import Goose from '../goose/Goose';
import Blog from '../blog/Blog';
import './style/Landing.css';

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.itemListing.itemListing.length === 0) {
      this.props.getMerch();
      this.props.getPosts();
      this.props.getSubscribers();
    }
  }

  // backgroundColor: '#222',

  render() {
    const { itemListing, posts } = this.props;
    let centerContent;
    if (posts.posts.length === 0 || itemListing.itemListing === 0) {
      centerContent = (
        <div className="spinner-container-black">
          <div className="spinner-position-center">
            <Spinner />
          </div>
        </div>
      );
    } else {
      centerContent = (
        <div>
          <ScrollUpButton />
          <Navboxes />
          <div id="landing-layout">
            <div id="landing-merch">
              <Merch id="landing-merch" />
            </div>
            <div id="landing-books">
              <Books2 />
            </div>
            <div id="landing-music">
              <Music />
            </div>
            <div id="landing-goose">
              <Goose />
            </div>
            <div id="landing-divider">
              
            <Divider style={{ marginBottom: '70px', marginTop: '60px' }} />
            </div>
            <div id="landing-blog">
              <Blog />
            </div>
          </div>
        </div>
      );
    }

    return <div>{centerContent}</div>;
  }
}

Landing.propTypes = {
  posts: PropTypes.object.isRequired,
  getMerch: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  getSubscribers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  itemListing: state.itemListing,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getMerch, getPosts, getSubscribers }
)(withRouter(Landing));
