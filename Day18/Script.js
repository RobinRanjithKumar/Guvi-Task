document.addEventListener('DOMContentLoaded', function() {
    // Define API URLs
    const apiUrls = [
        'https://api.publicapis.org/entries',
        'https://jsonplaceholder.typicode.com/posts',
        'https://dog.ceo/api/breeds/image/random'
    ];

    // Fetch data from APIs using Promise
    Promise.all(apiUrls.map(url => fetch(url).then(response => response.json())))
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Function to display data on the webpage
    function displayData(data) {
        const apiDataDiv = document.getElementById('apiData');

        // Example data display (API 1: Public APIs)
        const apis = data[0].entries.slice(0, 3); // Display first 3 APIs
        apis.forEach(api => {
            const apiCard = document.createElement('div');
            apiCard.className = 'col-md-4';
            apiCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${api.API}</h5>
                        <p class="card-text">${api.Description}</p>
                        <a href="${api.Link}" target="_blank" class="btn btn-primary">Visit API</a>
                    </div>
                </div>
            `;
            apiDataDiv.appendChild(apiCard);
        });

        // Example data display (API 2: Posts)
        const posts = data[1].slice(0, 3); // Display first 3 posts
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'col-md-4';
            postCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            `;
            apiDataDiv.appendChild(postCard);
        });

        // Example data display (API 3: Random Dog Image)
        const dogImageCard = document.createElement('div');
        dogImageCard.className = 'col-md-4';
        dogImageCard.innerHTML = `
            <div class="card mb-4">
                <img src="${data[2].message}" class="card-img-top" alt="Random Dog">
            </div>
        `;
        apiDataDiv.appendChild(dogImageCard);
    }
});
