const Dep = {
  target: null
};

function defineReactive(that, key, v) {
  var val = v;
  var deps = [];

  Object.defineProperty(that, key, {
    enumerable: true,
    get() {
      if (Dep.target) {
       deps.push(Dep.target);
      }

      return val;
    },
    set(newVal) {
      val = newVal;

      deps.forEach(onDependencyUpdated => {
        onDependencyUpdated();
      })
    }
  })
}

function defineComputed(that, key, getFn, updateCallback) {
  const boundGetFn = getFn.bind(that);
  const onDependencyUpdated = function() {
    updateCallback(boundGetFn());
  };

  Object.defineProperty(that, key, {
    enumerable: true,
    get() {
      Dep.target = onDependencyUpdated;
      var value = boundGetFn();
      Dep.target = null;
      return value;
    },
    set() {
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
