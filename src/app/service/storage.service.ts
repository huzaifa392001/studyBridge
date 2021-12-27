import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public set(key: string, value: string) {
        localStorage['set'](key, value);
    }

    public get(key: string) {
        return localStorage['get'](key);
    }
    public removeItem(key: string) {
    }
    public clear() {
        localStorage.clear();
    }
}
