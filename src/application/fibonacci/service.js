export class Service {
  constructor(apiUrl = "http://localhost:3000/api") {
    this.apiUrl = apiUrl;
  }

  fetchApi(url, method) {
    const command = (resolve, reject) => {
      fetch(url, { method })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .then((error) => reject(error));
    };
    return new Promise(command);
  }

  async recursiveList(count) {
    const url = `${this.apiUrl}/list/1/${count}`;
    const result = await this.fetchApi(url, "POST");
    return result;
  }

  async loopList(count) {
    const url = `${this.apiUrl}/list/2/${count}`;
    const result = await this.fetchApi(url, "POST");
    return result;
  }

  async generalTermList(count) {
    const url = `${this.apiUrl}/list/3/${count}`;
    const result = await this.fetchApi(url, "POST");
    return result;
  }
}
