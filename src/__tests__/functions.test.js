const { sum, sayHello } = require('../functions')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('sayHello says hello', () => {
  expect(sayHello()).toBe('hello')
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('expect true to be truthy', () => {
  expect(true).toBeTruthy()
})

let names = ['Bruce', 'Tony', 'Natasha', 'Clint', 'Steve']

test('Expect steve to be in avengers array', () => {
  expect(names.map(e => e.toLowerCase())).toContain('steve')
})

test('Add 7 and 2 to equal 9', () => {
  expect(sum(7, 2)).toBe(9)
  expect(sum(7, 2)).not.toBeNaN()
})

test('names contains bruce but not thor', () => {
  expect(names).toContain('Bruce')
  expect(names).not.toContain('Thor')
})
