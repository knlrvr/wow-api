const URL = "https://owen-wilson-wow-api.onrender.com/wows/random"

const getWow = async () => {
  let wow = await fetch(URL)
  let wowJson = await wow.json()
  displayWow(wowJson)
}

const displayWow = (wowJson) => {
  const details = document.querySelector(".details")
  const poster = document.querySelector("#poster")
  const sound = document.querySelector('#sound')
  const video = document.querySelector('#video')
  details.style.display= "flex"
  sound.src = wowJson[0].audio
  poster.src = wowJson[0].poster
  video.src = wowJson[0].video["720p"]
  
}