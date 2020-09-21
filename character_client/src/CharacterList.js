import React, { useState, useEffect } from "react";
import endpoint from "./endpoint";

import CharacterListItem from "./CharacterListItem";
import { NavLink } from "react-router-dom";

const CharacterList = () => {
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(endpoint + "/characters/")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response);
      });
  }, []);

  return (
    <section className="CharacterList">
      <div className="container">
        <div className="notification">
          {characters.map((character) => (
            <CharacterListItem key={character.id} character={character} />
          ))}
        </div>
      </div>

      <div className="container">
        <NavLink className="CharacterListItemLink" to={`/characters/new`}>
          <h3>Create New Character</h3>
        </NavLink>
      </div>
    </section>
  );
};

export default CharacterList;
