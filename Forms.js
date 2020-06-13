import React from "react";

function FormComponent(props) {
  return (
    <main>
      <h1>Sample form</h1>
      <form className="inputForm">
        <input
          onChange={props.handleChange}
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
        />
        <br />
        <input
          onChange={props.handleChange}
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
        />
        <br />
        <input
          onChange={props.handleChange}
          name="age"
          placeholder="Age"
          value={props.age}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <label >Select your destination</label>
        <br />
        <select
          
          onChange={props.handleChange}
          name="destination"
          value={props.destination}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />
        <label >Dietary restrictions:</label>
        <br />
        <div >
          <input
            type="checkbox"
            name="nutsFree"
            onChange={props.handleChange}
            checked={props.nutsFree}
          />
          <span>Nuts free</span>
          <br />
          <input
            type="checkbox"
            name="lactoseFree"
            onChange={props.handleChange}
            checked={props.lactoseFree}
          />
          <span>Lactose free</span>
          <br />
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.isVegan}
          />
          <span>Vegan</span>
        </div>
        <button >Submit</button>
      </form>
      <hr />
      <div >
        <h2>Entered information:</h2>
        <p>
          Your name: {props.firstName} {props.lastName}
        </p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>Your dietary restrictions: </p>
        <div >
          <span>**Nuts free : {props.nutsFree ? " Yes" : "No"}</span> <br />
          <span>**Lactose free : {props.lactoseFree ? " Yes" : "No"}</span>{" "}
          <br />
          <span>**Vegan meal : {props.isVegan ? " Yes" : "No"}</span>
        </div>
      </div>
    </main>
  );
}

export default FormComponent;