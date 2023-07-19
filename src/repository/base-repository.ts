import { GetEntitiesRequest } from "src/request/get-entities-request";

export interface BaseRepository<Entity, CreateRequest, UpdateRequest> {
  getEntityById(id: number): Promise<Entity>;
  getEntities(req: GetEntitiesRequest): Promise<Array<Entity>>;
  createEntity(request: CreateRequest): Promise<Entity>;
  deleteEntity(id: number): Promise<void>;
  updateEntity(req: UpdateRequest): Promise<Entity>;
}
