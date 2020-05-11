export interface card {
    card: cardType
}

interface cardType {
    id: string,
    name: string,
    imageUrl: string,
    types: Array<any>
}
