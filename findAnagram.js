function checkAnagram(firstWord, secondWord){ //Function to check anagram word
  if (firstWord.length !== secondWord.length){
    return false;
  }
  firstWord = firstWord.split('').sort().join('');
  secondWord =secondWord.split('').sort().join('');
  if(firstWord === secondWord){
    return true;
  }
  else{
    return false;
  }
}
//Explaination is in readme file
