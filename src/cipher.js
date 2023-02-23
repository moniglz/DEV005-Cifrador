const cipher = {
 
  encode: function (offset, msg) {
  
    let codedMsg = "";
    //'p' de position
    //se crea un loop
    for (let p = 0; p < msg.length; p++) {
      const letterCode = msg.charCodeAt(p);
      const letterCodeOffset = letterCode + offset;
      const smallLetter = letterCode >= 97 && letterCode <= 122;
      const capitalLetter = letterCode >= 65 && letterCode <= 90;
      if (smallLetter) {
        const newLetter = ((letterCodeOffset - 97) % 26) + 97;
        const encodeLetter = String.fromCharCode(newLetter);
        codedMsg += encodeLetter;
      }else if (capitalLetter) {
        const newLetter = ((letterCodeOffset - 65) % 26) + 65;
        const encodeLetter = String.fromCharCode(newLetter);
        codedMsg += encodeLetter;
      } else {
        codedMsg += msg[p];
      }
    }
    return codedMsg;
  },
  decode: function (offset, msg) {
    if (typeof msg !== "string" || typeof offset !== "number") {
      throw new TypeError("son invalidos");
    }
    let decodedMsg = "";
    //'p' de position
    //se crea un loop
    for (let p = 0; p < msg.length; p++) {
      const letterCode = msg.charCodeAt(p);
      const letterCodeOffset = letterCode - offset;
      const smallLetter = letterCode >= 97 && letterCode <= 122;
      const capitalLetter = letterCode >= 65 && letterCode <= 90;
      if (smallLetter) {
        const newLetter = ((letterCodeOffset - 122) % 26) + 122;
        const encodeLetter = String.fromCharCode(newLetter);
        decodedMsg += encodeLetter;
      }else if (capitalLetter) {
        const newLetter = ((letterCodeOffset + 65) % 26) + 65;
        const encodeLetter = String.fromCharCode(newLetter);
        decodedMsg += encodeLetter;
      }else {
        decodedMsg += msg[p];
      }
    }
    return decodedMsg;
  },

};

export default cipher;
