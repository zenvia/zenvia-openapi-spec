import { readFileSync } from 'fs';
import { join } from 'path';

export function rawLoad(...filePath) {
  return readFileSync(join(...filePath), 'utf-8');
}
