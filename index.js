const getWords = require('./get-words');
const mergeSimilarWords = require('./merge-similar-words');
const getWordIntersects = require('./get-word-intersects');

class WordCluster {
  static cluster(strings, ignores = [], isTrim = false, minLen = 3, minCount = 2) {
    const clusters = this._getWordCluster(strings, ignores, minLen, isTrim);
    
    let clusteredStrings = {};

    for (let cluster of clusters) {
      const clusterChild = strings.filter(str => str.includes(cluster));

      clusteredStrings[cluster] = clusterChild.length >= minCount ? clusterChild : undefined;
    }
    
    return clusteredStrings;
  }

  static _getWordCluster(strings, ignores, minLen, isTrim) {
    let words = getWords(strings, ignores, isTrim);
    
    let intersects = getWordIntersects(words, minLen);
    intersects = mergeSimilarWords(intersects);

    return intersects;
  }
}

module.exports = WordCluster;