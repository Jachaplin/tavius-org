import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Row, Col } from 'react-bootstrap';
import { Icon, Modal, Button, Input } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './style/Navbar.css';

configureAnchors({
  offset: -80,
  scrollDuration: 500
});

// custom tumblr Icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_862540_ekbd0ks4ksa.js'
});

class FixedNavbar extends Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                <img
                  id="logo"
                  src="images/nav-logo.png"
                  alt="tavius.org banner"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className="button" eventKey={1} href="#home">
                Home
              </NavItem>
              <NavItem className="button" eventKey={2} href="#music">
                Music
              </NavItem>
              <NavItem className="button" eventKey={3} href="#blog">
                Blog
              </NavItem>
              <NavItem className="button" eventKey={4} href="#merch">
                Merch
              </NavItem>
              <NavItem className="button" eventKey={5} href="#">
                Contact
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem
                eventKey={1}
                target="blank"
                href="https://www.facebook.com/tavius?fref=search&__tn__=%2Cd%2CP-R&eid=ARDPs2YfFx0ZUHhMAQAZ6QOoAidyvIJyEFgyu44DBBz_volC9Nh5mGXW5aJWdyh951CsmMKIjwnCi5l9"
              >
                <Icon type="facebook" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={2}
                target="blank"
                href="https://www.instagram.com/tavius_dyer/?hl=en"
              >
                <Icon type="instagram" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={3}
                target="blank"
                href="https://twitter.com/taviusdyer"
              >
                <Icon type="twitter" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={4}
                target="blank"
                href="https://www.youtube.com/channel/UC279oRJBWZMDPoAeET7RBqg"
              >
                <Icon type="youtube" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={5}
                target="blank"
                href="https://taviusdotorg.tumblr.com/"
              >
                <IconFont type="icon-tumblr" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={6}
                target="blank"
                href="https://www.amazon.com/Tavius-Dyer/e/B07B2M344X"
              >
                <Icon type="amazon" theme="outlined" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ScrollableAnchor id={'home'}>
          <Jumbotron>
            <div id="banner-container">
              <div id="padding" />
              <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}
              >
                <img
                  id="banner"
                  src="images/tavius-logo-smaller-blue.png"
                  alt="tavius.org banner"
                />
              </CSSTransitionGroup>
              <Grid>
                <Row>
                  <Col md={9}>
                    <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                      <div id="banner-quote">"A quote for you,</div>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateIn="slideInRight"
                      animateOnce={true}
                    >
                      <div id="banner-quote">from me."</div>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateIn="slideInUp"
                      delay-3s
                      animateOnce={true}
                    >
                      <div id="banner-quote">- Tavius</div>
                    </ScrollAnimation>
                  </Col>
                  <Col md={3}>
                    <ScrollAnimation
                      className="delay-1s"
                      animateIn="bounceInRight"
                      animateOnce={true}
                    >
                      <Button id="subscribe-button" onClick={this.showModal}>
                        Subscribe
                      </Button>
                    </ScrollAnimation>
                  </Col>
                </Row>
              </Grid>
              <Modal
                visible={visible}
                title="Title"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    Return
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={this.handleOk}
                  >
                    Submit
                  </Button>
                ]}
              >
                <Input placeholder="first name" />
                <Input placeholder="last name" />
                <Input placeholder="email" />
              </Modal>
            </div>
          </Jumbotron>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default FixedNavbar;