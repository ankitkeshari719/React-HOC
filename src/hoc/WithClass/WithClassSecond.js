import React from "react";

const withBackgroundClass = props => (
  <div className={props.classes}>{props.children}</div>
);

export default withBackgroundClass;
