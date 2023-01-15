const URL = 'https://cheeseapp-api-55ex.onrender.com'

export const cheesesLoader = async () => {
    const response = await fetch(URL + '/cheese')
    const cheeses = await response.json()
    return cheeses
}

export const quesoLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id )
    const queso = await response.json()
    return queso
}