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

  const deleteChar = () => {
    fetch(endpoint + "/characters/" + id, {
      method: "DELETE",
    });
  };

  const createChar = () => {
    fetch(endpoint + "/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        character: { name: "Tim", birthdate: "01/01/2000" },
      }),
    });
  };

  const updateChar = () => {
    fetch(endpoint + "/characters/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        character: { name: "Tim2", birthdate: "01/01/2000" },
      }),
    });
  };

  return (
    <section className="CharacterView">
      <section className="section">
        <div className="container">
          <div className="column is-half">
            <span className="title">{character.name}</span>
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
                <NavLink
                  className="CharacterListItemLink"
                  to={`/character/${id}/Edit`}
                >
                  <h3>edit</h3>
                </NavLink>
              </div>
              <div className="control">
                <NavLink className="CharacterListItemLink" to={`/characters`}>
                  <h3>back</h3>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CharacterView;
