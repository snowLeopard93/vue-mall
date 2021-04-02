export function validateTextMaxLen(rule, value, callback) {
  if (value && value.length > 16) {
    callback("长度不能大于16");
  }
  callback();
}

export function validateTextareaMaxLen(rule, value, callback) {
  if (value && value.length > 64) {
    callback("长度不能大于64");
  }
  callback();
}
