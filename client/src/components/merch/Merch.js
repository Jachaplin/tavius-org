import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Merch.css';

class Merch extends Component {
  constructor() {
    super();
    this.state = {
      targetItem: {},
      currMerchIndex: 0
    };
  }

  componentDidMount() {
    if (this.props.forbiddenListing.forbiddenListing.length > 0) {
      this.setState({
        targetItem: this.props.forbiddenListing.forbiddenListing[0]
      });
    }
  }

  onClick = item => {
    this.setState({
      targetItem: item
    });

    setTimeout(() => {
      this.setState({
        currMerchIndex: this.props.forbiddenListing.forbiddenListing.findIndex(
          desc => desc === this.state.targetItem
        )
      });
    }, 1);
  };

  render() {
    const { forbiddenListing } = this.props.forbiddenListing;
    const { currMerchIndex } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    let itemPicture;

    if (forbiddenListing[currMerchIndex] === undefined) {
      itemPicture = null;
    } else {
      itemPicture = (
        <div id="item-wrapper" className="img-wrapper">
          <a href={forbiddenListing[currMerchIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              className="merch-img"
              id="item-img"
              src={forbiddenListing[currMerchIndex].picture}
              alt="shirt"
            />
          </a>
        </div>
      );
    }

    let itemDesc;

    if (forbiddenListing[currMerchIndex] === undefined) {
      itemDesc = null;
    } else {
      itemDesc = (
        <div>
          
          <Jumbotron id="desc-jumbotron">
            <h4 id="desc-text">{forbiddenListing[currMerchIndex].title}</h4>
            <h4 id="desc-price">{forbiddenListing[currMerchIndex].price}</h4>
            <div id="link-container">
              <a
                id="buy-link"
                href={forbiddenListing[currMerchIndex].link}
                target="_blank"
                 rel="noopener noreferrer"
              >
                <button className="buy-button">Buy</button>
              </a>
            </div>
          </Jumbotron>

         

        </div>
      );
    }

    // only show 5 thumbnails for Laptop
    const thumbnailGal = forbiddenListing.slice(0, 5).map((item, i) => (
      <div id="thumb-container" key={i}>
        <Thumbnail
          id="store-thumb"
          src={item.picture}
          alt="242x200"
          onClick={() => this.onClick(item)}
          value={item}
        />
      </div>
    ));

    // only show 6 thumbnails for mobile
    const thumbnailGalMobile = forbiddenListing.slice(0, 6).map((item, i) => (
      <div id="thumb-container" key={i}>
        <Col xs={6} md={3}>
          
          <Thumbnail
            id="store-thumb-mobile"
            src={item.picture}
            alt="242x200"
            onClick={() => this.onClick(item)}
            value={item}
          >
            <h4 id="desc-text-mobile">{item.title}</h4>
            <h4 id="desc-price-mobile">{item.price}</h4>
            <div id="link-container-mobile">
              <a
                id="buy-link-mobile"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="buy-button-mobile">Buy</button>
              </a>
            </div>
            </Thumbnail>
          
        </Col>
        
      </div>
    ));

    return (
      <div id="store-page-container">
        <Grid>
          <Row className="show-grid">
            <Col id="merch-header" className="header-img-col" md={12}>
              <img
                className="img-header"
                src="/images/merch-header.png"
                alt="merch"
              />
            </Col>
          </Row>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Row className="show-grid">
              <Col md={12}>
                <Divider style={{ marginBottom: '40px', marginTop: '-40px' }}>
                  <img id="apple-img" src="/images/forbidden01.png" alt="" />
                </Divider>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          
          <div id="desktop-merch-display">
            <Row className="show-grid">
              <Col id="pic-col" md={5} mdPush={7}>
                <div className="slider-container">{itemPicture}</div>
              </Col>
              <Col id="desc-col" md={7} mdPull={5}>
                {itemDesc}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={12}>
                <Divider id="store-divider" style={{ marginBottom: '50px' }} />
              </Col>
            </Row>
            <Row id="thumb-gal-container" className="show-grid">
              <Col id="merch-thumb-laptop" md={12}>
                <Slider {...settings}>{thumbnailGal}</Slider>
              </Col>
            </Row>
          </div>

          <div id="mobile-merch-display">
            <Row className="show-grid">
              <Col md={12}>
                {thumbnailGalMobile}
              </Col>
            </Row>
          </div>
            
            <Row className="show-grid">
              <Col md={12}>
                <Link to="/store">
                  <Divider style={{ marginBottom: '80px', marginTop: '30px' }}>
                    See More
                  </Divider>
                </Link>
              </Col>
            </Row>
          </ScrollAnimation>
        </Grid>
      </div>
    );
  }
}

Merch.propTypes = {
  forbiddenListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forbiddenListing: state.forbiddenListing
});

export default connect(mapStateToProps)(Merch);
