// Global Varibles==================================
var choice;
var playernum = 2
var playercount = 1
var isready = 0
var pname = prompt("Enter Name")
var rdypress = 0;
var isplayer1;
var assigned = false;
var playerset = false;
// ======================================================

// Firebase Startup Task============================================
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
// Firebase Varibles
var database = firebase.database()
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
// =====================================================================


if (pname === null) {
    pname = 'UnknownPerson99'
}

database.ref('chatmessage').push({
    username: ' ',
    message: pname + ' has connected!'
})

// Object/picture Click==============================
$(document).on('click', '#rock', function () {
    choice = 0
    $('#winlose').html('');
    $('#fighter').html('Rock!');
    readybtn()
})

$(document).on('click', '#paper', function () {
    choice = 1;
    $('#winlose').html('');
    $('#fighter').html('Paper!');
    readybtn()

})

$(document).on('click', '#scissors', function () {
    choice = 2;
    $('#winlose').html('');
    $('#fighter').html('Scissors!');
    readybtn()

})

function readybtn() {
    $('#readybtn').html('<button id="ready">Submit Choice</button>');
}
// ========================================================

database.ref().on("value", function (snapshot) {
    var chatremove = database.ref('/chatmessage');
    chatremove.onDisconnect().remove();
    if (assigned === true) {
        var p1stuff = database.ref('/user');
        var p2stuff = database.ref('/user2');
        if (playercount === 1) {
            p1stuff.onDisconnect().remove();
        } if (playercount === 2) {
            p2stuff.onDisconnect().remove();
        }
    }
    if ((snapshot.hasChild("user/p1playercount")) && snapshot.hasChild("user2/p2playercount")) {
        var ready1 = snapshot.child('user/p1ready').val()
        var ready2 = snapshot.child('user2/p2ready').val()
        if (ready1 === 1 && ready2 === 1) {
            gamestart(snapshot);
        }
    }
})

// When you click the submit button for your choice this will put what player you are.======== 
// Then it takes this information and puts it into the DB
$(document).on('click', '#ready', function () {
    database.ref('chatmessage').push({
        username: ' ',
        message: pname + ' is ready!'
    })

    var isready = 1;
    $('#readybtn').html('')
    playerset = true;
    if (rdypress === 1) {
        isready = 1
        if (playercount === 1) {
            database.ref('/user').set({
                p1name: pname,
                p1choice: choice,
                p1ready: isready,
                p1playercount: playercount
            })
        }
        if (playercount === 2) {
            database.ref('/user2').set({
                p2name: pname,
                p2choice: choice,
                p2ready: isready,
                p2playercount: playercount
            })
        }
    }
    playernumas()
    if (rdypress === 0) {
        $('#status').html('')
        rdypress = 1
        if (isplayer1 === true) {
            database.ref('/user').set({
                p1name: pname,
                p1choice: choice,
                p1ready: isready,
                p1playercount: playercount

            })
        } if (isplayer1 === false) {
            database.ref('/user2').set({
                p2name: pname,
                p2choice: choice,
                p2ready: isready,
                p2playercount: playercount
            })
        };
    }
});
// ==========================================================================

// This function assigns which player number they will be and is called above ==============
function playernumas() {
    database.ref().on("value", function (snapshot) {
        if (playerset === true) {
            if (assigned === false) {
                if ((snapshot.hasChild("user/p1playercount")) && snapshot.hasChild("user2/p2playercount")) {
                    $('#status').html('Lobby Full. Try again later.')
                    playercount = 3;
                }
                else {
                    if (snapshot.hasChild("user/p1playercount")) {
                        playercount = 2
                        isplayer1 = false;
                        assigned = true;
                    } else {
                        playercount = 1
                        isplayer1 = true;
                        assigned = true;


                    }
                }
            }
        }
    })
}
// ===============================================================================================

// This function decides who wins and who loses====================================
function gamestart(snapshot) {
    var p1An = snapshot.child('user/p1choice').val()
    var p2An = snapshot.child('user2/p2choice').val()
    $('#fighter').text('Select Your Fighter!')
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
    // ==================================================================================

    // This will refresh your choice information==
    isready = 0
    if (playercount === 1) {
        database.ref('/user').set({
            p1name: pname,
            p1choice: choice,
            p1ready: isready,
            p1playercount: playercount
        })
    }
    if (playercount === 2) {
        database.ref('/user2').set({
            p2name: pname,
            p2choice: choice,
            p2ready: isready,
            p2playercount: playercount
        })
    }
}
// =========================================

// Chatroom ===================================================
$(document).on('click', '#chatsubmit', function () {
    database.ref('chatmessage').push({
        username: '(' + pname + ') : ',
        message: $('#chat').val()
    }
    )
    $('#chat').val('')
})
database.ref('/chatmessage').on("child_added", function (snaps) {
    var msg = snaps.val().message;
    var name = snaps.val().username;
    $('#chatroom').append('<p>' + name + msg + '</p>')
})
database.ref('/chatmessage').on("child_removed", function (snaps) {
    $('#chatroom').html('<p>User has disconnected</p>')
})
// =================================================================
