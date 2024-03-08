import * as fs from 'fs';

export function readJsonFile(filename: string): any {
  const rawData = fs.readFileSync(filename);
  return JSON.parse(rawData.toString());
}