$(document).ready(function () {

    /*** Set Global Variables ***/
    var firstPlayerSelected = false;
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

    var database = firebase.database();

    // Listener when Name button has been clicked
    $(document).on("click", "input#select_player", function () {

        event.preventDefault();
        var name = document.getElementById("player_name").value.trim();

        if (name === "") {
            console.log("No name entered.");
        }
        else {
            selectPlayers(name);
        }
    });

    function selectPlayers(name) {
        var playerID = 0;
        if (firstPlayerSelected === false) {
            playerID = 1;
            database.ref("players/" + playerID).set({
                name: name,
                wins: wins,
                losses: losses
            });
            firstPlayerSelected = true;
        }
        else {
            playerID = 2;
            database.ref("players/" + playerID).set({
                name: name,
                wins: wins,
                losses: losses
            });
        }

        database.ref().on("value", function (snapshot) {
            console.log(snapshot.val());
        });
    }
});



// Things to consider:
// 1. Initialize database with empty attributes
// 2. Find a way to reference the items in an array
// 3. 