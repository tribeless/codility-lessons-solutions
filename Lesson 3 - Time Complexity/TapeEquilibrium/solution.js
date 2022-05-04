  /**
   * @author {bcoder}
   * @time-taken {14min}
   * @param {A an array} 
   * @returns {number}
   * @score {100%}
   */
function solution(A){
    let sum = 0;
      for(let i=0;i<A.length;++i){
        sum += A[i];
      }
    
      let min_diff =  2147483647;
      let sum_one = 0;
      let sum_two = 0;
      let diff = 0;
      for(let p=1;p<A.length;++p){
        sum_one += A[p-1];
        sum_two = sum - sum_one;
        diff = sum_one-sum_two;
        diff = Math.abs(diff);
        min_diff =  Math.min(min_diff,diff);
      }
      return min_diff;
}