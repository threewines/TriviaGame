// initialize the .js document with this. It contains all of the code for the .js file:
$( document ).ready(function() {

    // this game object holds all of the questions, possible answers, and then the index of the correct answer for each
        var game = {
            questions: [
            {
                question: 'What Texas city makes the best Tacos?',
                possibles: ['Austin', 'El Paso', 'San Antonio', 'Houston', 'Del Rio'],
                id: 'question-one',
                answer: 2
            }, {
                question: 'What is the food capital of the United States?',
                possibles: ['New York', 'Denver', 'Austin', 'Seattle', 'San Francisco'],
                id: 'question-two',
                answer: 4
            }, {
                question: 'what city has the most restaurants per capita?',
                possibles: ['San Diego', 'Boerne', 'New Orleans', 'Addison', 'Los Angeles'],
                id: 'question-three',
                answer: 4
            }, {
                question: 'Which soft drink originated in North Carolina?',
                possibles: ['Pepsi Cola', 'Dr. Pepper', 'Big Red', 'Sprite', 'Coca Cola'],
                id: 'question-four',
                answer: 0
            }, {
                question: 'What delicious thing is illegal to sell in Newark after 6pm without a doctors note?',
                possibles: ['Pizza', 'Cake', 'Ice Cream', 'Sushi', 'Smoothies'],
                id: 'question-five',
                answer: 2
            }, {
                question: 'Name the most ordered food in America?',
                possibles: ['Hamburger', 'Fish', 'Hot Dog', 'Monkey Brains', 'Fried Chicken'],
                id: 'question-six',
                answer: 4
            }, {
                question: 'What is the American alternative to French Fries?',
                possibles: ['Potato Chips', 'Tater Tots', 'Baked Potato', 'Hash Browns', 'Onion Rings'],
                id: 'question-seven',
                answer: 1
            }, {
                question: 'Name the state-prepared food of Georgia?',
                possibles: ['Grits', 'Hash', 'Fried Rice', 'Squirrel on a stick', 'Mush'],
                id: 'question-eight',
                answer: 0
            }, {
                question: 'In Tennessee, what food item was firstly made at the Chattanooga Bakery?',
                possibles: ['Empanadas', 'Fried Apple Pies', 'Bear Claws', 'Moon Pies', 'Twinkies'],
                id: 'question-nine',
                answer: 4
            }, {
                question: 'What stew originated in Louisiana?',
                possibles: ['Etouffee', 'Gumbo', 'Clam Chowder', 'Jambalaya', 'Posole'],
                id: 'question-ten',
                answer: 1
            }, 
            ]}
