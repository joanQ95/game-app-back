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

const allGames = async (req, res) => {
  const { name } = req.query 
  const totalGames = await Game.findAll({
    where: {
      deleted: false
    }
  })
  try {
    if(name){
      let nameGame = await Game.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%` ,
          }
        }
      })
      nameGame.length ?
      res.send(nameGame) :
      res.send(`${name} not found`)
    }else{
      totalGames.length ?
      res.send(totalGames):
      res.send("There are not documents on Game Model")
    }
  } catch (error) {
    console.log(error)
  }
}

const postGame = async(req, res) => {
  const { name, description, background_image, platforms, released, rating, price, genres } = req.body
  try {
    const game = await Game.create({
        name,
        description,
        background_image,
        platforms,
        released,
        rating,
        price,
        genres
    })
    console.log(game, 'GAME')
    res.send(game)
  } catch (error) {
    console.log(error)
  }
}

const deleteGame = async(req, res) => {
  const { id } = req.params
  try {
    const deletedGame = await Game.destroy({
      where: {
        id
      }
    })
    res.send(`${deletedGame} has been deleted`)
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
    gamesApi,
    allGames,
    postGame,
    deleteGame,
}
