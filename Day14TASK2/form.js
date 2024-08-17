document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collecting form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const foodOptions = Array.from(document.getElementById("food").selectedOptions).map(option => option.value);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Appending to the table
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodOptions.join(", ")}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Clear the form
    document.getElementById("userForm").reset();
});
