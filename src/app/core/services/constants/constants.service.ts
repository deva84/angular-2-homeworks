import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  getAppData() {
    return {
      name: 'Shop',
      version: '1.0.0',
      url: 'http://localhost:4200/',
    };
  }
}

export const constants = new ConstantsService();
