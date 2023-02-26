const cipher = {
 
  encode: function (offset, msg) {
    if(typeof msg !== "string" || typeof offset !== "number" ) {
      throw new TypeError("Datos no válidos");
    }
      
    let codeMsg = "";
    /*se crea un loop que itera la función hasta terminar de aplicarlo
    a todo el mensaje proporcionado por el usuario*/
    for (let p = 0; p < msg.length; p++) {
      const letterCode = msg.charCodeAt(p);
      const letterCodeOffset = letterCode + offset;
      const smallLetter = letterCode >= 97 && letterCode <= 122;
      const capitalLetter = letterCode >= 65 && letterCode <= 90;
      if(smallLetter) {
        const newLetter = ((letterCodeOffset - 97) % 26) + 97;
        const encodeLetter = String.fromCharCode(newLetter);
        codeMsg += encodeLetter;
      } else if(capitalLetter) {
        const newLetter = ((letterCodeOffset - 65) % 26) + 65;
        const encodeLetter = String.fromCharCode(newLetter);
        codeMsg += encodeLetter;
      } else {
        codeMsg += msg[p]
      }
    }
    return codeMsg
  },

  decode: function (offset, msg) {
    if(typeof msg !== "string" || typeof offset !== "number" ) {
      throw new TypeError("Datos no válidos");
    }

    let decodeMsg = "";
    
    for (let p = 0; p < msg.length; p++) {
      const letterCode = msg.charCodeAt(p);
      const letterCodeOffset = letterCode - offset;
      const smallLetter = letterCode >= 97 && letterCode <= 122;
      const capitalLetter = letterCode >= 65 && letterCode <= 90;
      //const specialChar = letterCode >= 32 && letterCode <= 64;
      if (smallLetter) {
        const newLetter = ((letterCodeOffset - 122) % 26) + 122;
        const encodeLetter = String.fromCharCode(newLetter);
        decodeMsg += encodeLetter;
      }else if (capitalLetter) {
        const newLetter = ((letterCodeOffset - 90) % 26) + 90;
        const encodeLetter = String.fromCharCode(newLetter);
        decodeMsg += encodeLetter;
      }else {
        decodeMsg += msg[p]
      }
    }
    return decodeMsg;
  },

};

export default cipher;