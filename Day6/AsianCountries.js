fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries by region (Asia)
    const asianCountries = data.filter(country => country.region === 'Asia');
    // Extract the common names of the countries
    const asianCountryNames = asianCountries.map(country => country.name.common);
    console.log(asianCountryNames);
  })
