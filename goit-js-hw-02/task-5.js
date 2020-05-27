const checkForSpam = function(message) {
  const spamWords = ['sale', 'spam']
  const wordsToCheck = message.toLowerCase();

    for (let i = 0; i < spamWords.length; i += 1){
        if (wordsToCheck.includes(spamWords[i])){
          return true;
        }
    }
    return false;

};


console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 