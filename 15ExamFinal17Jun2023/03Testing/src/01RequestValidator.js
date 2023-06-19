
//1. Request Validator


// function that validates an HTTP request object. The object has the properties method, uri, version,
// and message. Your function will receive the object as a parameter and has to verify that each property meets the
// following requirements:
// * method - can be GET, POST, DELETE or CONNECT
// * uri - must be a valid resource address or an asterisk (*); a resource address is a combination of
// alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
// * version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
// * message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")
// If a request is valid, return it unchanged.
// If any part fails the check, throw an Error with the message "Invalid request header: Invalid
// {Method/URI/Version/Message}". 


function uriValidator(obj){

    let method = ["GET", "POST", "DELETE", "CONNECT"];
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let regexFoURI = /^[a-zA-Z.0-9]+$/gm;
    let regexMessage = /[<>&'"\\]/gm;

    // check is correct input --> no trow error
    if (!obj.hasOwnProperty("method") || !method.includes(obj.method)){  //  method: 'GET',
        throw new Error("Invalid request header: Invalid Method");
    } 
    
    if (!obj.hasOwnProperty("uri") || !regexFoURI.test(obj.uri) || obj.uri === "") {
        throw new Error("Invalid request header: Invalid URI");
      }
    
      if (!obj.hasOwnProperty("version") || !versions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
      }
    
      if (!obj.hasOwnProperty("message") || regexMessage.test(obj.message)) {
        throw new Error("Invalid request header: Invalid Message");
      }
    
      return obj;
}


//tests:

const x = uriValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

// {
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }
console.log(`-----------------------------------`);

uriValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});

// Invalid request header: Invalid Method