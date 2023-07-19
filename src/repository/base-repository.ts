import { GetMoviesRequest } from "src/request/get-movies-request";

export interface BaseRepository<Entity, CreateRequest, UpdateRequest> {
  getEntityById(id: number): Promise<Entity>;
  getEntities(req: GetMoviesRequest): Promise<Array<Entity>>;
  createEntity(request: CreateRequest): Promise<Entity>;
  deleteEntity(id: number): Promise<void>;
  updateEntity(req: UpdateRequest): Promise<Entity>;
}
