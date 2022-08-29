const {promedioNormal, desviacionEstandard, arribaDeLaMedia} = require('./statistics');

describe('Testing el Promedio', () => {
  it('should return 1 to 1,1,1,1,1,1,1 input', () => {
    let promedioCalculado = promedioNormal(1,1,1,1,1,1,1);
    expect(promedioCalculado).toBe(1);
  });
  it('should return 2 to 1,2,3 input', () => {
    let promedioCalculado = promedioNormal(1,2,3);
    expect(promedioCalculado).toBe(2);
  })
  it('should return 2 to 2,2,2,2,2,2,2 input', () => {
    let promedioCalculado = promedioNormal(2,2,2,2,2,2,2);
    expect(promedioCalculado).toBe(2);
  })
  it.only('should throw an Error to null input', () => {
    expect(() => {promedioNormal()}).toThrow(/expanded array/i);
  })
})

describe('Testing de la function arribaDeLaMedia', () => {
  it('Debe regresar un valor definido', () => {
    expect(arribaDeLaMedia(0,0)).toBeDefined();
  });
  it('Debe regresar true a 1, 0', () => {
    expect(arribaDeLaMedia(1,0)).toBeTruthy();
  });
  it('Debe regresar true a 5, 5', () => {
    expect(arribaDeLaMedia(5,5)).toBeTruthy();
  })
  it('Debe regresar false to 0, 5', () => {
    expect(arribaDeLaMedia(0,5)).toBeFalsy();
  });
});

describe('Testing de la function desviacionEstandard', () => {
  it('Debe retornar 0 de 1,1,1 input', () => {
    expect(desviacionEstandard(1,1,1)).toEqual(0);
  })
  it('Debe regresar un valor positivo para un random', () => {
    expect(desviacionEstandard(-2,-2,-2)).toBeGreaterThanOrEqual(0)
  })
});