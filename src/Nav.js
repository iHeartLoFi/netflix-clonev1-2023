import React, {useEffect, useState} from 'react';
import "./Nav.css";

function Nav () {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
    window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <div className = {`nav ${show && "nav_black"}`} >
        <img
        className="nav_logo"
        src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png"
        alt="Netflix Logo"
        />
        <img className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="Netflix Logo" />
    </div>
  )
}

export default Nav