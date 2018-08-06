const mergeSimilarWords = (words) => {
  let mergedWords = [];
  
  for (let word of words) {
    const similarWords = words.filter(subName => {
      return word === subName ? false : word.includes(subName);
    });

    if (similarWords.length == 0) {
      mergedWords.push(word);
    }
  }

  return mergedWords;
}

module.exports = mergeSimilarWords;