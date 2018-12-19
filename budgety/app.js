
// UI MODULE

// DATA MODULE

// CONROLLER MODULE




// Budget controller
var budgetController = (function(){
    
    // some code

})();


// UI controller
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either 'inc' or 'exp'
                desc: document.querySelector(DOMStrings.inputDesc).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },
        getDOMStings: function(){
            return DOMStrings
        },
    }

})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){

        // get the filed input data
        var input = UIController.getInput();
        console.log(input);

        // add the item to the budget controller

        // add the item to the UI

        //calculate the budget

        //display the budget on the UI
        console.log('It works!');
    };

    return {
        init: function(){
            console.log('Application initiated.');
            setupEventListeners();
        }
    }

    
})(budgetController, UIController);


controller.init();









































