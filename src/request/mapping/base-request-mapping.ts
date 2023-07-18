export abstract class BaseRequestMapping<Request> {
  public abstract build(): Request;
}
