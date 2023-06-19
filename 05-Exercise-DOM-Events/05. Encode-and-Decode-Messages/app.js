function encodeAndDecodeMessages() {
    // get 2 buttons  // <main id="main"> --> <button>
    let [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('#main button'));
    //get text inputs // <main id="main"> --> <textarea
    let textArea = Array.from(document.querySelectorAll('#main textarea'));


    // attach functionality to buttons
    encodeBtn.addEventListener('click', encodeAndSendMessages);
    decodeBtn.addEventListener('click', decodeAndSendMessages);



    //encode the given message and send it to the receiver.
    //Clear the sender textarea and add the encoded message to the receiver textarea
    function encodeAndSendMessages(){
        textArea[1].value = textTransform(textArea[0].value, nextChar);
        //target first container -> textArea[0]
        textArea[0].value = '';
    }

    //decode the received message and read it (display it).
    function decodeAndSendMessages(){
        textArea[1].value = textTransform(textArea[1].value, prevChar);
    }


    // take text, split & and use 1 of the following logical functions nextChar/prevChar
    function textTransform(text, callBackFunctionNextPrevChar){
        return text.split("").map(callBackFunctionNextPrevChar).join("");
    }

    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
      }
    function prevChar(char) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
      }

}