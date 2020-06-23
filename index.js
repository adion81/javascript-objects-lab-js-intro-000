function updateObjectWithKeyAndValue(object, key, value){
  var newObj = object.assign({},object,{[key]:value})
  return newObj;
}
