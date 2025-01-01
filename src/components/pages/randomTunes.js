import React, { useState } from 'react';
import { Key, Scale } from 'tonal';

import "../pages/randomTunes.css";

const RandomTunesComponent = () => {
  const [choixGamme, setChoixGamme] = useState(null);
  const [choixModalite, setChoixModalite] = useState(null);
  const [resultado, setResultado] = useState("");
  const [chordsProgression, setChordsProgression] = useState("");
  const [chordsInMinor, setChordsInMinor] = useState("");
  const [chordsInMajor, setChordsInMajor] = useState("");
  const [showChords, setShowChords] = useState(false); // Etat pour contrôler l'affichage des accords

  const objNotesMineur = [
    { note: "A", position: 1 },
    { note: "A#", position: 2 },
    { note: "B", position: 3 },
    { note: "C", position: 4 },
    { note: "C#", position: 5 },
    { note: "D", position: 6 },
    { note: "D#", position: 7 },
    { note: "E", position: 8 },
    { note: "F", position: 9 },
    { note: "F#", position: 10 },
    { note: "G", position: 11 },
    { note: "G#", position: 12 }
  ];

  // Fonction pour générer les accords
  const chosenGamme = () => {
    // Randomly pick a note from objNotesMineur
    const randomNote = objNotesMineur[Math.floor(Math.random() * 12)].note;
    setChoixGamme(randomNote);

    // Randomly pick a scale (major or minor)
    const randomModalite = Math.floor(Math.random() * 2);
    setChoixModalite(randomModalite);

    const modalite = randomModalite === 0 ? "major" : "minor";
    console.log(modalite);
    setResultado(`${randomNote} ${modalite}`);
    console.log(`Result: ${randomNote} ${modalite}`);

    // Generate chord progression
    const choixEtModalite = Scale.degrees(`${randomNote} ${modalite}`);
    console.log(choixEtModalite(1), choixEtModalite(4), choixEtModalite(1), choixEtModalite(5));
    const progression = `${choixEtModalite(1)} ${choixEtModalite(4)} ${choixEtModalite(1)} ${choixEtModalite(5)}`;
    setChordsProgression(progression);
    console.log("Chord Progression: ", progression);

    // Major and minor chords
    const majorTriads = Key.majorKey(randomNote).triads;
    const minorTriads = Key.minorKey(randomNote).natural.triads;

    console.log("Major Key: ", majorTriads);
    console.log("Minor Key: ", minorTriads);

    const majorChords = `${majorTriads[0]} ${majorTriads[3]} ${majorTriads[0]} ${majorTriads[4]}`;
    const minorChords = `${minorTriads[0]} ${minorTriads[3]} ${minorTriads[0]} ${minorTriads[4]}`;

    setChordsInMajor(majorChords);
    setChordsInMinor(minorChords);

    if (modalite === "major") {
      console.log("Major Chords");
      setChordsProgression(majorChords);
    }
    if (modalite === "minor") {
      console.log("Minor Chords");
      setChordsProgression(minorChords);
    }

    // Afficher les accords uniquement après avoir généré les résultats
    setShowChords(true); // Cela déclenche l'affichage des accords
  };

  return (
    <div className="container d-flex flex-column my-5">
      <div className="row">
      <h1>Random Tunes Generator</h1>
      <div className='col-12 col-md-8 tunes mt-5 vw-75 m-auto d-flex flex-column'>
      <button className='bg-none mx-auto my-5 btnGenerate' onClick={chosenGamme}>Generate Chords</button>

      {/* Afficher les résultats conditionnellement en fonction de showChords */}
      {showChords && (
        <div className='d-flex flex-column'>
          <p>Selected Scale: {resultado}</p>
          <p>Chord Progression:</p>
          <p className='fs-3 bg-light bg-opacity-25'> {chordsProgression}</p>
  {/*         <p>Major Chords: {chordsInMajor}</p>
          <p>Minor Chords: {chordsInMinor}</p> */}
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default RandomTunesComponent;
