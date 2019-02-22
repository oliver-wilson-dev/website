/*
  Lovingly ripped-off from https://github.com/keyanzhang/identity-obj-proxy
  Added benefit of being able to prototype values within tests to simulate
  the @value export abilities of css modules.
*/

module.exports = new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        return false;
      }
      if (target[key]) {
        return target[key];
      }

      return key;
    }
  }
);
