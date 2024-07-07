fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Capital: ${country.capital ? country.capital[0] : 'N/A'}`);
      console.log(`Flag: ${country.flags.svg}`);
      console.log('------------------------');
    });
  })
  .catch(error => console.error('Error fetching data:', error));
