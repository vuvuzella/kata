/*
 * Roman Numeral Kata
 *
 * Limitation: This kata can only convert numbers 1 to 10 only..
 * will add more roman numerals in the future
 *
 */

/* Create a text box and button */
/* IE Specific!!! */
// window.attachEvent('onload', function() {
//     var obj_kata_view = new kata_view();
//     obj_kata_view.initialize();
// });

/* Global variables */
var obj_kata_view;
var obj_kata_model;

/* firefox on load event */
window.onload = function() {
    obj_kata_view = new kata_view();
    obj_kata_model = new kata_model();
    obj_kata_view.initialize();
    
};

/* View */
var kata_view = function() {

    this.initialize = function () {
        var div_textbox = document.getElementById("textbox");
        /* Add a new textbox */
        var elementInputTextbox = obj_kata_view.createInputText("input_text");
        div_textbox.appendChild(elementInputTextbox);

        /* Add new button */
        var div_button = document.getElementById("button");
        /* Create a new button input node */
        var elementButton = obj_kata_view.createButton("input_button");
        elementButton.value = "Calculate";
        div_button.appendChild(elementButton);

        /* Add An output text */
        var div_output = document.getElementById("div_output");
        // var elementText = obj_kata_view.createText("out_text", "Sample Output");
        div_output.appendChild(elementText);

    };

    /* Helper Functions in creating the DOM */
    this.createInputText = function(str_id) {
        var element = document.createElement("input");
        element.id = str_id;
        element.type = "text";
        //@ element.onkeypress = function() { alert(); };
        return element;
    };

    this.createButton = function(str_id) {
        var element = document.createElement("input");
        var dom_inputText = document.getElementById("input_text");
        element.id = str_id;
        element.type = "button";
        element.onclick = function() { obj_kata_model.convertToRoman(parseInt(dom_inputText.value)); };
        return element;
    };

    this.createText = function(str_id, str_value) {
        var element = document.createTextNode(str_value);
        element.id = str_id;
        return element;
    };

    this.createText2 = function(str_text) {
        var element = document.createElement("p");

    }
};

/* Model for this kata */
var kata_model = function() {
    var obj_romanNumerals = {
        10  : "X",
        5   : "V",
        1   : "I"
    };
    var arr_arabicNumerals = [10,5,1];
    var that = this;
    
    this.getDifference = function(int_Number, int_arabicNum) {
        var difference = 0;
        if (int_Number > 0) {
            difference = int_Number - int_arabicNum;
        }
        return difference;
    };

    /* 
     * What I really wanted to express is that
     * if input number 'A' minus the largest roman numeral value 'B' is
     * less than -1 (-2 or -3 etc..) then, I move to the next value of roman 
     * numerals that is second largest to 'B'..
     *
     * else, if the difference is exactly -1, I will return "I" concatenated to the roman 
     * numeral to which that made the difference equal to -1 (i.e. A = 9, A-B = 9-10 = -1... I will push I first, 
     * then the roman numeral for 10, which resulted in a -1 difference) and exit.
     *
     * else if the difference is equal or greater than 0, I will push (to a local string array....) the 
     * roman numeral equivalent which made the difference greater than or equal
     * to zero, and assign the positive difference to 'A'
     *
     * then repeat until 'A' is equal to zero
     *
     */
    this.convertToRoman = function(int_Number, int_arabic) {
        var difference = 0;
        var int_localNum = int_Number;
        var arr_convRomanNumeral = [];
            
        for (var i = 0; int_localNum != 0;) {
            difference = obj_kata_model.getDifference(int_localNum, arr_arabicNumerals[i]);
            if (difference == -1) {
                arr_convRomanNumeral.push(obj_romanNumerals[1]);
                arr_convRomanNumeral.push(obj_romanNumerals[arr_arabicNumerals[i]]);
                break;
            } else if (difference >= 0) {
                arr_convRomanNumeral.push(obj_romanNumerals[arr_arabicNumerals[i]]);
                int_localNum = difference;
            } else {
                i++;
                continue;
            }
        }
        return arr_convRomanNumeral.join("");
    };
};

// TODO: Implement registration and notification for this
/* Controller for kata */
var kata_controller = function() {
    var arr_subscriber = [];
    var arr_publisher = [];

    this.registerSubscriber = function(str_id) {
    };

    this.register_publisher = function(str_id) {
    };

    this.notify = function(str_member) {
    };

    this.notifyOutputText = function(str_output) {
        
    };
};
