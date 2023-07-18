export interface BaseRepository<Entity> {
  getEntities(): Promise<Array<Entity>>;
  createEntity<CreateRequest>(request: CreateRequest): Promise<Entity>;
  deleteEntity(id: string): Promise<void>;
  updateEntity<UpdateRequest>(req: UpdateRequest): Promise<Entity>;
}
