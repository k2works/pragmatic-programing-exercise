export class Fibonacci {
  private value: bigint;

  constructor(value: bigint) {
    this.value = value;
  }

  equal(other: Fibonacci) {
    return this.value === other.value;
  }

  add(other: Fibonacci) {
    return new Fibonacci(this.value + other.value);
  }
}
