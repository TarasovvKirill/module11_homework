export function getPercents(percent, number) {
  if (percent < 0) {
    return 'Количество процентов должно быть больше или равно 0';
  }
  let result = number / 100 * percent;
	return `${percent}% от ${number} равно ${result}`;
}