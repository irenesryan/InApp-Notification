const { Novu } = require("@novu/node");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const nouv = new Novu(process.env.REACT_APP_NOVU_API);

app.use(cors());
app.use(express.json({ extended: false }));
app.post("/", async (req, res) => {
  try {
    const { status } = await nouv.trigger("bell-notification", {
      to: {
        subscriberId: req.body.subscriberId
      },
      payload: {}
    });
    res.send(status);
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
