const callBound = require("call-bound")
const getIntrinsic = require("get-intrinsic")
const $ArrayFrom = getIntrinsic("%Array.from%")
const $concat = callBound("String.prototype.concat")

module.exports = function concat() {
  return $concat.apply(null, [""].concat($ArrayFrom(arguments)))
}