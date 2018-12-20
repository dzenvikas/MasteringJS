
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
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome)*100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calcTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach( function(current) {
            sum += current.value;

        });
        data.totals[type] = sum;
    }


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 // does not exsisi at this point
    };


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
        },

        deleteItem: function(type, id) {
            var IDs, index;

            IDs = data.allItems[type].map(function(current) {
                return current.id;
            });
            console.log(IDs);

            index = IDs.indexOf(id);
            console.log(index);
            if (index !== -1 ) {
                data.allItems[type].splice(index, 1);
            }

        },

        calcBudget: function() {

            // calc total income and expenses
            calcTotal('inc');
            calcTotal('exp');

            // calculate the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;

            // calc percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

        },
        calcPercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            var allPercentages = data.allItems.exp.map(function(current) {
                return current.getPercentage();
            });
            return allPercentages;
        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var nodeListForEach = function(list, callback) {    // custom forEach method
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    var formatNumber = function(num, type) {
        var sign, numSplit, int, dec;
        // abs num
        // fix num to 2 decimal places
        // 2500.00 --> 2,500.00
        // + or - sign based on type

        num = Math.abs(num); // absolute num
        num = num.toFixed(2);

        numSplit = num.split('.');
        int = numSplit[0];
        dec = numSplit[1];

        if(int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }
        type === 'exp' ? sign = '-' : sign = '+';
        
        return sign + ' ' + int + '.' + dec;    // '+' + 2,500 + .00;

    };

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either 'inc' or 'exp'
                desc: document.querySelector(DOMStrings.inputDesc).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        changeType: function() {
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDesc + ',' +
                DOMStrings.inputValue
            );

            nodeListForEach(fields, function(current) {
                current.classList.toggle('red-focus');
                document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
            });
        },
        getDOMStings: function(){
            return DOMStrings;
        },
        addListItem: function(obj, type){
            var html, newHtml, element;
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function(selectorID) {
            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
            
        },

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMStrings.inputDesc + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel); // returns a node list

            nodeListForEach(fields, function(current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayMonth: function() {
            var now, year, months, month;
            now = new Date();
            year = now.getFullYear();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();

            // display date UI
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
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
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };

    var updateBudget = function(){
        var budget;

        //calc budget
        budgetCtrl.calcBudget();

        // get budget
        budget = budgetCtrl.getBudget();

        //display the budget on the UI
        UICtrl.displayBudget(budget);

    };

    var updatePercentages = function() {
        // calculate percentage
        budgetCtrl.calcPercentages();

        // read percentage from budget controller
        var percentages = budgetCtrl.getPercentages();

        // updated UI with new percentage
        UICtrl.displayPercentages(percentages);
    };

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

            // calculate and update percentage
            updatePercentages();

        }
        
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; // tranversing

        if (itemID) {
            // item-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // delete item from data structure
            budgetCtrl.deleteItem(type, ID);

            // delete item from UI
            UICtrl.deleteListItem(itemID);

            // update and show new budget
            updateBudget();

            // calculate and update percentage
            updatePercentages();
        }
    };

    return {
        init: function(){
            console.log('Application initiated.');
            setupEventListeners();
            UICtrl.displayBudget(
                {
                    budget: 0,
                    totalInc: 0,
                    totalExp: 0,
                    percentage: -1
                }
            );
            UICtrl.displayMonth();
        }
    }

    
})(budgetController, UIController);


controller.init();









































