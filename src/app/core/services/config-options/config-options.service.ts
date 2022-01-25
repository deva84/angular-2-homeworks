import { Injectable } from '@angular/core';
import { ConfigModel } from '../../core.models';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private config: Partial<ConfigModel> = {};

  setConfig(data: Partial<ConfigModel>): void {
    this.config = {...this.config, ...data};
  }

  getConfig(): Partial<ConfigModel> | undefined {
    return this.config;
  }
}
