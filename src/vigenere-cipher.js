const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct
  }
  encrypt(str, code) {
    if (!str || !code) {
      throw new Error('Incorrect arguments!');
    } else {
      let eStr = [];
      let k = 0;
      while (str.length > code.length) {
        code += code;
      }
      for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase().charCodeAt(0) > 90 || str[i].toUpperCase().charCodeAt(0) < 65 ) {
          eStr.push(str[i]);;
          k--;
        } else {
          const shifts = code[k].toUpperCase().charCodeAt(0) - 65;
          let position = str[i].toUpperCase().charCodeAt(0);
          for (let j = 0; j < shifts; j++) {
            position++;
            if (position > 90) {
              position = 65;
            }
          }
          eStr.push(String.fromCharCode(position))
        }
        k++;
      }
      if (!this.direct) {
        eStr.reverse();
      }
      return eStr.join('');
    }
   
  }
  decrypt(str, code) {
    if (!str || !code) {
      throw new Error('Incorrect arguments!');
    } else {
      let eStr = [];
      let k = 0;
      while (str.length > code.length) {
        code += code;
      }
      for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase().charCodeAt(0) > 90 || str[i].toUpperCase().charCodeAt(0) < 65 ) {
          eStr.push(str[i]);;
          k--;
        } else {
          const shifts = code[k].toUpperCase().charCodeAt(0) - 65;
          let position = str[i].toUpperCase().charCodeAt(0);
          for (let j = 0; j < shifts; j++) {
            position--;
            if (position < 65) {
              position = 90;
            }
          }
          eStr.push(String.fromCharCode(position))
        }
        k++;
      }
      if (!this.direct) {
        eStr.reverse();
      }
      return eStr.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

