import { GetMoviesRequest } from "src/request/get-movies-request";

export interface BaseRepository<Entity, CreateRequest, UpdateRequest> {
  getEntities(req: GetMoviesRequest): Promise<Array<Entity>>;
  createEntity(request: CreateRequest): Promise<Entity>;
  deleteEntity(id: string): Promise<void>;
  updateEntity(req: UpdateRequest): Promise<Entity>;
}
