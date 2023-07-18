export interface BaseUsecase<Response> {
  execute<Request>(req: Request): Promise<Response>;
}
