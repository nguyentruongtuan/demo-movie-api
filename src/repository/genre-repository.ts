import { Genre } from "src/entity/genre";
import { BaseRepository } from "./base-repository";
import { GetEntitiesRequest } from "src/request/get-entities-request";
import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { GenreGateway } from "src/gateway/genre-gateway";

export interface GenreRepository extends BaseRepository<Genre, null, null> {}

@injectable()
export class GenreRepositoryImpl implements GenreRepository {
  constructor(
    @inject(TYPES.GenreGateway) private readonly genreGateway: GenreGateway
  ) {}

  async getEntities(req: GetEntitiesRequest): Promise<Genre[]> {
    return this.genreGateway.getAll(req);
  }

  async getEntityById(id: number): Promise<Genre> {
    return null;
  }

  async createEntity(request: null): Promise<Genre> {
    return null;
  }

  async updateEntity(req: null): Promise<Genre> {
    return null;
  }

  async deleteEntity(id: number): Promise<void> {}
}
