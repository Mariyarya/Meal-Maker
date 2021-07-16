//1. Start by creating an empty menu object.
const menu = {
    //2. Add a _courses property to your menu object and set its value to an empty object.
    _courses: {
        //3. Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.
        _appetizers: [],
        _mains: [],
        _desserts: [],

        //4. Create getter and setter methods for the appetizers, mains, and desserts properties.
        //Setter

        set appetizers(appetizers) {
            this._appetizers.push(appetizers);
        },
        set mains(main) {
            this._mains.push(main);
        },
        set desserts(dessert) {
            this._desserts.push(dessert);
        },

        // Getters

        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        }
    },

    //5. Inside your menu object, create an empty getter method for the _courses property

    get courses() {
        //6. Inside the courses getter method, return an object that contains key/value 
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    //7. create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu. The method should take in three parameters: the courseName, the dishName , and the dishPrice.
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        // 8. The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters. The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
        this._courses[courseName].push(dish);
    },
    //9. Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal. Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]; // 10.1 Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
        const randomIndex = Math.floor(Math.random() * dishes.length);  //10.2 Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array). Round that generated number to a whole number by using Math.floor() on the result.

        return dishes[randomIndex];  //10.4 Return the dish located at that index in dishes.
    },

    //11 create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers'); //11.1 The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
        const main = this.getRandomDishFromCourse('mains'); //2
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is $${totalPrice}.` ////Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.
    }
};
//12. let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).

menu.addDishToCourse('appetizers', 'Cezar', 10.00);
menu.addDishToCourse('appetizers', 'olivie', 11.00);
menu.addDishToCourse('appetizers', 'iulius', 9.00);

menu.addDishToCourse('mains', 'Steak', 35.00);
menu.addDishToCourse('mains', 'kebab', 20.00);
menu.addDishToCourse('mains', 'pirjoale', 100.00);

menu.addDishToCourse('desserts', 'inghetata', 3.20);
menu.addDishToCourse('desserts', 'ciocolata alba', 4.00);
menu.addDishToCourse('desserts', 'Shake', 5.50);

//13 generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.
let meal = menu.generateRandomMeal();
console.log(meal);