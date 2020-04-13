function Tree (value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function (value) {
  this.children.push(value);
}

Tree.prototype.contains = function (value) {
  stack = [];
  let current;
  let children;
  stack.push(this);
  while (stack.length) {
    current = stack.pop();
    if (current.value === value || current === value) {
      return true;
    } else {
      if (current.children) {
        children = current.children;
        for (i=0; i<children.length; i++) {
          stack.push(children[i]);
        }
      }
    }
  };
  return false;
}
