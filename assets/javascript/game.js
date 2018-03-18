
/*** Set Global Variables ***/
var losses = 0;
var wins = 0;
var playerID = 1;
var player;
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

/********************** Begin Checking for Connection State ****************************/

// All players will be stored in this directory
var connectionsRef = database.ref("players/" + playerID);

// Reference for when a client's connection state changes
var connectedRef = database.ref(".info/connected");

document.getElementById("submitBtn").addEventListener("click", function () {
    var name = document.getElementById("player").value.trim();
    player = {
        name: name,
        wins: wins,
        losses: losses
    };
});


// Things to consider:
// 1. Keep database events separate from logic code
// 2. Keep connection to database separate from logic code
// 3. Find a way to create a waiting room
// 4. Use the connections events to process chat functionality
// 5. $(document).ready function - what is the benefits and best way to use