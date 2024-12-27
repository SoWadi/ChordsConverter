import React from "react";
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
  return (
    <div className="container d-flex flex-column">
      <div className="row">
        <div className="col-md-12 pb-5 my-5 text-center d-flex flex-column ">
          {/* <h1 className="main-heading">
                  
                  Linda Avlessi
                  <hr className="w-25 mx-auto" />
                </h1> */}
          <h1>What is Lorem Ipsum?</h1>
          <p className="col-8 lorem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
{/*           <a className="mx-auto py-5 px-5 my-5 enSavoirPlusBtn" href="#more">
            {" "}
            Transposer les accords
          </a>{" "} */}


          <a class="containerArrow my-3 pb-5" href="#more">
          <a class="chevron"></a>
          <a class="chevron"></a>
          <a class="chevron"></a>
        </a>


          {/* <div class="wrap">
  <button class="wrap button">Submit</button>
</div>
 */}
          {/*     <a 
    className="btn btn-5"
    href="#more" 
    >Hover</a> 


    <a 
    className="mx-auto py-2 px-4 my-5 btn btn-white btn-animate text-box"
    href="#more" 
    >click me</a> */}
        </div>
        <div className="my-5 secondBlock" id="more">
          <TransposeChordPage></TransposeChordPage>
        </div>

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
