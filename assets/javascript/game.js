var choice;
var playernum = 2
var playercount = 1
var isready = 0
var pname = prompt("Enter Name")
var rdypress = 0
var isplayer1 = true;
var assigned= false;


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
    console.log(snapshot.child('user/p1choice').val())
    if (assigned === false) {
        if (snapshot.hasChild("user/p1playercount")) {
            playercount = 2
            isplayer1 = false;
            console.log('assigned player2--' + playercount)
            assigned=true;
        } else {
            playercount = 1
            console.log('assigned player1---' + playercount)
            isplayer1 = true;
            assigned=true;
        }
    }

    if ((snapshot.hasChild("user/p1playercount")) && snapshot.hasChild("user2/p2playercount")) {
        gamestart(snapshot);
    }

})
$(document).on('click', '#ready', function () {

    var isready = 1;
    if (rdypress === 0) {
        if (isplayer1 === true) {
            database.ref('/user').set({
                p1name: pname,
                p1choice: choice,
                p1ready: isready,
                p1playercount: playercount

            })
            $('#status').html('<h1>Welcome ' + pname + ' You are player 1!')
        } else {
            database.ref('/user2').set({
                p2name: pname,
                p2choice: choice,
                p2ready: isready,
                p2playercount: playercount
            })
            $('#status').html('<h1>Welcome ' + pname + ' You are player 2!')
        };
        rdypress = 1
    }

    // add a statement that checks if there is a nunber then add 
});
function gamestart(snapshot) {
    var p1An = snapshot.child('user/p1choice').val()
    var p2An = snapshot.child('user2/p2choice').val()
    console.log(p1An);
    console.log(p2An);
    if (isplayer1 === true) {
        if (p1An === 0) {
            if (p2An === 0) {
                $('#winlose').html('<h1>Tie!</h1>')
            }
            if (p2An === 1) {
                $('#winlose').html('<h1>You Lose!</h1>')
            }
            if (p2An === 2) {
                $('#winlose').html('<h1>You Win!</h1>')
            }
        }
        if (p1An === 1) {
            if (p2An === 0) {
                $('#winlose').html('<h1>You Win!</h1>')
            }
            if (p2An === 1) {
                $('#winlose').html('<h1>Tie!</h1>')
            }
            if (p2An === 2) {
                $('#winlose').html('<h1>You Lose!</h1>')
            }
        }
        if (p1An === 2) {
            if (p2An === 0) {
                $('#winlose').html('<h1>You Lose!</h1>')
            }
            if (p2An === 1) {
                $('#winlose').html('<h1>You Win!</h1>')
            }
            if (p2An === 2) {
                $('#winlose').html('<h1>Tie!</h1>')
            }
        }
    }
    if (isplayer1 === false) {
        if (p2An === 0) {
            if (p1An === 0) {
                $('#winlose').html('<h1>Tie!</h1>')
            }
            if (p1An === 1) {
                $('#winlose').html('<h1>You Lose!</h1>')
            }
            if (p1An === 2) {
                $('#winlose').html('<h1>You Win!</h1>')
            }
        }
        if (p2An === 1) {
            if (p1An === 0) {
                $('#winlose').html('<h1>You Win!</h1>')
            }
            if (p1An === 1) {
                $('#winlose').html('<h1>Tie!</h1>')
            }
            if (p1An === 2) {
                $('#winlose').html('<h1>You Lose!</h1>')
            }
        }
        if (p2An === 2) {
            if (p1An === 0) {
                $('#winlose').html('<h1>You Lose!</h1>')
            }
            if (p1An === 1) {
                $('#winlose').html('<h1>You Win!</h1>')
            }
            if (p1An === 2) {
                $('#winlose').html('<h1>Tie!</h1>')
            }
        }
    }
}