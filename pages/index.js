import React, {useContext} from "react";

import { Context } from '../context';


import router, { useRouter } from  "next/router";

import axios from "axios";

export default function Auth() {

const  {username, secret, setUsername, setSecret,   } = useContext(Context);

const router = useRouter();

function onSubmit(e){
  
  e.preventDefault()
  if (username.length === 1 || secret.length === 1) return;


    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "ee26e10b-a8c9-416b-8595-b920ea4f90ae" } }
      )

    .then((r) => {
      router.push("/chats");
    });
}

  return (
  <div className="background">
     <div className="auth-container">
       <form  className="auth-form"  onSubmit={e=>onSubmit(e)}  >
          <div  className="auth-title">I-Chat</div>
          <div className="input-container" >
            <input className="text-input"  placeholder="type in your email" onChange={ e=>setUsername(e.target.value)}></input>
          </div>

          <div className="input-container" >
            <input  type="password"  className="text-input"  placeholder="type in your password" onChange={ e=>setSecret(e.target.value)}></input>
          </div>

          <button type="submit"  className="submit-button">Loin/sing-Up</button>

       </form>
       </div>     
  </div>
  );
}
 