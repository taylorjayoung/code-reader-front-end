import React from 'react'

const ProblemText =()=> {
  return (
    "const URL = 'https://random.url.com'" +
    "\n" +
    "const fakeURL = 'https://fake.com'" +
    "\n" +
      "const getData = (url) => {"+
        "\n" +
        "fetch('URL')"+

        ".then(response => response.json())"+
          "\n" +
        ".then(dataArray => {formatData(dataArray)}"+
            "\n" +
            "//sample data object format - {id: 1, name: Tom, city: New York, picture: 'src'}" +
            "\n" +
        ")"+
          "\n" +
      "}"+
        "\n" +
    "  const formatData = (dataArray) => {"+
      "\n" +
        "dataArray.forEach(dataObject => {"+
          "\n" +
          "createHTMLForDataObject(dataObject)"+
            "\n" +
        "})"+
          "\n" +
      "}"+
        "\n" +
      "const createHTMLForDataObject =(dataObject) => {"+
        "\n" +
        "const HTMLObject = document.createElement('div')"+
          "\n" +
        "const HTMLObjectInfo = document.createElement('p')"+
          "\n" +
        "HTMLObject.id = dataObject.id"+
          "\n" +
        "HTMLObjectInfo.innerText = 'Hey, my name is ${dataObject.name}. Im from ${dataObject.city}'" +
          "\n" +
          "}"
      )}

export default ProblemText;
