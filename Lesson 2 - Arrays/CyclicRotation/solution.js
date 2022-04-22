  /**
   * @author {bcoder}
   * @time-taken {more than 30 mins :)}
   * @param {A an array, K int} 
   * @returns {reversed array}
   * @score {87%}
   */

function solution(A,K){
    if(A.length <= 1){
      return A;
    }
    let data = [];
    let lengthOfArray = A.length-1;
    for(let i=0;i<=lengthOfArray;i+=1){
      if((i + K) <= lengthOfArray){
        let sum = i+K;
        data[sum] = A[i];
      }else{
        if((i + K) > lengthOfArray){
          let diff = ((i+K)-A.length);
            if(diff >= A.length){
              let newDiff = diff-A.length;
              data[newDiff] = A[i];
            }else{
              data[diff] = A[i];
            }
        }
      }
    }
    return data;
  }