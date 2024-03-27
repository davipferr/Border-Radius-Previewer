"use strict"

import getOneElement from "./util/filterNodeList.js";

const boxRadius = document.querySelectorAll(".box-radius");

const styles = window.getComputedStyle(boxRadius[0]);

const borderProperties = [
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
]

const setSpanText = (spanElement, cssStyle) => {
  spanElement.textContent = `${cssStyle} :`;
}

const setInputValue = (inputElement, cssStyle) => {
  inputElement.value = parseFloat(styles[cssStyle]);
}

borderProperties.forEach(cssStyle => {
  let getSpan = getOneElement("id", cssStyle, "SPAN");
  let getInput = getOneElement("id", cssStyle, "INPUT");

  if (getSpan) {
    setSpanText(getSpan, cssStyle);
  }
  
  if (getInput){
    setInputValue(getInput, cssStyle);
  }
});
