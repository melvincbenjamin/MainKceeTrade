import React from "react";
import Rectangle from '../images/Rectangle 19 (1).png';
import Rectangle20 from '../images/Rectangle 20.png';
import Rectangle21 from '../images/Rectangle 21.png';
import Rectangle22 from '../images/Rectangle 22.png';
import Rectangle23 from '../images/Rectangle 23.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { FaTelegram, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const About = () => {
    return (
        <Container fluid className="about-container">
            <Row className="first-row">
                <Col lg={12} className="first_img">
                    <img src={Rectangle} alt="rectangle" className="img-fluid" />
                    <h1>Who Are We.</h1>
                </Col>
            </Row>
            <Row className="second-row">
                <Col>
                    <Container className="forex_academy">
                        <img src={Rectangle20} alt="Rectangle20" className="img-fluid" />
                        <p>Trading Times is a leading Forex Academy with a distinguished track record of providing
                            traders, both beginners and experienced traders, with the knowledge and resources needed to
                            thrive in the Forex markets.</p>
                    </Container>
                </Col>
            </Row>
            <Row className="third-row">
                <Col>
                    <Container className="our_principles">
                        <p>Our fundamental values revolve around three essential principles: Education, Community, and
                            Empowerment.</p>
                        <img src={Rectangle21} alt="rectangle21" className="img-fluid" />
                    </Container>
                </Col>
            </Row>
            <Row className="fourth-row">
                <Col>
                    <Container className="helping_individuals">
                        <img src={Rectangle22} alt="Rectangle22" className="img-fluid" />
                        <p>At Trading Times, we are passionate about helping individuals harness the power of the Forex
                            market to achieve financial success.</p>
                    </Container>
                </Col>
            </Row>
            <Row className="fifth-row">
                <Col>
                    <Container className="passionate">
                        <p>Our academy is your gateway to comprehensive, hands-on Forex education that equips you
                            with the knowledge and tools to excel in this dynamic and lucrative field.</p>
                        <img src={Rectangle23} alt="Rectangle23" className="img-fluid" />
                    </Container>
                </Col>
            </Row>
            <hr style={{ color: '#ffffff' }}></hr>
            <Row className="sixth-row">
                <Col>
                    <Container className="our_mission">
                        <h2>Our Mission.</h2>
                        <p>Our mission is to provide top-notch Forex education that is accessible to traders of all levels,
                            from beginners to experienced traders.
                            We offer a range of courses, resources, and guidance to help you develop a solid trading
                            strategy and achieve your financial goals.
                            Also, to foster a supportive community where traders can connect, share insights, and grow
                            together.</p>
                    </Container>
                </Col>
            </Row>
            <Row className="seventh-row">
                <Col>
                    <Container className="social_media">
                        <h2>Our Social Handles.</h2>
                    <div className="system-view">
                    <Navbar>
                        <div className="navbar-container text-center">
                         <Nav className="me-auto">
                            <Nav.Link href="https://t.me/tradingtimes01">
                            <FaTelegram size={24} color="#0088cc " />
                         </Nav.Link>
                        <Nav.Link href="https://www.facebook.com/tradingtimes1">
                            <FaFacebook size={24} color="#ffffff"/>
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/invites/contact/?i=1nxlitlixqbq1&utm_content=qt88oed" className="instagram-icon">
                            <FaInstagram size={24}/>
                        </Nav.Link>
                        <Nav.Link href="https://x.com/trading_times1?t=lFLPg8mzsQWfgFv_uBlA6w&s=09">
                            <FaTwitter size={24} color="#1da1f2" />
                        </Nav.Link>
                        <Nav.Link href="https://youtube.com/@TradingTimes1?si=SCDmXFSZvDpSZVNV">
                            <FaYoutube size={24} color="#ff0000" />
                        </Nav.Link>
                </Nav>
        </div>
      </Navbar>
    </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
