
export abstract class Container {
  public abstract clear(): void;

  public abstract size(): number;

  public empty(): boolean {
    return this.size() === 0;
  }
}