URL_BASE = 'https://localhost:7149'

let connection = new signalR.HubConnectionBuilder()
    .withUrl(`${URL_BASE}/chat`)
    .build();

connection.start().catch(err => console.error(err.toString()));