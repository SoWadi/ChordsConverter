import React, { useState, useEffect     } from 'react';
import { Scale, Key } from 'your-music-library'; // Import necessary libraries

const RandomTunesComponent = () => {
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
    { note: "G#", position: 12 },
  ];

  const [choixGamme, setChoixGamme] = useState(null);
  const [choixModalite, setChoixModalite] = useState(null);
  const [resultado, setResultado] = useState("");
  const [chordsProgression, setChordsProgression] = useState("");
  const [chordsInMinor, setChordsInMinor] = useState("");
  const [chordsInMajor, setChordsInMajor] = useState("");

  const chosenGamme = () => {
    const randomNoteIndex = Math.floor(Math.random() * 12);
    setChoixGamme(objNotesMineur[randomNoteIndex].note);
    setChoixModalite(Math.floor(Math.random() * 2));

    const modalite = choixModalite === 0 ? "major" : "minor";
    setResultado(`${choixGamme} ${modalite}`);

    const choixEtModalite = Scale.degrees(resultado);

    const chords = [choixEtModalite(1), choixEtModalite(4), choixEtModalite(1), choixEtModalite(5)];
    setChordsProgression(chords.join(" "));

    const key = modalite === "major" ? Key.majorKey(choixGamme) : Key.minorKey(choixGamme);
    const triads = key[modalite === "major" ? "triads" : "natural"]["triads"];

    setChordsInMajor(triads[0] + " " + triads[3] + " " + triads[0] + " " + triads[4]);
    setChordsInMinor(triads[0] + " " + triads[3] + " " + triads[0] + " " + triads[4]);
    
    setChordsProgression(modalite === "major" ? chordsInMajor : chordsInMinor);
  };

/*   return (
    

      

      

  

    

  ); */
};


export default RandomTunesComponent;