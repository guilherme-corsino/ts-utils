import { capitalize, truncate } from '../string'

it('deve capitalizar a primeira letra', () => {
    expect(capitalize('guilherme')).toEqual('Guilherme')
})

it('deve truncar a string quando for maior que o limite', () => {
    expect(truncate('Guilherme', 5)).toEqual('Guilh...')
})

it('deve retornar a string inteira quando for menor que o limite', () => {
    expect(truncate('Gui', 10)).toEqual('Gui')
})