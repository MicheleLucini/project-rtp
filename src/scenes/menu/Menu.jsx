import React, { useState } from "react";
// import PropTypes from "prop-types";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

import "./menu.css";

const Menu = () => {
  const [name, setName] = useState("");

  return (
    <div id="menu">
      <TextInput
        label="Username"
        value={name}
        setValue={setName}
        // disabled={loading}
      />
      <Button
        text="Create campaign"
        icon="add"
        onClick={() => {}}
        disabled={name.length === 0}
      />
      <Button
        text="Join campaign"
        icon="login"
        onClick={() => {}}
        disabled={name.length === 0}
      />
      {/* <span className="version">{appVersion}</span> */}
    </div>
  );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
