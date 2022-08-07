import axios from './axios';


let comment = 'hello';
let data = JSON.stringify(comment);

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  comment = event.results[0][0].transcript;
};

// function startRecord() {
  recognition.start();
  console.log('hello');
// }
const h1 = document.getElementsByName;
const h2 = document.createElement("h2");
h2.textContent = comment;
// document.body.appendChild(h1);

const url = "../app.py";
axios
  .post(url, {
    data
  })
  .then(function (response) {
    console.log(response);
    response = JSON.parse(response);
    const h3 = document.createElement("h3");
    h3.textContent = response;
  })
  .catch(function (error) {
    console.log(error);
  });