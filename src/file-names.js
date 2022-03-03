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
 function renameFiles(arr) {
  let res = [];
  arr.forEach(el => {
    if (res.indexOf(el) == -1){
      res.push(el)
    }
    else {
      let reg = new RegExp(`${el}\\(\\d{1,}\\)$`);
      
      if (res.find(el => reg.test(el)) == undefined) {
        res.push(el + '(1)');
      }
      else {
        let temp = res.reverse().find(el => reg.test(el));
        res.reverse();
        
        let newName = +temp.match(/\(\d\)$/)[0].replace(/[\(\)]/g,'') + 1;
        res.push(`${el}(${newName})`);
      }
    }
  });

  return res;
}

module.exports = {
  renameFiles
};
