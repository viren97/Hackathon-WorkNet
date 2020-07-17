export class ApiConnection
{
    async postAync(url , data ) {
    const res = await fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.authToken,
    },
    body: JSON.stringify(data)
    })
    console.log(res);
    return await res.json();
  }

  post(url , data ) {
    return  fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.authToken,
    },
    body: JSON.stringify(data)
    })
    .then((res) => res.json());
}
    async postWithoutAuth(url , data ) {
    const res = await fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    });
    return await res.json();
   }

    async put(url , data ) {
    const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.authToken,
    },
    body: JSON.stringify(data)
    });
    return await res.json();
  }

    async getAsync(url ){
    const res = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.authToken,
    },
    });
    return await res.json();
  }

  async get(url ){
    return fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.authToken,
    },
    })
    .then(res => res.json())
  }
}