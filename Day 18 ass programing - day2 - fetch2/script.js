// Function to fetch a random dog image
function fetchDogImage() {
    return new Promise((resolve, reject) => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data.message)) // Accessing the 'message' field in the API response
            .catch(error => reject(error));
    });
}

// Function to display fetched dog image
function displayDogImage(imageUrl) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog';
    img.className = 'data-item';
    dataContainer.appendChild(img);
}

// Event listener for fetch button
document.getElementById('fetchButton').addEventListener('click', () => {
    fetchDogImage()
        .then(imageUrl => displayDogImage(imageUrl))
        .catch(error => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        });
});
