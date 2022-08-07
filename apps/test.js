const onBtnClick = () => {
    console.log("hogehoge");
    console.log('Ready to receive a color command.');
    
    if(ai_is_speaking==false){
        recognition.start();
        human_is_speaking = true;
        target = document.getElementById("button");
        target_2 = document.getElementById("person");
        if (target.value == "STOP \nSPEAKING") {
            ///「STOP」ボタンを押した場合の処理
            button.textContent = 'ANSWERING...';
            target.style.background= "#777777";
            target.value = "ANSWERING...";
            target_2.src = "images/person.gif";
            ai_is_speaking = true;
            setTimeout(function(){
                ///5秒後にspeaking=falseにする
                ai_is_speaking=false;
                target.value = "START \nSPEAKING";
                button.textContent = 'START \nSPEAKING';
                target_2.src="images/person.png";
                target.style.background= "#8ac6d1";
                },5000);
        } else {
            ///「START」ボタンを押した場合の処理
            button.textContent = 'STOP \nSPEAKING';
            target.style.background= "#ffb6b9";
            target.value = "STOP \nSPEAKING";
            target_2.src = "images/person.png";
        };
    }
}

let ai_is_speaking;
ai_is_speaking = false;
let human_is_speaking = false;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
if (SpeechGrammarList) {

var speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {

const comment = event.results[0][0].transcript;
// diagnostic.textContent = comment ;


console.log('Confidence: ' + event.results[0][0].confidence);

const person = document.getElementById('english-chat');
let chat = document.createElement("p");
    chat.textContent = comment;
    chat.className = "human";
person.append(chat);
console.log(comment);

}

recognition.onspeechend = function() {
    recognition.stop();
    human_is_speaking = false;
console.log('stop');
OnButtonClick();
}
