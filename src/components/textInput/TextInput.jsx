import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import "./textInput.css";

const TextInput = ({
  label,
  value,
  setValue,
  placeholder,
  disabled,
  onKeyPressEnter,
  tooltip,
  setCursorTooltip,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );
  const onFocus = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);
  const onBlur = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);
  const onKeyPress = useCallback(
    (e) => {
      if (!e) e = window.event;
      var keyCode = e.code || e.key;
      if (keyCode === "Enter" && onKeyPressEnter) {
        onKeyPressEnter();
        return false;
      }
    },
    [onKeyPressEnter]
  );
  const onMouseEnter = useCallback(
    () => setCursorTooltip(tooltip),
    [setCursorTooltip, tooltip]
  );
  const onMouseLeave = useCallback(
    () => setCursorTooltip(""),
    [setCursorTooltip]
  );

  return (
    <div
      className={
        "text-input" +
        (isActive ? " active" : "") +
        (!!value ? " filled" : "") +
        (disabled ? " disabled" : "")
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        // validate={validate}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        // required="required"
        onKeyPress={onKeyPress}
        disabled={disabled ? "disabled" : false}
      />
      {/* <p>// place for errors</p> */}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  // validate: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onKeyPressEnter: PropTypes.func,
};

TextInput.defaultProps = {
  label: null,
  value: null,
  // validate: () => {},
  placeholder: null,
  disabled: false,
  onKeyPressEnter: null,
};

export default TextInput;
