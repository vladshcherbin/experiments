const testing = true;
class Test {
  constructor() {
    Object.defineProperty(this, "test", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 'test'
    });
  }

}

export { testing, Test };
