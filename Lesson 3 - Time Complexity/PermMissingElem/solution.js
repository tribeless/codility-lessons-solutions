  /**
   * @author {bcoder} wit help from {Mickey0521}
   * @time-taken {14min}
   * @param {A an array} 
   * @returns {number}
   * @score {100%}
   */
function solution(A){
    let ceiling = A.length+1;
    let floorVal = 1;
    let height = A.length+1;
    let sum = (ceiling+floorVal)*(height/2);
    for(let i=0;i<A.length;++i){
      sum = sum - A[i];
    }
    return sum;
  }