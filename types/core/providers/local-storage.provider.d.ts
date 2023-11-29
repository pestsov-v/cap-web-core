export interface ILocalStorageProvider {
    setItem(key: string, value: unknown): void
    getMandatory<T extends NLocalStorageProvider.ItemType = NLocalStorageProvider.ItemType>(name: string): T
    getString(name: string, def?: string): string
    getNumber(name: string, def?: number): number
    getBoolean(name: string, def: boolean): boolean
    getArray<T extends NLocalStorageProvider.ItemType = NLocalStorageProvider.ItemType>(name: string, def: Array<T>): Array<T>
    deleteItem(name: string): void
}

export namespace NLocalStorageProvider {
    export type ItemType = string | number | boolean | unknown
}