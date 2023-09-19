const inputRealUser1 = {
    tags: ['happy', 'good', 'fine']
}
const inputRealUser2 = {
    tags: ['foo', 'good', 'bar']
}


function conuntDimensions(inputRealUser1, inputRealUser2) {

    let t1 = inputRealUser1.tags
    let t2 = inputRealUser2.tags

    const alltags = Set(t1.concact(t2))

    return alltags
}




const inputUser1 = [0, 1, 0, 1, 1];
const inputUser2 = [0, 1, 1, 0, 0];

// add Error case ....
function manhattanDistance(arr1, arr2) {
  let distance = 0;
  for (let i = 0; i < arr1.length; i++) {
    distance += Math.abs(arr1[i] - arr2[i]);
  }
  return distance;
}

const distance = manhattanDistance(inputUser1, inputUser2);
// console.log("曼哈頓距離是:", distance);


module.exports = { 
    manhattanDistance
}