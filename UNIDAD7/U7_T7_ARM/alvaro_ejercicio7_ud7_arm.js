document.addEventListener('DOMContentLoaded', function () {
    const continente = document.getElementById('continente');
    const cardPais = document.getElementById('paises');

    continente.addEventListener('change', function () {
        const seleccion = continente.value;
        fetchData(seleccion);
    });

    function createCountryCard(pais) {
        return `
            <div class="card col-md-4">
                <img class="card-img-top" src="${pais.flags.png}" alt="Bandera">
                <div class="card-body">
                    <h5 class="card-title">${pais.name.common}</h5>
                    <p class="card-text">Capital: ${pais.capital}</p>
                </div>
            </div>
        `;
    }

    function fetchData(continente) {
        fetch(`https://restcountries.com/v3.1/region/${continente}`)
            .then(response => response.json())
            .then(data => {
                // Limpiar el contenedor antes de agregar nuevas tarjetas
                cardPais.innerHTML = '';

                // Crear y agregar tarjetas al contenedor
                data.forEach(pais => {
                    const cardHTML = createCountryCard(pais);
                    cardPais.innerHTML += cardHTML;
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});