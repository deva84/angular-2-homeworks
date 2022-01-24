import { GeneratorService } from './generator.service';

export function GeneratorFactory(n = 6): (generatorService: GeneratorService) => string {
  return (generatorService: GeneratorService): string => generatorService.generate(n);
}
