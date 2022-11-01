const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
	const info1  = await axios.get(
		"https://api.rawg.io/api/games?key=8f18e9d52c1a4529b8ffba93f32936dd&page_size=40"
	  )
  //console.log(info1.data.results); 
  res.send(info1.data.results);
});

module.exports = router;
