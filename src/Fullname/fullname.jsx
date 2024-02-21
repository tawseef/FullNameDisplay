import React, { useState } from "react";

export default function Fullname() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(false);
  const handleClick = () => {
    if (firstName && lastName) {
      setFullName(firstName + " " + lastName);
    }
  };

  return (
    <div style={{margin: "10px"}}>
      <h1>Full Name Display</h1>
      <form onSubmit={(e) => e.preventDefault()}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        <br />
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          /><br />
        <button  onSubmit={(e)=>e.preventDefault()} onClick={handleClick}> 
          Submit
        </button>
      </form>
      <p>{fullName ? "Full Name: " + fullName : false}</p>
    </div>
  );
}
