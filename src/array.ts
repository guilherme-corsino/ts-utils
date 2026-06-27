// src/array.ts

/**
 * Remove duplicatas de um array
 */
export function unique<T>(arr: T[]): T[] {
    return [...new Set(arr)]
}

/**
 * Agrupa itens de um array por uma chave
 */
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
    return arr.reduce((acc, item) => {
        const group = String(item[key])
        if (!acc[group]) acc[group] = []
        acc[group].push(item)
        return acc
    }, {} as Record<string, T[]>)
}

/**
 * Divide um array em chunks de tamanho n
 */
export function chunk<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
}