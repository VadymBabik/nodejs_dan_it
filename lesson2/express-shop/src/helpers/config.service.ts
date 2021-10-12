import { config } from 'dotenv';

class ConfigService {
  constructor() {
    config();
  }
  public get<T>(key: string): T {
    return (process.env[key] as unknown as T) || null;
  }

  public set(key: string, value: string) {
    process.env[key] = value;
  }
}

export default new ConfigService();
