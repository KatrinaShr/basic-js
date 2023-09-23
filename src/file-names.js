const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];

  for (let i = 0; i < names.length; i += 1) {
    let countRepeatFiles = names.slice(0, i).filter((item) => item === names[i]);
    let countRepeatNames = result.slice(0, i).filter((item) => item === names[i]);
    
    if (names.slice(0, i).includes(names[i])) {
      result.push(`${names[i]}(${countRepeatFiles.length})`);
    } else if (result.slice(0, i).includes(names[i])) {

      result.push(`${names[i]}(${countRepeatNames.length})`);
    } else {
      result.push(names[i]);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
