import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer'
const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col style={{
              fontFamily: 'outfit',
              fontSize: 20,
              fontWeight: 700,
              textAlign: 'center',
              color: 'white',
            }}>
            <p className="text-center">All Rights Reserved by <span className='trading'>Trading</span> Times.</p>
            <p className="text-center">© {currentYear} Trading Times</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
