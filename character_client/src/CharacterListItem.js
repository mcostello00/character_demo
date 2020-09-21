import React from "react";

import { NavLink } from "react-router-dom";
import endpoint from "./endpoint";

const CharacterListItem = ({ character }) => {
  const { id, name, home_location } = character;

  const deleteChar = () => {
    fetch(endpoint + "/characters/" + id, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              ></img>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  <NavLink
                    className="CharacterListItemLink"
                    to={`/character/${id}`}
                  >
                    <h2 className="is-large">{name}</h2>
                  </NavLink>
                </strong>{" "}
                <small>location: {home_location}</small> <br />
                <a href="/characters" onClick={deleteChar}>
                  Delete
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CharacterListItem;
