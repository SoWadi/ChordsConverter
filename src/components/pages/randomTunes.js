import React, { useState } from "react";
import '../pages/randomTunes.css';

// Accords majeurs et mineurs
const accordsMajeurs = ["C", "D", "E", "F", "G", "A", "B"];
const accordsMineurs = ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"];

// Fonction pour générer une progression d'accords
const genererProgression = () => {
  const progressionsPossibles = [
    ["I", "IV", "V", "I"], // I - IV - V - I
    ["ii", "V", "I"], // ii - V - I
    ["I", "vi", "IV", "V"], // I - vi - IV - V
    ["I", "V", "vi", "IV"], // I - V - vi - IV
  ];

  // Choisir une progression aléatoire
  const progressionChoisie =
    progressionsPossibles[
      Math.floor(Math.random() * progressionsPossibles.length)
    ];

  // Choisir une tonalité aléatoire (par exemple Do majeur)
  const tonalite =
    accordsMajeurs[Math.floor(Math.random() * accordsMajeurs.length)];

  // Fonction pour obtenir un accord en fonction de la tonalité
  const getAccord = (type) => {
    const index = accordsMajeurs.indexOf(tonalite);

    switch (type) {
      case "I":
        return accordsMajeurs[index];
      case "IV":
        return accordsMajeurs[(index + 3) % accordsMajeurs.length];
      case "V":
        return accordsMajeurs[(index + 4) % accordsMajeurs.length];
      case "vi":
        return accordsMineurs[(index + 5) % accordsMajeurs.length];
      case "ii":
        return accordsMineurs[(index + 1) % accordsMajeurs.length];
      default:
        return tonalite;
    }
  };

  // Construire la progression d'accords
  const progression = progressionChoisie.map((acc) => getAccord(acc));
  console.log("progression!: ", progression[0]);
  return progression.join(" - ");
};

const RandonTunes = () => {
  const [progression, setProgression] = useState("");

  // Générer une nouvelle progression d'accords
  const handleGenerate = () => {
    const nouvelleProgression = genererProgression();
    setProgression(nouvelleProgression);
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Randon Tunes generator</h1>
      <div className="d-flex flex-column justify-content-around tunesBlock">
        <button onClick={handleGenerate} className="mx-auto generate-button">
          Générer
        </button>
        {progression && (
          <div className="progression-display">
            
            <p>Progression : {progression}</p>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default RandonTunes;
