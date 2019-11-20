const expect = require('expect')

const mappings = [{
        key: 3,
        value: 'Fizz'
    },
    {
        key: 5,
        value: 'Buzz'
    },
    {
        key: 7,
        value: 'Gong'
    }
]

function fizBuz(mappings) {

    let result = []

    for (let i = 1; i < 151; i++) {

        result.push(mappings.filter(el => i % el.key === 0).map(el => el.value).join('') || i)
    }

    return result
}

const array = fizBuz(mappings)

expect(array.length).toBe(150)

expect(array[0]).toBe(1)

expect(array[2]).toBe('Fizz')
expect(array[4]).toBe('Buzz')
expect(array[6]).toBe('Gong')

expect(array[14]).toBe('FizzBuzz')
expect(array[20]).toBe('FizzGong')
expect(array[34]).toBe('BuzzGong')

expect(array[104]).toBe('FizzBuzzGong')