// Function to fetch random dog media
function fetchRandomDog() {
    return new Promise((resolve, reject) => {
        fetch('https://random.dog/woof.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data.url))
            .catch(error => reject(error));
    });
}

// Function to display random dog media
function displayDogMedia(mediaUrl) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous content

    // Check if the URL is an image or video
    const isImage = mediaUrl.match(/\.(jpg|jpeg|png|gif)$/i);
    if (isImage) {
        const img = document.createElement('img');
        img.src = mediaUrl;
        img.alt = 'Random Dog';
        img.className = 'data-item';
        dataContainer.appendChild(img);
    } else {
        const video = document.createElement('video');
        video.src = mediaUrl;
        video.controls = true;
        video.className = 'data-item';
        dataContainer.appendChild(video);
    }
}

// Event listener for fetch button
document.getElementById('fetchButton').addEventListener('click', () => {
    fetchRandomDog()
        .then(mediaUrl => displayDogMedia(mediaUrl))
        .catch(error => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        });
});
