# WordCluster
The simple cluster based on strings.

## Intro
**WordCluster** is clustering string set using word frequency in string array.

## Install
```
npm install wordcluster --save
```

## Syntax
```
WordCluster.cluster(strings[, ignores[, isTrim[, minLen[, minCount]]]])
```
### Parameters
- strings : The value to be string array targeted for clustering.
- ignores : If something include in ignores, something can't be a cluster.
- isTrim : If this value on, cluster with trimed strings.
- minLen : Cluster string can't smaller than **minLen**.
- minCount : Cluster with a count smaller than **minCount** is can't be a cluster.

## Examples
```
const WordCluster = require('WordCluster');

const dataSet = [
  'Amazon Hotel 101',
  'Amazon Hotel 102',
  'Amazon Hotel 103',
  'Amazon Hotel 104',
  'Jin Hotel 101',
  'Jin Hotel 102'
];

const result = WordCluster.cluster(dataSet);

console.log(result);
/* result
{
  'Amazon Hotel 10': [
    'Amazon Hotel 101',
    'Amazon Hotel 102',
    'Amazon Hotel 103',
    'Amazon Hotel 104'
  ],
  'Jin Hotel 10': [
    'Jin Hotel 101',
    'Jin Hotel 102'
  ]
}
*/
```

## Authors
tinyjin - [Github](https:github.com/tinyjin), [Blog](http://jinui.kr)

## License
This project has MIT License.