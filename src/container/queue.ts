import { Container } from "./internal/Container";

export class Queue extends Container {
  public list: number[] = [];

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
