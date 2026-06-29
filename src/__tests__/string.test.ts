import { capitalize } from '../string'

it('deve capitalizar a primeira letra', () => {
    expect(capitalize('guilherme')).toEqual('Guilherme')
})