async function ping() {
  const res = await fetch("http://localhost:3000/api/ping");
  const data = await res.json();

  document.body.innerHTML = `
    <h1 style="font-family: sans-serif;">
      Backend says: <span style="color: #4ade80;">${data.message}</span>
    </h1>
  `;
}

ping();
