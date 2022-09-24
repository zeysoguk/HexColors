function colorChange() {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hexCode = '';
    for (var i = 0; i < 6; i++) {
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        hexCode += hex_numbers[random_index];
        document.getElementById("hexCode").innerHTML = hexCode;
        document.body.style.backgroundColor = "#" + hexCode;
    }
}