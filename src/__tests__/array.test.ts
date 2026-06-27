import { unique, groupBy, chunk } from '../array'

describe('unique', () => {
    it('deve remover duplicatas de array de números', () => {
        expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
    })

    it('deve remover duplicatas de array de strings', () => {
        expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
    })

    it('deve retornar o mesmo array sem duplicatas', () => {
        expect(unique([1, 2, 3])).toEqual([1, 2, 3])
    })
})

describe('groupBy', () => {
    it('deve agrupar objetos por chave', () => {
        const usuarios = [
            { nome: 'Gui', cargo: 'dev' },
            { nome: 'Ana', cargo: 'design' },
            { nome: 'João', cargo: 'dev' },
        ]

        const resultado = groupBy(usuarios, 'cargo')

        expect(resultado['dev']).toHaveLength(2)
        expect(resultado['design']).toHaveLength(1)
    })
})

describe('chunk', () => {
    it('deve dividir array em chunks do tamanho certo', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    it('deve retornar um chunk só se o array for menor que o tamanho', () => {
        expect(chunk([1, 2], 5)).toEqual([[1, 2]])
    })
})