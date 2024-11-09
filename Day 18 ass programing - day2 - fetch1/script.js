// Function to fetch random cat facts
function fetchCatFacts() {
    return new Promise((resolve, reject) => {
        fetch('https://catfact.ninja/facts?limit=5')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data.data)) // Accessing the 'data' array inside the API response
            .catch(error => reject(error));
    });
}

// Function to display fetched cat facts
function displayCatFacts(facts) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data
    facts.forEach(fact => {
        const div = document.createElement('div');
        div.className = 'data-item mb-3';
        div.innerHTML = `<p>${fact.fact}</p>`;
        dataContainer.appendChild(div);
    });
}

// Event listener for fetch button
document.getElementById('fetchButton').addEventListener('click', () => {
    fetchCatFacts()
        .then(facts => displayCatFacts(facts))
        .catch(error => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        });
});
