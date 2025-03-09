import React, {useEffect} from "react";
import TransposeChordPage from "./converter";
import "../pages/home.css";
import "../pages/converter.css";

/* 
import VMC from "./incVMC/Vmc";

import { Link } from "react-router-dom";
import GestionAdministrative from "../images/Gestion_administrative.jpg";
import KPIs from "../images/KPIs.jpg";
import FormationCo from "../images/Formation.jpg";

import usePageSEO from "../../hooks/usePageSEO"; */

function Home() {

  useEffect(() => {
    // This code runs after the component is rendered
    const parallaxElement = document.getElementById('parallax1');
    if (parallaxElement) {
      console.log('parallax1 is ready:', parallaxElement);
      // Safe to manipulate or use `parallax1` here
    } else {
      console.error('parallax1 element is not found');
    }
  }, []); // Empty dependency array ensures it runs after initial render


  document.addEventListener("scroll", function () {
    let scrolled = window.pageYOffset;
/*     let parallax1 = document.getElementById("parallax1"); */
/*     let parallax2 = document.getElementById("parallax2");
    let parallax3 = document.getElementById("parallax3"); */

/*     parallax1.style.backgroundPositionY = -(scrolled * 0.5) + "px"; */
    /*     parallax2.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    parallax3.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; */
  });

  return (
    <div className="container-fluid d-flex flex-column">
      <div className="row">
        <section className="parallax pt-4" id="parallax1">
        <div className="col-md-8 mx-auto my-5 mt-5 text-center d-flex flex-column hero">
          {/* <h1 className="main-heading">
                  
                  Linda Avlessi
                  <hr className="w-25 mx-auto" />
                </h1> */}
          <h2 className="fw-bold">Libérez votre créativité musicale avec notre application ! 🎶</h2>
          <p className="col-md-6 text-white text-align-center m-auto mt-5 w-75">
          
          Transformez des accords en un clin d'œil et générez des progressions inspirantes pour vos sessions d'improvisation. Que vous soyez entre amis ou en solo, créez l'ambiance parfaite en quelques clics. Explorez, jouez, improvisez : la musique n'a jamais été aussi accessible. 🚀✨
          </p>


        </div>
        </section>

          <a className="containerArrow mb-1" href="#more">
            <li className="chevron"></li>
            <li className="chevron"></li>
            <li className="chevron"></li>
          </a>
        {/*         <section className="parallax" id="parallax2"></section> */}
        <div className="my-5 secondBlock" id="more">
          <TransposeChordPage></TransposeChordPage>

          <a className="containerArrow my-3" href="#parallax2">
            <li className="chevron"></li>
            <li className="chevron"></li>
            <li className="chevron"></li>
          </a>
        </div>



        <section className="parallax d-flex flex-column my-auto" id="parallax2">
          <div className="row my-auto">
            <p className="col-md-6 text-white text-align-center m-auto mt-5 p-4 lastPart">
         🎶 Générez des suites d'accords et jouez avec vos amis ! Trouvez l'inspiration instantanément et créez des progressions harmonieuses pour vos sessions musicales. 🎸
            </p>
            <button className="bg-none mx-auto mt-5">
              <a className="toRandomTunes" href="/tunes">
                Commence à jammer!
              </a>
            </button>
          </div>
        </section>

        <div className="mx-auto py-3 px--3 m-5 text-center">
          <a className="mx-auto py-3 px-5 my-5 upPageBtn" href="#upPage">
            {" "}
            Retour en haut de page
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
