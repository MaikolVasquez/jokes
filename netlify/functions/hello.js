// import fetch from "node-fetch"
import fetch from "node-fetch";



exports.handler = async function (event, context) {
 
const info = await fetch("https://api.chucknorris.io/jokes/random")
.then(async response => response.json())
.then(data => {
  return data.value
});


  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};