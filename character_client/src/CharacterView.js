import React, { useEffect, useState } from "react";
import endpoint from "./endpoint";
import { NavLink } from "react-router-dom";

const CharacterView = (props) => {
  const id = props.match.params.id;
  let [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(endpoint + "/characters/" + id)
      .then((response) => response.json())
      .then((response) => {
        setCharacter(response);
      });
  }, [id]);

  return (
    <section className="CharacterView">
      <section className="section">
        <div className="container">
          <div className="column is-half">
            <span className="title">{character.name}</span>
            <br />
            <br />
            <div className="field">
              <label className="label">Gender: {character.gender}</label>
            </div>
            <div className="field">
              <label className="label">Birthdate: {character.birthDate}</label>
            </div>
            <div className="field">
              <label className="label">Height: {character.height}</label>
            </div>
            <div className="field">
              <label className="label">Weight: {character.weight}</label>
            </div>
            <div className="field">
              <label className="label">
                Home Location: {character.home_location}
              </label>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link"
                  onClick={() => (window.location = `/character/${id}/Edit`)}
                >
                  Edit
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-secondary"
                  onClick={() => (window.location = "/characters")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CharacterView;
