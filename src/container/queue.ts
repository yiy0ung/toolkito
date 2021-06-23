import { Container } from "./internal/Container";

export class Queue<T> extends Container {
  private list: T[];

  constructor() {
    super();
    this.list = [];
  }

  public get() {
    return this.list;
  }

  public push() {
    
  }

  public pop() {

  }

  public front() {

  }

  public back() {

  }

  public clear(): void {
    throw new Error("Method not implemented.");
  }
  public size(): number {
    throw new Error("Method not implemented.");
  }
}
