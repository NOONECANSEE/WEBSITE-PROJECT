// FIRST ITEM
$(function () {
    $(".bt1").click(function() {
        $("#M1").html("MRP:5");
      
    })
})
 $(function () {
    $(".bt2").click(function() {
        $("#M1").html("MRP:10");
        
    })
})
 $(function () {
    $(".bt3").click(function() {
        $("#M1").html("MRP:20");
    })
})

// SECOND ITEM
 $(function () {
    $(".bt4").click(function() {
        $("#M2").html("MRP:5");
    })
})
 $(function () {
    $(".bt5").click(function() {
        $("#M2").html("MRP:10");
    })
})
 $(function () {
    $(".bt6").click(function() {
        $("#M2").html("MRP:20");
    })
})

// THIRD ITEM
 $(function () {
    $(".bt7").click(function() {
        $("#M3").html("MRP:5");
    })
})
 $(function () {
    $(".bt8").click(function() {
        $("#M3").html("MRP:10");
    })
})


// FOURTH ITEM
 $(function () {
    $(".bt9").click(function() {
        $("#M4").html("MRP:5");
    })
})
 $(function () {
    $(".bt10").click(function() {
        $("#M4").html("MRP:10");
    })
})
 $(function () {
    $(".bt11").click(function() {
        $("#M4").html("MRP:20");
    })
})

// FIFTH ITEM
$(function () {
    $(".bt12").click(function() {
        $("#M5").html("MRP:5");
    })
})
 $(function () {
    $(".bt13").click(function() {
        $("#M5").html("MRP:10");
    })
})
 $(function () {
    $(".bt14").click(function() {
        $("#M5").html("MRP: 20");
    })
})

// SIXTH ITEM
$(function () {
    $(".bt15").click(function() {
        $("#M6").html("MRP:5");
    })
})
 $(function () {
    $(".bt16").click(function() {
        $("#M6").html("MRP:15");
    })
})

// SEVENTH ITEM
 $(function () {
    $(".bt17").click(function() {
        $("#M7").html("MRP:10");
    })
})
$(function () {
    $(".bt18").click(function() {
        $("#M7").html("MRP:20");
    })
})
 $(function () {
    $(".bt19").click(function() {
        $("#M7").html("MRP:30");
    })
})


// 8th item
$(function () {
    $(".bt20").click(function() {
        $("#M8").html("MRP:5");
    })
})
$(function () {
    $(".bt21").click(function() {
        $("#M8").html("MRP:10");
    })
})
 $(function () {
    $(".bt22").click(function() {
        $("#M8").html("MRP:30");
    })
})

// increment decrement 


function incrementValue1()
{
    var value = parseInt(document.getElementById('number1').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number1').value = value;
    }
}
function decrementValue1()
{
    var value = parseInt(document.getElementById('number1').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number1').value = value;
    }

}
function incrementValue2()
{
    var value = parseInt(document.getElementById('number2').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number2').value = value;
    }
}
function decrementValue2()
{
    var value = parseInt(document.getElementById('number2').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number2').value = value;
    }

}
function incrementValue3()
{
    var value = parseInt(document.getElementById('number3').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number3').value = value;
    }
}
function decrementValue3()
{
    var value = parseInt(document.getElementById('number3').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number3').value = value;
    }

}
function incrementValue4()
{
    var value = parseInt(document.getElementById('number4').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number4').value = value;
    }
}
function decrementValue4()
{
    var value = parseInt(document.getElementById('number4').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number4').value = value;
    }

}
function incrementValue5()
{
    var value = parseInt(document.getElementById('number5').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number5').value = value;
    }
}
function decrementValue5()
{
    var value = parseInt(document.getElementById('number5').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number5').value = value;
    }

}
function incrementValue6()
{
    var value = parseInt(document.getElementById('number6').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number6').value = value;
    }
}
function decrementValue6()
{
    var value = parseInt(document.getElementById('number6').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number6').value = value;
    }

}
function incrementValue7()
{
    var value = parseInt(document.getElementById('number7').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number7').value = value;
    }
}
function decrementValue7()
{
    var value = parseInt(document.getElementById('number7').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number7').value = value;
    }

}
function incrementValue8()
{
    var value = parseInt(document.getElementById('number8').value);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
            document.getElementById('number8').value = value;
    }
}
function decrementValue8()
{
    var value = parseInt(document.getElementById('number8').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number8').value = value;
    }

}

