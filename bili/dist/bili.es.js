function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var testing = true;
var Test = function Test() {
  _classCallCheck(this, Test);

  Object.defineProperty(this, "test", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'test'
  });
};

export { testing, Test };
