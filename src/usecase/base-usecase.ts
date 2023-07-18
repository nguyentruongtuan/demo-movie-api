export interface BaseUsecase<Request, Response> {
  execute(req: Request): Promise<Response>;
}
