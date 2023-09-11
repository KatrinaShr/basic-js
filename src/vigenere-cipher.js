const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(type) {
    this.type = type;
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      let arrayKey = key.toUpperCase().split("");
      let arrayMessage = message.toUpperCase().split("");

      let encryptMessage = [];
      let encryptKey = [];
      let i = 0;
      let count = [];

      arrayMessage.forEach((element) => {
        if (this.letters.find((item) => item === element)) {
          if (!arrayKey[i]) { i = 0; }
          let letterMess = this.letters.indexOf(element);
          let letterKey = this.letters.indexOf(arrayKey[i]);

          encryptKey.push(arrayKey[i]);
          i++;

          count.push(letterMess + letterKey + 1 > 26 ? letterMess + letterKey + 1 - 26 : letterMess + letterKey + 1);
        } else {
          encryptKey.push(element);

          count.push(element);
        }
      });

      count.map((item) => {
        encryptMessage.push(this.letters[item - 1] && typeof(item) === "number" ? this.letters[item - 1] : item);
      });

      return this.type || this.type === undefined ? encryptMessage.join("") : encryptMessage.reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      let arrayKey = key.toUpperCase().split("");
      let arrayEncMessage = encryptedMessage.toUpperCase().split("");

      let encryptedMess = [];
      let encryptedKey = [];
      let i = 0;
      let count = [];

      arrayEncMessage.forEach((element) => {
        if (this.letters.find((item) => item === element)) {
          if (!arrayKey[i]) { i = 0; }

          let letterMess = this.letters.indexOf(element);
          let letterKey = this.letters.indexOf(arrayKey[i]);

          encryptedKey.push(arrayKey[i]);
          i++;

          count.push(letterMess - letterKey < 0 ? letterMess + 1 + 26 - letterKey : letterMess - letterKey + 1);
        } else {
          encryptedKey.push(element);

          count.push(element);
        }
      });

      count.map((item) => {
        encryptedMess.push(this.letters[item - 1] && typeof(item) === "number" ? this.letters[item - 1] : item);
      });

      return this.type || this.type === undefined ? encryptedMess.join("") : encryptedMess.reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
