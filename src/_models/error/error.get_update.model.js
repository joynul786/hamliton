export class ErrorGetUpdateModel {
  name;
  email;

  constructor(data = {}) {
    this.name = data.name || "";
    this.email = data.email || "";
  }
}
