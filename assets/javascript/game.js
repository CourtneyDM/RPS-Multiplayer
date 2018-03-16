$(document).ready(function () {

    /*** Set Global Variables ***/
    var firstPlayerSelected = false;
    var playerID = 0;
    var losses = 0;
    var wins = 0;

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCCfkZ7LRh2HASpKKmYtKqZVSDdmMB8AGw",
        authDomain: "rps-multiplayer-41636.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-41636.firebaseio.com",
        projectId: "rps-multiplayer-41636",
        storageBucket: "",
        messagingSenderId: "455751164226"
    };
    firebase.initializeApp(config);

    // Reference to database
    var database = firebase.database();

    // All players will be stored in this directory
    var playersRef = database.ref("players/");

    // Reference for when a client's connection state changes
    var connectedRef = database.ref(".info/connected");

    /********************** Begin Checking for Connection State ****************************/
    // When the client's connection state changes...
    connectedRef.on("value", function (connected) {

        // If they are connected..
        if (connected.val()) {
            console.log(connected.val());

            // Add user to the connections list.
            var con = playersRef.push(true);

            // create a variable and assign it to a function that will add a user to the database

            // Remove user from the connection list when they disconnect.
            con.onDisconnect().remove();
        }
    });

    // When first loaded or when the connections list changes...
    playersRef.on("value", function (snap) {

        // Display the viewer count in the html.
        // The number of online users is the number of children in the connections list.
        $("#player_one").text(snap.numChildren());
    });

    /********************** Done Checking for Connection State ************************/



    // document.getElementById("select_player").addEventListener("click", function () {


    //     var name = document.getElementById("player_name").value.trim();
    //     console.log(name);
    //     var player = [playerID, {
    //         name: name,
    //         wins: wins,
    //         losses: losses
    //     }];
    //     // playersRef.push(player);
    //     database.ref("players/").push(player);
    // });
});



// Things to consider:
// 1. Keep database events separate from logic code
// 2. Keep connection to database separate from logic code
// 3. Find a way to create a waiting room
// 4. Use the connections events to process chat functionality
// 5. $(document).ready function - what is the benefits and best way to use