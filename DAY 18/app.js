// Function to fetch and display data from API 1
async function fetchAPI1Data() {
    try {
        const response = await fetch('https://api-thirukkural.web.app/api?num=x');
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        document.getElementById('api1Data').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('api1Data').textContent = `Failed to fetch API 1: ${error.message}`;
    }
}

// Function to fetch and display data from API 2
async function fetchAPI2Data() {
    try {
        const response = await fetch('https://api2.example.com/data');
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        document.getElementById('api2Data').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('api2Data').textContent = `Failed to fetch API 2: ${error.message}`;
    }
}

// Function to fetch and display data from API 3
async function fetchAPI3Data() {
    try {
        const response = await fetch('https://api3.example.com/data');
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        document.getElementById('api3Data').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('api3Data').textContent = `Failed to fetch API 3: ${error.message}`;
    }
}

// Event listeners for buttons
document.getElementById('api1Btn').addEventListener('click', fetchAPI1Data);
