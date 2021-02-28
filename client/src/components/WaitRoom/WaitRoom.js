import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextContainer from '../TextContainer/TextContainer';
import Settings from '../Settings/Settings';
import '../WaitRoom/WaitRoom.css';
let socket;
const ENDPOINT = 'localhost:5000';
export default function WaitRoom({ location }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);


  useEffect(() => {
     socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);


  return (
    <div className="joinOuterContainer1">
      <body>
      <table>
        <tr>
          <td className="Settings">
            <Settings />
          </td>
          <td >
            <div className="textContainer">
              <TextContainer users={users} />
            </div>
          </td>
        </tr>
        <tr>
          <td className="Link">
            777
          </td>
          <td>
             {/* <LinkToRoom/> */} 
        <Link onClick={e => (!name | !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button2'} type="submit"> Go !</button>
        </Link>
          </td>
        </tr>
      </table>
      </body>
    </div>
  );
}

