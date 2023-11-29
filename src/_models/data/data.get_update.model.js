export class GetUpdateModel {
  name;
  email;

  constructor(data = {}) {
    this.name = data.name || "";
    this.email = data.email || "";
  }
}
