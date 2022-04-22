/**
 * 
 * @param {*} N 
 * @returns {key}
 * @score {correctness:85%,performance:25%,score:55%}
 */
function solutionA(N){
    let data = new Map();
    let count = 1;
    for(let i=0;i<N.length;++i){
      for(let j=0;j<N.length;++j){
        if((N[i] === N[j])){
          data.set(N[i],count);
          count++;
        }
        if(j===N.length-1){
          count = 1;
        }
      }
    }
    let keys = [...data.keys()];
    let values = [...data.values()];
    const minValue = values.reduce((a,b)=>a<b?a:b);
    const index = values.indexOf(minValue);
    return keys[index];
  }

  /**
 * 
 * @param {*} N 
 * @returns {key}
 * @score {correctness:85%,performance:25%,score:55%}
 */
  function solutionB(N){
    let data = N.sort();
    let set = new Set([...data]);
    let cleanData = [...set];
    let min = 1000000001;
    let val = 0;
    for(let i=0;i<cleanData.length;++i){
      let count = data.reduce((a,b)=>(b===cleanData[i] ? a+1:a),0);
      if(count < min){
        min = count;
        val = cleanData[i];
      }
    }
    return val;
  }

  /**
 * 
 * @param {*} N 
 * @returns {key}
 * @score {correctness:100%,performance:25%,score:66%}
 */
  function solutionC(N){
    let data = N.sort();
    let start = 0;
    let running;
    do{
      running = false;
      if(data[start]===data[start+1]){
        data.splice(start,2);
        start = 0;
        running = true;
      }else{
        start++;
        running = true;
      }
      if(start === N.length-1){
        running = false;
      }
    }while(running);
    return data[0];
  }
