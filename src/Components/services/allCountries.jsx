export async function getAllCountries() {
    const BASE_URL = "https://restcountries.com/v3.1"
    const ALL = "/all"
    const FIELDS = "name,flags,population,region,subregion,capital,latlng";
    const response = await fetch(
        `${BASE_URL}${ALL}?fields=${FIELDS}`
    )
    console.log(`${BASE_URL}${ALL}?fields=${FIELDS}`)
    if (!response.ok) {
        throw new Error('Erro na requisição');

    }
    console.log(response.json)
    return response.json();
}