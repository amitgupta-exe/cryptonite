import React, { useState } from 'react';

var playfair = require('crypto-classic-playfair');

const PlayFair = () => {

  const [fairText, setFairText] = useState("");

  function fair(text, mode, key) {

    if (mode === 'encrypt') {
      var ciperText = playfair.encipher(text, key);
      setFairText(ciperText);
    } else if (mode === 'decrypt') {
      var decipherText = playfair.decipher(text, key);
      setFairText(decipherText)
    }
  }

  return <main className="main">

    {/* <img className="caeser-bg" src={} alt="" /> */}

    <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

      <div className="user-input">
        <label htmlFor="userInput">Enter Text</label>
        <textarea type="text" id="userInput" />
      </div>
      <div className="settings">
        <div>
          <label htmlFor="#key">Enter Key (Word): </label>
          <input id='key' type="text" />
        </div>
        <select defaultValue={"encrypt"} name="" id="mode">
          <option value="encrypt">Encrypt</option>
          <option value="decrypt">Decrypt</option>
        </select>
        <button onClick={() => { fair(document.getElementById("userInput").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
      </div>
      <div className="output">
        <label htmlFor="output">Output</label>
        <p id='output'>{fairText}</p>
      </div>
    </form>
    <div className="wiki">
      <h2>PlayFair Cipher </h2>
      <h3>Wheatstone-Playfair</h3>
      <p>The Playfair cipher or Playfair square or Wheatstone-Playfair cipher is a manual symmetric encryption technique and was the first literal digram substitution cipher.</p>
    </div>

  </main>
};

export default PlayFair;
