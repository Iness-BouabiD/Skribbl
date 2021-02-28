import React, { useState } from 'react';
import { Link } from "react-router-dom";


import './Join.css';
var crypto = require("crypto");
//var uuid = require("uuid");
export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Welcome to Skribbl</h1>

        {/* on doit creer 2 button play qui va generer un room quelconque et envoi le user vers la page chat  directement et 
            le 2 eme qui envoie vers la page WaitRoom qui permet de modifier les param de la partie !
        */}

       {/* 1ere on creer le play*/}      
        <div>
          <input placeholder="Enter your name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
      <table>
        <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/WaitRoom?name=${name}&room=${crypto.randomBytes(4).toString('hex')}`} onChange={(event) => setRoom(crypto.randomBytes(4).toString('hex'))}  >
          <button className={'button'} type="submit">Create Room</button>
        </Link>
        <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${crypto.randomBytes(4).toString('hex')}`}>
          <button className={'button1'} type="submit">Play</button>
        </Link>
        </table>
      </div>
    </div>
  );
}
