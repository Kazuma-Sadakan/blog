import React from 'react'
import { useState } from 'react';
import "./index.css";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="form-wrapper">
    <form action="\" method="POST">
        <h2>Sign in</h2>
      <div>
        <input id="email" type="text" placeholder="whoami@gmail.com" value={ email } onChange = {e => setEmail(e.target.value)}/>
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input id="password" type="text" placeholder="abracadabra" value = { password } onChange = {e => setPassword(e.target.value)}/>
        <label htmlFor="password">Password</label>
      </div>
      <input id="submit" type="submit" value="submit"/>
    </form>
  </div>
  )
}
