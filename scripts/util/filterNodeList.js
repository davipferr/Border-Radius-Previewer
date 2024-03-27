const getOneElement = (type, name, elementName) => {
  let types = {
    element: null,
    id: "#",
    class: ".",
  }

  let desiredType = types[type] ?? null;

  if (!desiredType)
  {
    return "Type não existe";
  }

  let search = `${desiredType}${name}`;

  let result = null;

  document.querySelectorAll(`${search}`)
    .forEach(element => {
      if (element.tagName === elementName) {
        return result = element;
      }
    });

  return result;
}

export default getOneElement;