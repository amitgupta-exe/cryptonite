import React, { useState } from 'react';
import CryptoJS from 'crypto-js';


const AES = () => {

    const [aes, setAes] = useState("");

    function encryptDecrypt(text, mode, key) {
        //Creating new Baconian Object
        

        //Cipher Decipher
        if (mode === 'encrypt') {
            let ciperText = CryptoJS.AES.encrypt(text, key)
            setAes(ciperText);
        } else if (mode === 'decrypt') {
            let decipherText = CryptoJS.AES.decrypt(text, key)
            setAes(decipherText)
        }
    }

    //JSX
    return <main className="main">

        <div>
            <h1>AES Hash</h1>
        </div>

        <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

            <div className="input-output">
                <textarea type="text" id="input" />
                <textarea name="" id="" value={aes} onChange={(e) => {
                    setAes(e.target.value)
                }} />
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
                <button onClick={() => { encryptDecrypt(document.getElementById("input").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
            </div>
        </form>

    </main>
};

export default AES;
