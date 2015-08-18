//Anagram function returns 1 if positive or 0 if negative
function isAnagram(x,y){
  var check = 0;
  x = x.toLowerCase().split("").sort();
  y = y.toLowerCase().split("").sort();
  if(x.length === y.length){
    for(var i = 0; i < x.length; i++){
      if(x[i] != y[i]){
        check --;
      }
      else{
        check++;
      }
    }
    if (check == x.length){
      return 1;
    }
    else{
      return 0;
    }
  }
  else{
    return 0;
  }
}
console.log("The result is: "+isAnagram("abc", "bac"))
console.log("The result is: "+isAnagram("dog","God"));
console.log("The result is: "+isAnagram("abcd","acb"));
