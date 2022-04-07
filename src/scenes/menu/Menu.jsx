import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import "./menu.css";

const Menu = ({ setCursorTooltip }) => {
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [numberOfAlbums, setNumberOfAlbums] = useState("");

  const onCreateClick = useCallback(() => {
    fetch("https://api.example.com/items")
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res));
        return res.json();
      })
      .then(
        (result) => {
          console.log(result);
          console.log(JSON.stringify(result));
        },
        (error) => {
          console.error(error);
        }
      );
  });

  return (
    <div id="menu">
      <div className="sx">
        Welcome to the rym to playlist webtool.
        <br />
        Gimme the garbage.
      </div>
      <div className="dx">
        <TextInput
          label="Year"
          value={year}
          setValue={setYear}
          // disabled={loading}
          tooltip="Enter the release year of the albums"
          setCursorTooltip={setCursorTooltip}
        />
        <TextInput
          label="Genre"
          value={genre}
          setValue={setGenre}
          // disabled={loading}
          tooltip="Enter the genre of music"
          setCursorTooltip={setCursorTooltip}
        />
        <TextInput
          label="Number of albums"
          value={numberOfAlbums}
          setValue={setNumberOfAlbums}
          // disabled={loading}
          tooltip="Enter the number of albums to add to the playlist"
          setCursorTooltip={setCursorTooltip}
        />
        <Button
          text="Create playlist"
          icon="playlist_add"
          onClick={onCreateClick}
          // disabled={year.length === 0}
        />
        {/* <Button
        text="Join campaign"
        icon="login"
        onClick={() => {}}
        disabled={year.length === 0}
      /> */}
        {/* <span className="version">{appVersion}</span> */}
      </div>
    </div>
  );
};

// Menu.propTypes = {};

// Menu.defaultProps = {};

export default Menu;
