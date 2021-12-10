/* eslint-disable no-restricted-syntax */
export function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

export function createDomElement(userType, userClass = "", content = "") {
  const container = document.createElement(userType);
  if (userClass !== "") {
    const classes = userClass.split(" ");
    for (const x of classes) {
      container.classList.add(x);
    }
  }
  if (content !== "") {
    container.textContent = content;
  }
  return container;
}

export function offsetDateTime(date) {
  return date.getTimezoneOffset();
}

export function roundAccurately(num) {
  return parseFloat(`${Math.round(`${num}e15`)  }e-15`);
}

