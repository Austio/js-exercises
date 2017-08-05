
var commonName = 5;
var external = 10;

r = (function() {
  var commonName = 2;

  function getName() {
    function foo() {
      return external;
    }

    return foo();
  }

  function getExternal() {
    return external;
  }

  {
    name: getName,
    external: getExternal,
  }
})();
