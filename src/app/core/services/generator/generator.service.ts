import { Injectable, InjectionToken } from '@angular/core';
import { genID } from './gen-id.generator';

export const generatedString = new InjectionToken<string>('Random String');

@Injectable({ providedIn: 'root' })
export class GeneratorService {
  generate(n: number): string {
    let generatedString = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < n; i++) {
      generatedString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return generatedString;
  }

  getNewID(): number {
    return genID().next().value as number;
  }
}
