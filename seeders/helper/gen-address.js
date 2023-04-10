const streetNames = [
  'Bogyoke Rd',
  'Anawrahta Rd',
  'Sule Pagoda Rd',
  'Strand Rd',
  'Mahabandoola Rd',
  'Merchant Rd',
  'Pansodan Rd',
  'Maha Bandula Garden St',
  'U Wisara Rd',
  'Bo Aung Kyaw Rd',
]
const townships = [
  'Bahan',
  'Hlaing',
  'Kamayut',
  'Kyauktada',
  'Lanmadaw',
  'Latha',
  'Mayangone',
  'Pabedan',
  'Sanchaung',
  'Yankin',
]
const cities = [
  'Yangon',
  'Mandalay',
  'Naypyidaw',
  'Mawlamyine',
  'Bago',
  'Pathein',
  'Monywa',
  'Sittwe',
  'Meiktila',
  'Myitkyina',
]
const postalCodes = ['11101', '22102', '33103', '44104', '55105', '66106', '77107', '88108', '99109', '10110']

function generateMyanmarAddress() {
  const randomStreetIndex = Math.floor(Math.random() * streetNames.length)
  const randomTownshipIndex = Math.floor(Math.random() * townships.length)
  const randomCityIndex = Math.floor(Math.random() * cities.length)
  const randomPostalCodeIndex = Math.floor(Math.random() * postalCodes.length)
  const streetName = streetNames[randomStreetIndex]
  const township = townships[randomTownshipIndex]
  const city = cities[randomCityIndex]
  const postalCode = postalCodes[randomPostalCodeIndex]
  return `${streetName}, ${township}, ${city} ${postalCode}, Myanmar`
}

module.exports = generateMyanmarAddress
