  /**
   * @author {bcoder}
   * @time-taken {28mins}
   * @param {n an integer} 
   * @returns {max length of zeros in a binary gap}
   * @score {100%}
   */
  
  function convertToBinary(n){
    let remainder = 0;
    let quotient = n;
    let binaryData = new Map();
    while(quotient > 0){
      remainder = quotient%2;
      quotient = Math.floor(quotient/2);
      binaryData.set(quotient,remainder.toString());
    }
    const res = [...binaryData.values()];
    return res.reverse().join("");
  }
  
  function binaryGap(n){
    const res = n.toString().split("1");
    let max = 0;
    for(let i=0;i<res.length-1;i+=1){
      if((res.length >=3) && (res[i] !== "")){
        if(res[i].length > max){
          max = res[i].length;
        }
      }
    }
    return max;
  }
  function solution(N) {
      const binaryNumber = convertToBinary(N);
      return binaryGap(binaryNumber);
  }
