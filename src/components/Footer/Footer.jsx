import React from "react";
import "./Footer.css";

//RRD
import { Link } from "react-router-dom";


const Footer = ({}) => {
  return (
    <div>
        <section className='footer'>
            <div className="linkConteiner">
                <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank" >
                  <p className="instagram">@tokio_pijamas</p>
                </Link>
            </div>
        </section>
    </div>
  );
};

export default Footer;

