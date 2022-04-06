import React, { useState } from 'react';
import baconImage from '../images/bacon_landscape.jpg';

const crypto = require('text-cryptography');


const Baconian = () => {

    const [baconian, setBaconian] = useState("");

    function bacon(text, mode) {
        //Creating new Baconian Object
        let bacon = new crypto.Baconian();

        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = bacon.encrypt(text);
            setBaconian(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = bacon.decrypt(text);
            setBaconian(decipherText)
        }
    }

    //JSX
    return <main className="main">

        <img className="caeser-bg" src={baconImage} alt="" />

        <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

            <div className="user-input">
                <label htmlFor="userInput">Enter Text</label>
                <textarea type="text" id="userInput" />
            </div>

            <div className="settings">
                <select defaultValue={"encrypt"} name="" id="mode">
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>
                <button onClick={() => { bacon(document.getElementById("userInput").value, document.getElementById("mode").value) }} type="submit">Convert</button>
            </div>

            <div className="output">
                <label htmlFor="output">Output</label>
                <p id='output'>{baconian}</p>
            </div>
        </form>

        <div className="wiki">
            <h2>Baconian Cipher </h2>
            <h3>Francis Bacon</h3>
            <p>Bacon's cipher or the Baconian cipher is a method of steganographic message encoding devised by Francis Bacon in 1605</p>
        </div>

    </main>
};

export default Baconian;
