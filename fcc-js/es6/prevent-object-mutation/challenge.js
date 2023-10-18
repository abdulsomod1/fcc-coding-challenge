/* eslint-disable prettier/prettier */
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log('ex', ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
