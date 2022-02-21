import React, { useState } from "react";
// import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import "./menu.css";

const Menu = () => {
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [numberOfAlbums, setNumberOfAlbums] = useState("");

  return (
    <div id="menu">
      <TextInput
        label="Year"
        value={year}
        setValue={setYear}
        // disabled={loading}
      />
      <TextInput
        label="Genre"
        value={genre}
        setValue={setGenre}
        // disabled={loading}
      />
      <TextInput
        label="Number of albums"
        value={numberOfAlbums}
        setValue={setNumberOfAlbums}
        // disabled={loading}
      />
      <Button
        text="Create playlist"
        icon="playlist_add"
        onClick={() => {}}
        disabled={year.length === 0}
      />
      {/* <Button
        text="Join campaign"
        icon="login"
        onClick={() => {}}
        disabled={year.length === 0}
      /> */}
      {/* <span className="version">{appVersion}</span> */}
    </div>
  );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
