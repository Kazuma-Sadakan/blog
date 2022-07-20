import React from 'react'
import { useState } from 'react';
import "./index.css";
import Modal from '../../components/model';

export default function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  function submit(e){
    e.preventDefault()
    console.log({
      name: name,
      email: email,
      password: password
    })
  }

  return (
    <div className="form-wrapper">
      {/* <Modal data = {data}/> */}
      <form>
        <h2>Sign up</h2>
        <div className="name-input">
          <input id="name" type="text" placeholder="this is my name" onChange = {e => setName(e.target.value)}/>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input id="email" type="text" placeholder="whoami@gmail.com" onChange = {e => setEmail(e.target.value)}/>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input id="password" type="text" placeholder="abracadabra" onChange = {e => setPassword(e.target.value)}/>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input id="confirm-password" type="text" placeholder="abracadabra" onChange = {e => setConfirmationPassword(e.target.value)}/>
          <label htmlFor="confirm-password">Confirmation Password</label>
        </div>
        <input id="submit" type="submit" value="submit" onClick = {(e) => submit(e)}/>
      </form>
    </div>
  )
}
