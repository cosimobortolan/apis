const fetch = require("node-fetch");
const url = "http://localhost:3000/courses"

const getLocation = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log(error);
  }
};


getLocation(url);
