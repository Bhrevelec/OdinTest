const { capitalize, reverseString, calculator, caesarify, analyzeArray } = require('./functions')


test('capitalize the first letter of boris', () => {
  expect(capitalize('boris')).toBe('Boris');
});

test('reverse the word boris', () => {
    expect(reverseString('boris')).toBe('sirob');
});

test('add 2 plus 3', () => {
    expect(calculator.add(2,3)).toBe(5);
})

test ('subtract 3 from 2', () => {
    expect(calculator.subtract(2,3)).toBe(-1);
})

test ('multiply 2 and 3', () => {
    expect(calculator.multiply(2,3)).toBe(6);
})

test('check whether abc becomes def', () => {
    expect(caesarify('abc',3)).toBe('def');
})

test('check whether xyz becomes abc', () => {
    expect(caesarify('xyz',3)).toBe('abc');
})

test('check whether HeLLo becomes KhOOr', () => {
    expect(caesarify('HeLLo',3)).toBe('KhOOr');
})

test('check whether Hello, World! returns Khoor, Zruog!', () => {
    expect(caesarify('Hello, World!',3)).toBe('Khoor, Zruog!')
})

test('check whether array [1,8,3,4,2,6] returns the correct values', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
        });
})