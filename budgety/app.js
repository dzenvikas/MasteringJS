
// UI MODULE

// DATA MODULE

// CONROLLER MODULE



/////////////////////////
// Budget controller
var budgetController = (function(){
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;

            // Create new ID
            if ( data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new Item beased on type
            if(type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            // register in data structure
            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    }

})();

/////////////////////////
// UI controller
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either 'inc' or 'exp'
                desc: document.querySelector(DOMStrings.inputDesc).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        getDOMStings: function(){
            return DOMStrings;
        },
        addListItem: function(obj, type){
            var html, newHtml, element;
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function(){
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMStrings.inputDesc + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        }
    }

})();

/////////////////////////
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

    var updateBudget = function(){
        //calc budget

        // return budget

        // display on UI
    }

    var ctrlAddItem = function(){

        var input, newItem;
        // get the filed input data
        input = UICtrl.getInput();
        // console.log(input);

        // add the item to the budget controller
        if( input.desc !== "" && !isNaN(input.value) && input.value > 0) {
            newItem = budgetCtrl.addItem(input.type, input.desc, input.value);
    
            // add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            
            // Clear fields
            UICtrl.clearFields();
    
            //calculate & update the budget
            updateBudget();
            //display the budget on the UI
        }
        
    };

    return {
        init: function(){
            console.log('Application initiated.');
            setupEventListeners();
        }
    }

    
})(budgetController, UIController);


controller.init();









































