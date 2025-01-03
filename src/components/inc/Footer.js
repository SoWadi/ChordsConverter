import React from "react";
import { Link } from "react-router-dom";
import "../inc/Footer.css";

function Footer() {
  return (
    <section className="section footer text-white mt-5 customise">
      {/* <hr/> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-5 py-5">
            <h5>Accès rapides</h5>
            <hr className="w-50" />
            <div>
              <Link className="text-white text-decoration-none p-1" to="/">
                Accueil
              </Link>
            </div>
            <div>
              <Link className="text-white text-decoration-none p-1" to="/tunes">
                Tunes
              </Link>
            </div>
            <div>
              <Link className="text-white text-decoration-none p-1" to="/converter">
                Converter
              </Link>
            </div>
            <div>
              <Link
                className="text-white text-decoration-none p-1"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md-4 px-5 py-5">
            <h5>Misc.</h5>
            <hr className="w-50" />
            {/* <div>
              <p className="text-white mb-1">
                <span className="pe-3 px-lg-3">
                  lien
                </span>{" "}
                07 xx xx xx xx
              </p>
            </div>
            <div>
              <p className="text-white mb-1">
               
                xxx@xxxxx.com
              </p>
            </div> */}
            <div className="col-md-12">
              <hr className="w-25" />
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/company/reactiserv/"
                  target="open_blank"
                ></a>
                {/*                 <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="mr-3 mx-3" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 px-5">
            <div>
              <Link to="/" className=""></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
