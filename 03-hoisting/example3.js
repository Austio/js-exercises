var variable = 'some value';

(function() {
  alert(variable);
  var variable = 'local value';
})();


(function() {
  var variable;
  alert(variable);
  variable = 'local value';
})();
