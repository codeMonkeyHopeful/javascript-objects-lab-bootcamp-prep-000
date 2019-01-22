var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj2 = Object.assign(object)
  object2[key] = value;
  return object2;
}

