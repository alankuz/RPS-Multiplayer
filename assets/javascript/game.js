var choice;
var playernum = 2
var playercount=1
var isready = 0
var pname = prompt("Enter Name")
var rdypress = 0
var isplayer1=false;


var firebaseConfig = {
    apiKey: "AIzaSyByZGLOvUAgATEINt5L0QzJ_Ogo-L76XBk",
    authDomain: "rpsmultiplayer-5ca7a.firebaseapp.com",
    databaseURL: "https://rpsmultiplayer-5ca7a.firebaseio.com",
    projectId: "rpsmultiplayer-5ca7a",
    storageBucket: "",
    messagingSenderId: "653592445570",
    appId: "1:653592445570:web:b8d2e139b57a6cfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()


$(document).on('click', '#rock', function () {

    choice = 0
    console.log(choice)
    console.log(playercount)
    readybtn()
})
$(document).on('click', '#paper', function () {

    choice = 1
    console.log(choice)
    readybtn()

})
$(document).on('click', '#scissors', function () {

    choice = 2
    console.log(choice)
    readybtn()

})
function readybtn() {
    $('#readybtn').html('<button id="ready">Submit Choice</button>');
    // todo grey out the other buttons so you cant change your choice. make sure to add a way out on reset. 
}
database.ref().on("value", function (snapshot) {
if (isplayer1===false) {
    if(snapshot.val().playercount==null) {
        playercount=1
        isplayer1=true;
        console.log('player1' + playercount)
        $('#status').html('<h1>Welcome '+ pname + ' You are player 1!')
    }else {
        playercount=2
        console.log('player2' + playercount)
        $('#status').html('<h1>Welcome '+ pname + ' You are player 2!')
    }}
})
$(document).on('click', '#ready', function () {

    var isready = 1;
    if (rdypress === 0) {
        database.ref().push({
            pname: pname,
            p1choice: choice,
            p1ready: isready,
            playercount: playercount

        });
    rdypress=1
    }

    // add a statement that checks if there is a nunber then add 
});

