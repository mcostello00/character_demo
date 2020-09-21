import React, { useEffect, useState } from "react";
import endpoint from "./endpoint";
import { browserHistory } from "react-router-dom";

const CharacterEdit = (props) => {
  const id = props.match.params.id;

  let [character, setCharacter] = useState({});
  let [name, setName] = useState("");
  let [gender, setGender] = useState("");
  let [birthDate, setBirthDate] = useState("");
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [homeLocation, setHomeLocation] = useState("");

  useEffect(() => {
    fetch(endpoint + "/characters/" + id)
      .then((response) => response.json())
      .then((response) => {
        setCharacter(response);
        setName(response.name || "");
        setGender(response.gender || "");
        setBirthDate(response.birthDate || "");
        setHeight(response.height || "");
        setWeight(response.weight || "");
        setHomeLocation(response.home_location || "");
      });
  }, [id]);

  const updateChar = () => {
    fetch(endpoint + "/characters/" + id, {
      method: "PUT",
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
      window.location = "/character/" + id;
    });
  };

  return (
    <section>
      <section className="section">
        <div className="container">
          <div className="column is-half">
            <span className="title">{character.name}</span>
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
                <button className="button is-link" onClick={updateChar}>
                  Save
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-secondary"
                  onClick={() => (window.location = "/character/" + id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CharacterEdit;
