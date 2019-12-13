const app = require("express")()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY)

app.use(require("body-parser").text());
app.use(cors())

app.get('/charge', function (req, res) {
  console.log("Hello World")
})

app.post('/charge', async (req, res) => {
  console.log("yay?", process.env.REACT_APP_SECRET_KEY, req.body)
  let bodyStuff = req.body.split('&')
  let token = bodyStuff[0]
  let amount = (parseInt(bodyStuff[1]) * 100).toString()
  try {
    let {status} = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "An example charge",
      source: token
    })
    res.json({status});
  }
  catch (err) {
    console.log("ERROR: ", err);
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"))
