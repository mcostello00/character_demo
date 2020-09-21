import React, { useEffect, useState } from "react";
import endpoint from "./endpoint";
import { browserHistory } from "react-router-dom";

const CharacterNew = (props) => {
  let [name, setName] = useState("");
  let [gender, setGender] = useState("");
  let [birthDate, setBirthDate] = useState("");
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [homeLocation, setHomeLocation] = useState("");

  const addChar = () => {
    fetch(endpoint + "/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        character: {
          name,
          gender,
          birthDate,
          height,
          weight,
          home_location: homeLocation,
        },
      }),
    }).then((response) => {
      window.location = "/characters";
    });
  };

  return (
    <section className="CharacterEdit">
      <section>
        <section className="section">
          <div className="container">
            <div className="column is-half">
              <span className="title">Add New</span>
              <br />
              <br />

              <div className="field">
                <label className="label">Name:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="enter the name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Gender:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="enter the gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Birthdate: </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="enter the birthdate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Height: </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="enter the height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Weight: </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="enter the weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Home Location:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="enter the home location"
                    value={homeLocation}
                    onChange={(e) => setHomeLocation(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" onClick={addChar}>
                    Save
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-link is-secondary"
                    onClick={() => (window.location = "/characters")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default CharacterNew;
