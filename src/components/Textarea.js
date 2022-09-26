import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter text here..");

  const upper = () => {
    setText(text.toUpperCase());
  };

  const lower = () => {
    setText(text.toLowerCase());
  };

  const remSpace = () => {
    setText(text.replaceAll(" ", ""));
  };

  const remText = () => {
    setText("");
  };

  const mess = (event) => {
    setText(event.target.value);
  };

  const rev = () => {
    const revArray = [];
    const length = text.length - 1;

    for (let i = length; i >= 0; i--) {
      revArray.push(text[i]);
    }

    setText(revArray.join(""));
  };

  const cop = () => {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  const nestFunct = () => {
    cop();
    alert("Copied!");
  };

  return (
    <>
      <div className={`container text-${props.setCol}`}>
        <div className="text">
          <h2 className="my-2">Text:</h2>
          <textarea
            className={`form-control text-${props.setCol} bg-${props.bg}`}
            id="textarea"
            rows="8"
            value={text}
            onChange={mess}
          ></textarea>
        </div>

        <div className="buttons my-2">
          <button
            className="btn btn-primary m-1"
            disabled={text === ""}
            onClick={upper}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary m-1"
            disabled={text === ""}
            onClick={lower}
          >
            Lowercase
          </button>
          <button
            className="btn btn-primary m-1"
            disabled={text === ""}
            onClick={remSpace}
          >
            Remove Space
          </button>
          <button
            className="btn btn-primary m-1"
            disabled={text === ""}
            onClick={rev}
          >
            Reverse Text
          </button>
          <button
            className="btn btn-danger m-1"
            disabled={text === ""}
            onClick={remText}
          >
            Clear Text
          </button>
          <button
            className="btn btn-secondary m-1"
            disabled={text === ""}
            onClick={nestFunct}
          >
            Copy to Clipboard
          </button>
        </div>

        <div className="my-3">
          <h3>Text Details:</h3>
          <p>
            {
              text.split(" ").filter((el) => {
                return el.length !== 0;
              }).length
            }{" "}
            words, {text.length} characters
          </p>
        </div>
      </div>
    </>
  );
}
