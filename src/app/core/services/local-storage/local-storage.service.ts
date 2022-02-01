import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  setItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export const localStore = new LocalStorageService();
