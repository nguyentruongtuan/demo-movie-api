import { GetEntitiesRequest } from "src/request/get-entities-request";
import { BaseUsecase } from "../base-usecase";
import { Genre } from "src/entity/genre";
import { inject, injectable } from "inversify";
import { TYPES } from "src/bootstrap/types";
import { GenreRepository } from "src/repository/genre-repository";

@injectable()
export class GetGenresUsecase
  implements BaseUsecase<GetEntitiesRequest, Array<Genre>>
{
  constructor(
    @inject(TYPES.GenreRepository)
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(req: GetEntitiesRequest): Promise<Genre[]> {
    return this.genreRepository.getEntities(req);
  }
}
