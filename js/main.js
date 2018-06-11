
// NOTE(dan): txHash: a9c0c966521937a64367721b43155676433ac76578e4ea884b6cbbd18e092e56.



var contractAddress = "n1oEdq2cV3oE6W42RRDmmvv47BPXKAfcPWh";



var NebPay = require("nebpay");
var nebPay = new NebPay();



function verifyMedicin() {
    event.preventDefault();
    nebPay.simulateCall(contractAddress, 0, "getMedicine", JSON.stringify([$("#serial-number").val()]), {
	callback: NebPay.config.testnetUrl,
	listener: onGetMedicine,
    });
}

function clearOutput(){
    $('#name').text("");
    $('#manuf').text("");
    $('#discr').text("");
    $('#price').text("");
}

function onGetMedicine(resp) {
    console.log(resp);
    var response = JSON.parse(resp.result);
    if (response == "Your medicaments was not found.") {
        clearOutput();
        $('#name').text(response);
    }
    if(response !== "Your medicaments was not found.") {
        clearOutput();
        $('#name').text("Title: "+response.title);
        $('#manuf').text("Manufacturer: "+response.manufacturer);
        $('#discr').text("Description: "+response.description);
        $('#price').text("Price: "+response.price);
    }
    $(".result-interface").addClass('visible');
}







$('.wrapper-buttons-menu a').click(function(event) {
    event.preventDefault();
    var selector = this.id;
    $(".tab").removeClass('visible');
    $("."+selector+"").addClass('visible');
});




