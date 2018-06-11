'use strict'


var MedicineSmartContract = function() {
    
};


MedicineSmartContract.prototype = {
    init: function() {
	
    },
    addMedicine: function(serialNumber, title, manufacturer, description, price) {
	LocalContractStorage.set(serialNumber, {title:title, manufacturer:manufacturer, description:description, price:price});	
    },
    getMedicine: function(serialNumber) {
	var result = LocalContractStorage.get(serialNumber);
	if(!result) {
	    return "Your medicaments was not found.";
	}
	return result; 
    },
    deleteMedicine: function(serialNumber) {
	var result = LocalContractStorage.del(serialNumber);
	return result;
    }
};

module.exports = MedicineSmartContract;




