/**
 * Anonymous class
 * @param {number} a
 * @constructor
 */
var A = function(a) {
  this.a = a;
};

/**
 * Named class
 * @constructor
 */
function B(a, b) {
  this.a = a;
  this.b = b;
}

/**
 * Named class extension
 * @constructor
 * @extends {A}
 */
function C(a, b) {
  C.base(this, 'constructor', a);
  this.b = b;
}
goog.inherits(C, A);

/**
 * Anonymous class extension
 * @constructor
 * @extends {B}
 */
var D = function(a, b, c) {
  B.call(this, a, b);
  this.c = c;
};
goog.inherits(D, B);