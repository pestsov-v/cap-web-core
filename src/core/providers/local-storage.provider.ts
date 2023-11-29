import {inversify} from '@Packages'
const {injectable} = inversify

import {ILocalStorageProvider, NLocalStorageProvider} from "@Core/Types";

@injectable()
export class LocalStorageProvider implements ILocalStorageProvider {
    public setItem(key: string, value: unknown): void {
        let val: string
        if (typeof value === 'string') {
            val = value
        } else if (typeof value === undefined || typeof value === null) {
            throw new Error('Try set value to localStorage with undefined or null type')
        } else {
            val = JSON.stringify(value)
        }
        localStorage.setItem(key, val)
    }

    public getMandatory<T extends NLocalStorageProvider.ItemType = NLocalStorageProvider.ItemType>(name: string): T {
        const variable = this._get<T>(name);
        if (typeof variable === 'undefined' || variable === '') {
            throw new Error(`Variable "${name}" not found`);
        }

        return variable;
    }

    public getString(name: string, def?: string): string {
        const variable = this._get<unknown>(name, def);
        if (typeof variable !== 'string') {
            try {
                return String(variable);
            } catch (_) {
                return def;
            }
        }
        return variable;
    }

    public getNumber(name: string, def?: number): number {
        const variable = this._get<unknown>(name, def);

        if (typeof variable !== 'number') {
            try {
                return Number(variable);
            } catch (_) {
                return def;
            }
        }
        return variable;
    }

    public getBoolean(name: string, def: boolean): boolean {
        const variable = this._get<unknown>(name, def);
        if (variable !== false && variable !== true) {
            return def;
        }
        return variable;
    }

    public getArray<T>(name: string, def: Array<T>): Array<T> {
        const variable = this._get<Array<T>>(name, def);

        if (typeof variable !== 'object') {
            try {
                return Array(variable);
            } catch {
                return def;
            }
        }
        return variable;
    }


    private _get<T extends NLocalStorageProvider.ItemType = NLocalStorageProvider.ItemType>(name: string, defaultValue?: T): T {
        const value = localStorage.get(name);
        return typeof value === 'undefined' ? defaultValue : value;
    }

    public deleteItem(name: string): void {
        localStorage.removeItem(name)
    }
}