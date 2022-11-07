const { Game } = require("../db");
const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env

const gamesApi = async(req, res) => {
  const games1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)
  const games2 = await axios.get(games1.data.next)
  const games3 = await axios.get(games2.data.next)
  const games4 = await axios.get(games3.data.next)
  const games5 = await axios.get(games4.data.next)

  const totalGames = games1.data.results.concat(games2.data.results).concat(games3.data.results).concat(games4.data.results).concat(games5.data.results)

  totalGames.forEach((g) => {
    Game.create({
      idAPI: g.id,
      name: g.name,
      background_image: g.background_image,
      platforms: g.platforms.map((p) => p.platform.name),
      released: g.released,
      rating: g.rating,
      price: Math.floor(Math.random() * (100 - 5) + 5),
      genres: g.genres.map((p) => p.name),
    });
})

res.status(200).json({ msg: "Games added succesfully" });
}

module.exports = {
    gamesApi,
}
