export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=jW77T1LO9pFzlMU3WSYlbYpq8Fk1Qq3f`
  const response = await fetch(url)
  const { data } = await response.json()

  return data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
}