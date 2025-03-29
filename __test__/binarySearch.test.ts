import binarySearch from "../src/binarySearch";

describe("Test de binarySearch", () => {
  test("Deberia devolver null si la lista esta vacia ", () => {
    const result = binarySearch([], 1);
    expect(result).toBeNull();
  });

  test("Deberia devolver el indice si encuentra el elemento", () => {
    const result = binarySearch([1, 2, 3, 4, 5], 1);
    expect(result).toBe(0);
  });

  test("Deberia devolver null si no encuentra el elemento", () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 11], 9);
    expect(result).toBeNull();
  });
});
