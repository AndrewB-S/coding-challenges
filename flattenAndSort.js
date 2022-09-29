"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return [].concat(...array).sort((a, b) => a - b)
}

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a, b) => a - b)
}