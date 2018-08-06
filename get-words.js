const getWords = (strings, ignores, isTrim) => {
  let words = [];

  for (let str of strings) {
    const rIgnores = new RegExp(ignores.join('|'), 'gi');

    if (isTrim) {
      str = str.replace(/\s/g, '');
    }
    str = str.replace(rIgnores, '');

    if (str) {
      words.push(str);
    }
  }

  return words;
}

module.exports = getWords;