const findLongestWord = function(string) {
    const arr = string.split(' ');
    let biggestWord = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].length > biggestWord.length){
        biggestWord = arr[i]
      }
    }
    
    return biggestWord;
  };
  
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'