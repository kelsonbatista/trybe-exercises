const circle = (radius) => {
  const pi = 3.14;
  const area = pi * (radius * radius);
  const perimeter = (2 * pi * radius).toFixed(2);
  if ((!radius) || (typeof radius !== 'number')) return undefined;
  return `{${radius}, ${area}, ${perimeter}}`
}
// console.log(circle());
module.exports = circle;
