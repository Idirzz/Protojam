// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

const quotes = [
  {
    id: 1,
    quote:
      "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera. Bouddha",
    picture: "meme_1.jpg",
    action: "tenir la porte à une personne pressée",
  },
  {
    id: 2,
    quote: "Avec trop on se perd. Avec moins on se trouve. Tchouang Tseu",
    picture: "meme_2.jpg",
    action: "rendre visite à une personne seule",
  },
  {
    id: 3,
    quote:
      "La vie ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie. Sénèque",
    picture: "meme_3.jpg",
    action: "sourire à un itinérant",
  },
  {
    id: 4,
    quote:
      "Au milieu de toute difficulté se trouve cachée une opportunité. Albert Einstein",
    picture: "meme_4.jpg",
    action: "laisser passer quelqu'un dans la file des courses",
  },
];

// Get the port from the environment variables
const port = process.env.APP_PORT;

app.get("/quotes", (req, res) => {
  res.json({ quotes });
});

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
