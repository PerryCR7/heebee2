import cappuccino from "./assets/cappuccino.jpg";
import chickenBurger from "./assets/chicken-burger.jpg";
import icedAmericano from "./assets/iced_americano.jpg";
import icedCoffee from "./assets/iced-coffee.jpg";
import tacosVeg from "./assets/veg-tacos.jpg";
import pizza from "./assets/pizza.jpg"
const data={
    "results":[
        {
            "id":"001",
            "name":"Hot Cuppucino",
            "type":"baristo",
            "foodCategory":"Hot Coffee",
            "foodType":"coffee",
            "size":"Small",
            "milk":"skimmed",
            "flavour":"vanilla",
            "price":"100",
            
            "image":require("./assets/cappuccino.jpg")
        }, {
            "id":"002",
            "name":"Chicken Burger",
            "type":"kitchen",
            "foodCategory":"Bee Bites",
            "foodType":"Non-veg",
            "price":"190",
            "image":require("./assets/chicken-burger.jpg")
        },{
            "id":"003",
            "name":"Iced Americano",
            "type":"baristo",
            "foodCategory":"Cold Coffee",
            "foodType":"coffee",
            "size":"Medium",
            "milk":"No Milk",
            "flavour":"vanilla",
            "price":"70",
            "image":require("./assets/iced_americano.jpg")
        }
        ,{
            "id":"004",
            "name":"Iced Coffee",
            "type":"baristo",
            "foodType":"coffee",
            "size":"Large",
            "milk":"No Milk",
            "flavour":"vanilla",
            "foodCategory":"Cold Coffee",
            "price":"90",
            "image":require("./assets/iced-coffee.jpg")
        },{
            "id":"005",
            "name":"Tacos Veg",
            "type":"kitchen",
            "foodType":"veg",
            "foodCategory":"Bee Bites",
            "price":"170",
            "image":require("./assets/veg-tacos.jpg")
        },{
            "id":"006",
            "name":"Farmhouse Pizza",
            "type":"kitchen",
            "foodType":"veg",
            "foodCategory":"Bee Bites",
            "price":"470",
            "image":require("./assets/pizza.jpg")
        }
    ]

}
export default data;