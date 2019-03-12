import { converter } from './../src/scripts.js';

describe('Converter', function() {

  it('should correctly convert 2019 to MMXIX', function() {
    expect(converter(2019)).toEqual("MMXIX");
  });
  it('should correctly convert 1234 to MCCXXXIV', function() {
    expect(converter(1234)).toEqual("MCCXXXIV");
  });
  it('should add an M for every thousand', function() {
    expect(converter(1000)).toEqual("M");
  });

  it('should add a D for every 500', function() {
    expect(converter(500)).toEqual("D");
  });

  it('should add a C for every 100', function() {
    expect(converter(100)).toEqual("C");
  });

  it('should add a L for every 50', function() {
    expect(converter(50)).toEqual("L");
  });

  it('should add a X for every 10', function() {
    expect(converter(10)).toEqual("X");
  });

  it('should add a V for every 5', function() {
    expect(converter(5)).toEqual("V");
  });

  it('should add a I for every 1', function() {
    expect(converter(1)).toEqual("I");
  });

});
