
function hash (str, max) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res = (res<<5) + res + str.charCodeAt(i);
    res = res & res; // Convert to 32bit integer
    res = Math.abs(res);
  }
  return res % max;
};

function Storage (size) {
  const storage = [];
  return {
    get: function (index) {
      //check if index is within size
      if (index>=size) {
        throw Error('Index exceeds size');
      }
      //get the value
      return storage[index];
      //get the falue from that index
    },
    set: function(index, value) {
      //check if index is within size
      if (index>=size) {
        throw Error('Index exceeds size');
      }
      //set the value
      storage[index] = value;
    }
  }
}

module.exports = {hash, Storage};