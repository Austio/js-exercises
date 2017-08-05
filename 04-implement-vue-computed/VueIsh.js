function defineReactive(that, key, v) {
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

function defineComputed(that, key, getFn) {
  const boundGetFn = getFn.bind(that);

  Object.defineProperty(that, key, {
    enumerable: true,
    get() {
      return boundGetFn()
    },
    set() {
      // Can't set a computed function
      return;
    }
  })

}

function VueIsh(options = {}) {
  this.root = true;

  for(let d in options.data) {
    defineReactive(this, d, options.data[d])
  }

  for(let c in options.computed) {
    defineComputed(this, c, options.computed[c])
  }
}

export default VueIsh;
