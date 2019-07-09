$(document).ready(function () {
    // Random number assignment between 19-120 and hook to displayed match number
    var rng = Math.floor(Math.random() * 120 + 19)
    $('#randomNumber').text(rng);


    // Assign numbers to crystal buttons and hook to displayed user score
    var gacha1 = Math.floor(Math.random() * 11 + 1)
    var gacha2 = Math.floor(Math.random() * 11 + 1)
    var gacha3 = Math.floor(Math.random() * 11 + 1)
    var gacha4 = Math.floor(Math.random() * 11 + 1)
    var userTotal= 0;

    $('#gachaOne').on('click', function () {
        userTotal = userTotal + gacha1;
        $('#score').text(userTotal);
        condition();
    })

    $('#gachaTwo').on('click', function () {
        userTotal = userTotal + gacha2;
        $('#score').text(userTotal);
        condition();
    })

    $('#gachaThree').on('click', function () {
        userTotal = userTotal + gacha3;
        $('#score').text(userTotal);
        condition();
    })

    $('#gachaFour').on('click', function () {
        userTotal = userTotal + gacha4;
        $('#score').text(userTotal);
        condition();
    });

    //win loss conditions 
    
    var wins = 0
    var losses = 0

    function condition() {

        if (userTotal === rng) {
            wins++;
            $('#wins').text(wins);
            reset();
        }


        if (userTotal > rng) {
            losses++;
            $('#losses').text(losses);
            reset();
        }


    };

        function reset() {
            rng = Math.floor(Math.random() * 120 + 19);
            $('#randomNumber').text(rng);
            gacha1 = Math.floor(Math.random() * 11 + 1);
            gacha2 = Math.floor(Math.random() * 11 + 1);
            gacha3 = Math.floor(Math.random() * 11 + 1);
            gacha4 = Math.floor(Math.random() * 11 + 1);
            userTotal = 0;
            $('#score').text(userTotal);
        }
    
    });