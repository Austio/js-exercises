function defineProp(that, key, v) {
  var val = v;

  Object.defineProperty(that, key, {
    enumerable: true,
    get() {
      return val;
    },
    set(newVal) {
      val = newVal;
    }
  })
}

function VueIsh(options = {}) {
  for(let d in options.data) {
    defineProp(this, d, options.data[d])
  }
  this.root = true;
}

export default VueIsh;