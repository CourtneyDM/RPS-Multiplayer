$(document).ready(function () {

    /*** Set Global Variables ***/
    var firstPlayerSelected = false;
    var losses = 0;
    var playerID = 0;
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

        var player_name = document.getElementById("player_name").value.trim();
        if (player_name === "") {
            console.log("No name entered.");
        }
        else {
            console.log(player_name);
            selectPlayers(player_name);
        }
    });

    function selectPlayers(name) {
        if (firstPlayerSelected === false) {
            playerID = 1;
            var player1 = "players/" + playerID;
            database.ref(player1).set({
                name: name,
                wins: wins,
                losses: losses
            });
            firstPlayerSelected = true;
            console.log(database.ref(player1).name);

        }
        else {
            playerID = 2;
            database.ref("players/" + playerID).set({
                name: name,
                wins: wins,
                losses: losses
            });
        }
    }
});