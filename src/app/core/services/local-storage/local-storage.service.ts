import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  setItem(item: any): void {
    Object.entries(item).forEach(([key, value]) =>
      localStorage.setItem(key, (value as number | string).toString())
    );
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export const localStore = new LocalStorageService();
