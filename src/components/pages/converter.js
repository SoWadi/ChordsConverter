import React, { useState } from "react";
import "../pages/converter.css";

// Liste des notes dans l'ordre chromatique pour la transposition
const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function TransposeChord(chord, steps) {
  // Extraction de la note fondamentale (ex: A, C#)
  const rootNote = chord.match(/[A-G]#?/)[0];
  const index = notes.indexOf(rootNote);

  if (index === -1) return chord; // Si l'accord n'est pas valide

  // Calculer le nouvel index après la transposition
  const newIndex = (index + steps + notes.length) % notes.length;

  return chord.replace(rootNote, notes[newIndex]);
}

function TransposeChordPage() {
  const [inputText, setInputText] = useState(""); // Stocke le texte copié-collé de la tablature
  const [steps, setSteps] = useState(0); // Stocke le nombre de demi-tons pour la transposition
  const [transposedText, setTransposedText] = useState(""); // Stocke le texte transposé

  const handleTranspose = () => {
    // Regex pour extraire les accords (par ex : Am, C, G7)
    const chordPattern = /\b([A-G]#?m?(maj|min|sus|dim|7|9)?)\b/g;

    // Remplacer les accords dans le texte copié
    const newText = inputText.replace(chordPattern, (match) =>
      TransposeChord(match, parseInt(steps))
    );

    setTransposedText(newText); // Mettre à jour le texte transposé
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-5">Outil de Transposition de Tablature</h1>

          <textarea
            rows="10"
            cols="30"
            placeholder="Collez ici les accords ou la tablature..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ lineHeight: "1.2" }}
          />

          <div className="my-5">
            <label htmlFor="steps">Nombre de demi-tons à transposer :</label>
            <input
              id="steps"
              type="number"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
          </div>

          <div>
            <button className="mx-auto transposeBtn" onClick={handleTranspose}>
              Transposer
            </button>
          </div>
          {transposedText && (
            <div className="col-md-12 output-area">
              <h2>Tablature Transposée :</h2>
              <textarea
                rows="14"
                cols="24"
                value={transposedText}
                readOnly
                style={{ lineHeight: "1.2" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransposeChordPage;
