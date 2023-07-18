import { GetMoviesRequest } from "src/request/get-movies-request";

export interface BaseRepository<Entity> {
  getEntities(req: GetMoviesRequest): Promise<Array<Entity>>;
  createEntity<CreateRequest>(request: CreateRequest): Promise<Entity>;
  deleteEntity(id: string): Promise<void>;
  updateEntity<UpdateRequest>(req: UpdateRequest): Promise<Entity>;
}
