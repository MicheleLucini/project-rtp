import React, { useState, useCallback } from "react";

import Background from "./scenes/background";
import Menu from "./scenes/menu";

import Cursor from "./components/cursor";

import "./App.css";

const App = () => {
  // CLIENT CURSOR ##########################################

  const [clientCursor, setClientCursor] = useState({
    x: 0,
    y: 0,
    mouseUp: false,
    mouseDown: false,
    hide: true,
  });

  const changeCursorX = useCallback((newValue) => {
    setClientCursor((prev) => ({
      ...prev,
      x: newValue,
      hide: false,
    }));
  }, []);
  const changeCursorY = useCallback((newValue) => {
    setClientCursor((prev) => ({
      ...prev,
      y: newValue,
      hide: false,
    }));
  }, []);
  const changeCursorUp = useCallback((newValue) => {
    setClientCursor((prev) => ({
      ...prev,
      mouseUp: newValue,
    }));
  }, []);
  const changeCursorDown = useCallback((newValue) => {
    setClientCursor((prev) => ({
      ...prev,
      mouseDown: newValue,
    }));
  }, []);
  const changeCursorHide = useCallback((newValue) => {
    setClientCursor((prev) => ({
      ...prev,
      hide: newValue,
    }));
  }, []);

  return (
    <>
      <Background />
      <Menu />
      {clientCursor && (
        <Cursor
          cursorData={clientCursor}
          changeCursorX={changeCursorX}
          changeCursorY={changeCursorY}
          changeCursorUp={changeCursorUp}
          changeCursorDown={changeCursorDown}
          changeCursorHide={changeCursorHide}
        />
      )}
    </>
  );
};

export default App;
