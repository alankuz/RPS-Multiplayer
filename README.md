# RPS-Multiplayer

This project implements the Firebase Database system to provide you with a multiplayer Rock Paper Scissors game!

## Getting Started

Simply click on one the pictures of your choice to choose the object of your choice. Then press the submit button that appears to lock in your choice. After this happens you will be given another chance to change your choice and try your luck again. 

Below the images is a chatroom that you may use to speak to the other player. This game is a 2 player game. All other players will be put into a queue until a player leaves. 

### Prerequisites

-Fingers
-Functional mouse/trackpad
-Newest browser update recommended**

### Installing

To install, and modify this program, you may press the fork button and then fork it to your computer through either gitbash, or terminal. To test the API you may press the following link:
[RPS-Multiplayer](https://alankuz.github.io/RPS-Multiplayer/)

## Deployment

You may fork the files, or use the link to add the program to your own pages.

## Built With

* [Jquery](https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js) - Script framework
* [Firebase](http://firebase.google.com) - Database API

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/alankuz/RPS-Multiplayer/tags). 

## Author

* **Alan Kuzmanovic** - *Initial work* - [alankuz](https://github.com/alankuz)

## License

No license agreements, do as you will with the program. 

## Psuedocode:

3 people to choose from:
Rock 
Paper
Scissors

click one to trigger on click attribute that starts a function in JSS, and sets your choice in a varible

Click the ready button and then it take your choice and sets your ready to on/ready. greys out the options

Once both of these have been done, it takes these two answers and sends them to the database. 

You have an automatically refreshing function that when the user's database is at the default of ready off it does not run.

Once the other side is ready and submits their choice it is checked as ready, if ready=true then it will check opponets choice and decide if you win or lose. 

Then the game will reset and you may choose your fighter for round 2 