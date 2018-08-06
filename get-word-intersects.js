const getWordIntersects = (words, minLen) => {
  let wordIntersects = new Set();

  for (let i = 0, len = words.length; i < len; i++) {
    const mainWord = words[i];

    for (let j = i + 1, subLen = len - 1; j < subLen; j++) {
      const subWord = words[j];

      const intersect = _wordIntersection(mainWord, subWord);
      const iLen = intersect.length;
      const averWordsLen = (mainWord.length + subWord.length) / 2;

      if (intersect && iLen > (averWordsLen / 2) && iLen >= minLen) {
        wordIntersects.add(intersect);
      }
    }
  }

  return [...wordIntersects];
}

const _wordIntersection = (mainWord, subWord) => {
  const len = Math.min(mainWord.length, subWord.length);
  let intersect = '';

  for (let i = 0; i < len; i++) {
    const m = mainWord.charAt(i);
    const s = subWord.charAt(i);

    if (m !== s) break;

    intersect += m;
  }

  return intersect;
}

module.exports = getWordIntersects;