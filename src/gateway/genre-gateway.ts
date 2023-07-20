import { injectable } from "inversify";
import { GenreMapping } from "src/entity/data-mapping/genre-mapping";
import { Genre } from "src/entity/genre";
import { NotFound } from "src/error/not-found";
import { GenreModel } from "src/model/genre-model";
import { GetEntitiesRequest } from "src/request/get-entities-request";
import { BaseGateway } from "./base-gateway";

@injectable()
export class GenreGateway extends BaseGateway<Genre> {
  async getById(id: number): Promise<Genre> {
    const movie = await GenreModel.findOne({ where: { id } });

    if (!movie) {
      throw new NotFound(`Cannot find Genre entity with id ${id}`);
    }

    return new GenreMapping(movie).build();
  }

  async getAll(req: GetEntitiesRequest): Promise<Array<Genre>> {
    const entities = await GenreModel.findAll({
      limit: req.limit,
      offset: req.offset,
    });

    return entities.map((m) => new GenreMapping(m).build());
  }
}
