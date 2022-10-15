import { getPercents } from "../getPercents.js";

describe ( 'test for getPercents function', () => {
  it( 'function should correctly calculate the percentage of the number', () => {
      expect(getPercents(50, 1000)).toBe(`50% от 1000 равно 500`)
  }),
  it( 'corner case: if number  0 => result is always 0', () => {
      expect(getPercents(10, 0)).toBe(`10% от 0 равно 0`)
  }),
  it( 'function should throw an error', () => {
      expect(getPercents(-5, 100)).toBe('Количество процентов должно быть больше или равно 0')
  });
})