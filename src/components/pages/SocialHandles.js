import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './SocialHandles.css';
import { FaTelegram, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialHandles = () => {
  return (
    <Navbar>
    <div className="navbar-container"> 
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
  );
};

export default SocialHandles;
