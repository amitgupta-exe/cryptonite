import React, { useState } from 'react';
const crypto = require('text-cryptography');


const Atbash = () => {

    const [atbashText, setatbashText] = useState("");

    function atbash(text, mode) {
        //Creating new Baconian Object
        let atbash = new crypto.Atbash();

        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = atbash.encrypt(text);
            setatbashText(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = atbash.decrypt(text);
            setatbashText(decipherText)
        }
    }

    //JSX
    return <main className="main">

        {/* <img className="caeser-bg" src={} alt="" /> */}

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
                <button onClick={() => { atbash(document.getElementById("userInput").value, document.getElementById("mode").value) }} type="submit">Convert</button>
            </div>

            <div className="output">
                <label htmlFor="output">Output</label>
                <p id='output'>{atbashText}</p>
            </div>
        </form>

        <div className="wiki">
            <h2>Atbash Cipher </h2>
            <h3>Hebrews</h3>
            <p>Atbash is a monoalphabetic substitution cipher originally used to encrypt the Hebrew alphabet.</p>
        </div>

    </main>
};

export default Atbash;
