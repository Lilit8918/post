export class UserApi {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async register(user) {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      return response.json();
    }
  }
  