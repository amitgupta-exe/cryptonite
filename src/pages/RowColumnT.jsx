import React, { useState } from 'react';

var playfair = require('crypto-classic-playfair');



const RowColumnT = () => {

    const [rctText, setrctText] = useState("");
    const a = 'a';

    function calculateKey(key){
        const numericKey = [];
        for (let i = 0; i < key.length; i++) {
            numericKey[i] = key[i].charCodeAt(0) - a.charCodeAt(0);; 
        }
        console.log(key);
        console.log(numericKey);

        return numericKey;
    }

    calculateKey("amit");

    function rct(text, mode, key) {


        function calculateKey(key){
            const numericKey = [];
            for (let i = 0; i < key.length; i++) {
                numericKey[i] = key[i] - 'a'; 
            }
            console.log(key);
            console.log(numericKey);

            return numericKey;
        }

        calculateKey("amit");




        // //encrypt
        // if (mode === 'encrypt') {
        //     setrctText(ciperText);
        // //decrypt
        // } else if (mode === 'decrypt') {
        //     setrctText(decipherText)
        // }
    }

    return <main className="main">

        {/* <img className="caeser-bg" src={} alt="" /> */}

        <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

            <div className="user-input">
                <label htmlFor="userInput">Enter Text</label>
                <textarea type="text" id="userInput" />
            </div>
            <div className="settings">
                <input id='key' type="text" />
                <select defaultValue={"encrypt"} name="" id="mode">
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>
                <button onClick={() => { rct(document.getElementById("userInput").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
            </div>
            <div className="output">
                <label htmlFor="output">Output</label>
                <p id='output'>{rctText}</p>
            </div>
        </form>
        <div className="wiki">
            <h2>Row Column Transposition Cipher </h2>
            <h3>Transposition</h3>
            <p></p>
        </div>


    </main>
};

export default RowColumnT;
