import { User } from '../entities/user.entity';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { Product } from '../entities/product.entity';

/**
 * @description
 * Service for data access - saving data in/load data from  JSON-file
 */
class Repository<T extends { id: string }> {
  private entities: T[];

  constructor(private readonly pathToFile: string) {
    this.entities = [];

    this.load();
  }

  private generateId() {
    const existIds = new Set(this.entities.map((ent) => ent.id));

    do {
      const id =
        '' + Math.round(Math.random() * existIds.size + 10 * Math.random());

      if (!existIds.has(id)) {
        return id;
      }
    } while (true);
  }

  public async getEntities(withRefreshData: boolean = false) {
    if (withRefreshData) {
      await this.load();
    }

    return this.entities;
  }

  public remove(state: Partial<T>) {
    const filteredEntities = this.entities.filter((entity) =>
      Object.keys(state).every((key) => state[key] === entity[key])
    );

    this.entities = filteredEntities;
  }

  public add(entity: Partial<T>) {
    const id = this.generateId();
    const entityWithId = { ...entity, id } as T;
    this.entities.push(entityWithId);

    return entityWithId;
  }

  public async save() {
    try {
      await writeFile(this.pathToFile, JSON.stringify(this.entities, null, 4));
    } catch (err) {}
  }

  public async load() {
    try {
      const fileContent = await readFile(this.pathToFile, 'utf8');

      this.entities = JSON.parse(fileContent);
      return true;
    } catch (err) {
      await this.save();
      return false;
    }
  }
}

export const productRepository = new Repository<Product>(
  path.join(__dirname, '../data/products.json')
);

export const userRepository = new Repository<User>(
  path.join(__dirname, '../data/users.json')
);
