export class Recipe {
    name: String;
    details: String;
    steps: String[];

    constructor(name: String, details: String, steps: String[]) {
      this.name = name;
      this.details = details;
      this.steps = steps;
    }
}
