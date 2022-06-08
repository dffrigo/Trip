require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const Trip = [
  {
    Nome: "La Rosa Nautica restaurant",
    City: "LIMA",
    Country: "PERU",
    Image: "../img/1.png",
    Descricao:
      "Peruvian cuisine it is considered one of the tastiest in the world. La Rosa Nautica restaurant stands out for its location, on a cliff in the middle of the sea.",
    },
  {
    Nome: "Plaza de Armas and El Misti volcano",
    City: "AREQUIPA",
    Country: "PERU",
    Image: "../img/2.png",
    Descricao:
      "Plaza de Armas (main square) with El Misti volcano showing in Arequipa, Peru. Two beautiful postcards, showing history and nature.",
  },
  {
    Nome: "Malecon and Rio Guayas",
    City: "GUAYAQUIL",
    Country: "ECUADOR",
    Image: "../img/3.png",
    Descricao:
      "Stretching for several miles along the Rio Guayas, this lively boardwalk features small food stands, other eateries and a blend of historic and modern buildings.",
  },
  {
    Nome: "Sky Costanera and Cordillera",
    City: "SANTIAGO",
    Country: "CHILE",
    Image: "../img/4.png",
    Descricao:
      "You might associate Santiago with towering skyscrapers, rolling vineyards and soaring mountains and you wouldn't be wrong. Santiago captivates visitors with its jaw-dropping views, neoclassical architecture and imaginative cuisine.",
  },
  {
    Nome: "Bridge over the Paraná river",
    City: "ROSARIO",
    Country: "ARGENTINA",
    Image: "../img/5.png",
    Descricao:
      "The third largest city in Argentina and the largest city in Santa Fe province. It is located at the Paraná river, known for its rich architectonic heritage and beautiful riverside scenery, and offers a vibrant cultural and night life.",
  },
  {
    Nome: "Central area and mountains",
    City: "MEDELLIN",
    Country: "COLOMBIA",
    Image: "../img/6.png",
    Descricao:
      "Colombia’s second city is undergoing a meteoric rise in reputation and popularity, with tourists flocking to the City to enjoy Medellín’s excellent climate, friendly people and wonderful tourist attractions.",
  },
  {
    Nome: "Walled town and beach",
    City: "CARTAGENA",
    Country: "COLOMBIA",
    Image: "../img/7.png",
    Descricao:
      "The city boasts an astounding number of historical attractions in addition to its famous walls. Plus, with the Caribbean Sea to the west and the Cartagena Bay to the south, this city provides a number of beaches.",
  },
  {
    Nome: "Central area and beach",
    City: "PANAMA CITY",
    Country: "PANAMA",
    Image: "../img/8.png",
    Descricao:
      "No one should ever be bored in Panama which is perpetually teeming with activity. The restored district of Casco Antiguo, the Canal Miraflores Visitor Center, where you can get a bird’s eye view of ships crossing through the Panama Canal locks, visit the island of Taboga and much more.",
  },
  {
    Nome: "Santa Monica beach and pier",
    City: "LOS ANGELES",
    Country: "EUA",
    Image: "../img/9.png",
    Descricao:
      "Close to other Los Angeles attractions, Santa Monica Beach averages 280 days of sunshine a year and offers some of the best sunsets on the West Coast. Known as a walkable and bike-friendly place, so it’s easy to get around and experience the haven of shops, spas, restaurants, attractions like the Santa Monica Pier.",
  },
  {
    Nome: "Central area Cloud Gate",
    City: "CHICAGO",
    Country: "EUA",
    Image: "../img/10.png",
    Descricao:
      "Don’t rely solely on Chicago classics, like hot dogs (no ketchup) or deep-dish pizza. Chicago’s food culture is exquisite! Chicago is a vast and exciting city, for business and pleasure: Broadway show, Michigan lake, Willis tower, museums, etc.",
  },  
];

let = message = "";

//rota de arquivos

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

//menu principal com mensagem

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 5000);
  res.render("index", { Trip, message });
});

// Database

app.get("/database", (req, res) => {
  res.render("database");
});

//Trip view

app.get("/tripview/:id", (req, res) => {
  const id = req.params.id;
  const trip = Trip[id];
  res.render("tripview", { trip, Trip });
});

app.post("/New", (req, res) => {
  const {
    Nome,
    City,
    Image,
    Country,
    Descricao,  
  } = req.body;

  const novo = {
    Nome: Nome,
    City: City, 
    Image: Image,
    Country: Country, 
    Descricao: Descricao,
  };

  Trip.push(novo);

  message = `${Nome}  =>  location was included!`;
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Server running on   ==>   http://localhost:${port}`)
);
