const express = require('express')

const ordersRouter = express.Router()

orders = [
    {
        order_id: 1,
        items: [
            { hamburger_id: 1, quantity: 2 },
            { hamburger_id: 3, quantity: 1 },
        ],
        status: "pending",
        created_at: 1627020599070
    },
    {
        order_id: 2,
        items: [
            { hamburger_id: 5, quantity: 3 },
            { hamburger_id: 2, quantity: 1 },
        ],
        status: "served",
        created_at: 1627020599070
    }
]