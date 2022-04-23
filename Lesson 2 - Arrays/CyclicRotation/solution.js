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
  /**
   * @author {bcoder}
   * @time-taken {4 minutes}
   * @param {A an array, K int} 
   * @returns {reversed array}
   * @score {100%}
   * learning how to write simpler solutions
   * you can compare the first one and this one :)
   * though i needed some help
   */
function solution(A, K) {
    let data = [];
    for(let i=0;i<A.length;i+=1){
        let val = ((i+K)%A.length);
        data[val] = A[i];
    }
    return data;
}
