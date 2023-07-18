import { injectable } from "inversify";
import { Movie } from "src/model/movie";
import { BaseRepository } from "./base-repository";
import { UpdateMovieRequest } from "src/request/update-movie-request";
import { CreateMovieRequest } from "src/request/create-movie-request";

export interface MovieRepository extends BaseRepository<Movie> {}

@injectable()
export class MovieControllerImpl implements MovieRepository {
  async createEntity(request: CreateMovieRequest): Promise<Movie> {
    return null;
  }

  async updateEntity(req: UpdateMovieRequest): Promise<Movie> {
    return null;
  }

  async deleteEntity(id: string): Promise<void> {}

  async getEntities(): Promise<Movie[]> {
    return [{ name: "ABC1111" }];
  }
}
