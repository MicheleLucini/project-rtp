import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import "./menu.css";

async function postData(url = "", data = {}) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log("response");
    console.log(response);
    console.log(JSON.stringify(response));
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (e) {
    console.error(e);
  }
  return null;
}

const Menu = ({ setCursorTooltip }) => {
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [numberOfAlbums, setNumberOfAlbums] = useState("");

  const onCreateClick = useCallback(async () => {
    const data = await postData("https://api.example.com/items");
    console.log(data);
    console.log(JSON.stringify(data));
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
