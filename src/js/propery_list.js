export default function PropertyList(obj, keys) {
  const list = Object.keys(obj);
  list.sort();
  const result = [];
  for (const key of keys) {
    const index = list.indexOf(key);
    if (index >= 0) {
      result.push({ key, value: obj[key] });
      list.splice(index, 1);
    }
  }
  for (const prop of list) {
    result.push({ key: prop, value: obj[prop] });
  }
  return result;
}
