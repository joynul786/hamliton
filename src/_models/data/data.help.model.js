export class HelpModel {
  name;
  email;

  constructor(data = {}) {
    this.name = data.name || "";
    this.email = data.email || "";
  }
}
