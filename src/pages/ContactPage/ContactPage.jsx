import React from 'react';
import "./ContactPage.css";
//RRD
import { Link } from "react-router-dom";


const ContactPage = () => {
  return (
    <div className='pageContacto'>
        <section>
          <h1> ¡Contactanos!</h1>
        </section>
        <section className='contacto'>
          <p>Si tenés alguna duda de cómo comprar, escribinos por Instagram:</p>
          <div>
              <Link to="https://www.instagram.com/tokio_pijamas/" target="_blank" >
                <p>@tokio_pijamas</p>
              </Link>
          </div>
        </section>
    </div>
  )
}


export default ContactPage;