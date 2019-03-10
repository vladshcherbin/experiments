(function () {
  'use strict';

  function css() {
    throw new Error('Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.');
  }

  var css_1 = css;

  var css$1 = css_1;

  const bar = css$1`
  background-color: red;
`;

  console.log('hey');

}());
