const express = require('express')

const burgerRouter = express.Router()

let hamburgers = [
    {
        "id": 8,
        "name": "Vegetarian Burger",
        "restaurant": "Indian Burgers",
        "web": "https://www.cookwithmanali.com/vegetarian-burger-indian-style/",
        "description": "With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!",
        "ingredients": [
            "american cheese",
            "burger sauce",
            "french mustard",
            "pickes",
            "onion",
            "Veggies"
        ]
    },
    {
        "id": 9,
        "name": "Fat Santa",
        "restaurant": "Sky City Hamilton",
        "web": "https://skycityhamilton.co.nz/eat-drink/eat-burger/",
        "description": "A Christmas themed burger",
        "ingredients": [
            "chicken thigh",
            "champagne ham",
            "sage and onion stuffing",
            "gravy mash",
            "lettuce",
            "tomato",
            "cranberry sauce"
        ]
    },
    {
        "id": 10,
        "name": "Blondie",
        "restaurant": "Yankys",
        "web": "http://yankyslambton.co.za/menu/",
        "description": "Delicious steak burger",
        "ingredients": [
            "steak",
            "BBQ sauce",
            "bacon",
            "egg",
            "cheese",
            "lettuce",
            "tomato",
            "onion",
            "gerkins"
        ]
    },
    {
        "id": 11,
        "name": "Monster Burger",
        "restaurant": "Yankys",
        "web": "http://yankyslambton.co.za/menu/",
        "description": "Massive meaty burger - the size of a dinner plate",
        "ingredients": [
            "250g patty",
            "bacon",
            "cheese",
            "2 eggs",
            "steak",
            "BBQ sauce",
            "lettuce",
            "tomato",
            "onion",
            "gerkins"
        ]
    }
]

burgerRouter.get("/", (req, res) => {
    res.json(hamburgers)
})

burgerRouter.post("/", (req, res) => {
    hamburgers.push(req.body)
    res.json(req.body)
})

burgerRouter.put('hamburgers/:id', (req, res) => {
    let id = Number(req.params.id)
    const hamburger = hamburgers.find(hamburger => hamburger.id === parseInt(req.params.id))
    if (!hamburger) res.status(404).send("The hamburger with the given Id has not been found")

    if (hamburger) {
        const updatedBurger = req.body
        hamburgers.map(hamburger => {
            if (hamburger.id === id) {
                return { ...hamburger, ...updatedBurger }
            }
            else {
                return brewery
            }
        })
    }
})

module.exports = burgerRouter