import React from 'react';
import { Link } from "react-router-dom";
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
 
  <div >
    <div>
    </div>
    {
      users
        ? (
          <div>
            <h1 className="HH">Currently playing :</h1>
            <table>
              <tr>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    
                    <td>
                        <img src={require('../../image/ezgif.com-gif-maker (4).gif')} />
                      </td>
                      <td>
                        {name}
                        <img alt="Online Icon" src={onlineIcon} />
                      </td>
                     


                    
                  </div>
                ))}
              </h2>
            </div>
            </tr>
           
            </table>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;