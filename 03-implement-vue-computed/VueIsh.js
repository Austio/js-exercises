function VueIsh(options = {}) {
  for(let d in options.data) {
    this[d] = options.data[d];
  }
  this.root = true;
}

export default VueIsh;