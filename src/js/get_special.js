export default function GetSpecial(obj) {
  if ('special' in obj) {
    const { special } = obj;
    const specials = Array.from(special);
    specials.forEach(item => { item.description = item.description || 'Описание недоступно'; });
    return specials;
  }
  return undefined;
}
