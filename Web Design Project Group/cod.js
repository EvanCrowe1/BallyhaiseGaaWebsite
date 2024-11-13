
// Define the API endpoint and your API key (if necessary)
const apiUrl = 'https://api.example.com/users/123';  // Example endpoint

// Fetch data from the API using GET method
fetch(apiUrl, {
    method: 'GET', // HTTP method (GET, POST, etc.)
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY' // Optional: Authentication
    }
})
.then(response => response.json()) // Parse the response as JSON
.then(data => {
    console.log(data); // Handle the data (e.g., display it on the page)
})
.catch(error => {
    console.error('Error:', error); // Handle any errors
});



const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('GET', 'https://google-map-places.p.rapidapi.com/maps/api/geocode/json?address=1600%20Amphitheatre%2BParkway%2C%20Mountain%20View%2C%20CA&language=en&region=en&result_type=administrative_area_level_1&location_type=APPROXIMATE');
xhr.setRequestHeader('x-rapidapi-key', 'e040be9ff1mshfb9b51ffb70f16fp102d2ajsn67cf41320d36');
xhr.setRequestHeader('x-rapidapi-host', 'google-map-places.p.rapidapi.com');

xhr.send(data);