  /**
 * @time {5 minutes} because of doubt :)
 * @param {*} X,Y,D
 * @returns {number of jumps}
 * @score {correctness:100%,performance:100%,score:100%}
 * I was scared of submitting this because it was really simple :)
 */
function solution(X, Y, D) {
    return Math.ceil(((Y-X)/D));
}