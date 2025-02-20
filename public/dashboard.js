// dashboard.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/registrations") // Your API endpoint to get the data
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#registrationsTable tbody");
      data.forEach((registration) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                     <td><span class="math-inline">\{registration\.name\}</td\>
<td\></span>{registration.email}</td>
                     <td>${registration.phone}</td>
                 `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
