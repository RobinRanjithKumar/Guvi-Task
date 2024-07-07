fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usdCountries = data
      .filter(country => country.currencies && country.currencies.USD)
      .map(country => country.name.common);

    console.log(usdCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
