import React from "react";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}
        >
          <a className="navbar-brand" href="/">
            <strong>
              <u>textAugment</u>
            </strong>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Refresh
                </a>
              </li>
            </ul>
          </div>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitches"
              onClick={props.mode}
            />
            <label
              className={`custom-control-label text-${props.setCol}`}
              for="customSwitches"
            >
              {props.t} Mode
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}
