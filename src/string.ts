export function capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1)
}

export function truncate(str: string, limit: number): string {
    if (str.length > limit) {
        return str.slice(0, limit) + '...'
    } else {
        return str
    }
}