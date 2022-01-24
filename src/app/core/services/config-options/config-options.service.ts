import { Injectable } from '@angular/core';
import { ConfigModel } from '../../core.models';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private config: Partial<ConfigModel> | undefined;

  setConfig(data: Partial<ConfigModel>): void {
    this.config = data;
  }

  getConfig(): Partial<ConfigModel> | undefined {
    return this.config;
  }
}
