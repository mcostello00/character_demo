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
      <div className="box" style={{ marginBottom: "5px" }}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              ></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  <NavLink
                    className="CharacterListItemLink"
                    to={`/character/${id}`}
                  >
                    <span className="title is-2">{name}</span>
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
