$(document).ready(function() {

    $('.load_estimator').click(function() {
        clearfields();
        $("#error-handler").html('').removeClass();
        step1();
    });


    /*------------------------------------------------------------------*/
    /*  ACCEPT ONLY NUMERIC ON FIELDS
    /*------------------------------------------------------------------*/
    $("#phone,#budget_from,#budget_to").bind('keyup blur',function () {
        this.value = this.value.replace(/[^0-9.]/g,'')

    });

});


function clearfields() {

    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
        if (elements[ii].type == "text" || elements[ii].type == "password") {
            elements[ii].value = "";
        }
    }

    $('input[name="aluminum_door"]').prop('checked', false);
    $('input[name="cast_aluminum_door"]').prop('checked', false);
    $('input[name="stainless_steel_door"]').prop('checked', false);
    $('input[name="fly_screen"]').prop('checked', false);
    $('input[name="design_style"]').prop('checked', false);
}

function step1() {
    $("#step1").show();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#finalstep").hide();



    // validation to proceed
    $('.proceed_step2').click(function () {

        if ($('input:radio[name="aluminum_door"]').is(':checked') || $('input:radio[name="cast_aluminum_door"]').is(':checked') || $('input:radio[name="stainless_steel_door"]').is(':checked') || $('input:radio[name="fly_screen"]').is(':checked')) {
            $("#error-handler").html('').removeClass();
            step2();
        }else{
             $("#error-handler").html('Please Select Quantity').addClass('alert alert-danger');
        }
    });
}

function step2() {
    
    $("#step1").hide();
    $("#step2").show();
    $("#step3").hide();
    $("#step4").hide();
    $("#finalstep").hide();
    
    // validation to proceed
    $('.proceed_step3').click(function () {

        if ($('input:radio[name="design_style"]').is(':checked')) {
            $("#error-handler").html('').removeClass();
            step3();
        }else{
             $("#error-handler").html('Please Select a Design Style').addClass('alert alert-danger');
        }
    });
}


function step3() {

    $("#step1").hide();
    $("#step2").hide();
    $("#step3").show();
    $("#step4").hide();
    $("#finalstep").hide();

    // validation to proceed
    $('.calculate').click(function () {

        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ( $("#name").val().length == 0 ){
            $("#error-handler").html('Please enter Full Name').addClass('alert alert-danger');
        }else if ( $("#email").val().length == 0 ){
            $("#error-handler").html('Please enter Email').addClass('alert alert-danger');

        }else if (!filter.test(email.value)) {
            $("#error-handler").html('Please enter a valid Email').addClass('alert alert-danger');
        }else if ( $("#phone").val().length == 0 ){
            $("#error-handler").html('Please enter phone number').addClass('alert alert-danger');
        }else{
            finalstep();
            $("#error-handler").html('').removeClass();
        }
    });
    
}

function finalstep() {
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#finalstep").show();

    var aluminum_door_from_budget = 0;
    var aluminum_door_to_budget = 0

    var cast_aluminum_door_from_budget = 0;
    var cast_aluminum_door_to_budget = 0;

    var stainless_steel_door_from_budget = 0;
    var stainless_steel_door_to_budget = 0;

    var fly_screen_from_budget = 0;
    var fly_screen_to_budget = 0;

    var total_from = 0;
    var total_to = 0;

    // assign quantity values to zero if not checked
    if($('input:radio[name="aluminum_door"]').is(":checked")){
        aluminum_door_from_budget           +=  ($('input:radio[name="aluminum_door"]:checked').val() * 295);
        aluminum_door_to_budget             +=  ($('input:radio[name="aluminum_door"]:checked').val() * 450);
        
    }else{
        aluminum_door_from_budget = 0;
        aluminum_door_to_budget = 0;       
    }

    if($('input:radio[name="cast_aluminum_door"]').is(":checked")){
        cast_aluminum_door_from_budget      +=  ($('input:radio[name="cast_aluminum_door"]:checked').val() * 520);
        cast_aluminum_door_to_budget        +=  ($('input:radio[name="cast_aluminum_door"]:checked').val() * 650);
        
    }else{
        cast_aluminum_door_from_budget = 0;
        cast_aluminum_door_from_budget = 0;       
    }

    if($('input:radio[name="stainless_steel_door"]').is(":checked")){
        stainless_steel_door_from_budget    +=  ($('input:radio[name="stainless_steel_door"]:checked').val() * 750);
        stainless_steel_door_to_budget      +=  ($('input:radio[name="stainless_steel_door"]:checked').val() * 800);
        
    }else{
        stainless_steel_door_from_budget = 0;
        stainless_steel_door_from_budget = 0;       
    }

    if($('input:radio[name="fly_screen"]').is(":checked")){
        fly_screen_from_budget              +=  ($('input:radio[name="fly_screen"]:checked').val() * 30);
        fly_screen_to_budget                +=  ($('input:radio[name="fly_screen"]:checked').val() * 85);
        
    }else{
        fly_screen_to_budget = 0;
        fly_screen_to_budget = 0;       
    }

    total_from = aluminum_door_from_budget + cast_aluminum_door_from_budget + stainless_steel_door_from_budget + fly_screen_from_budget;
    total_to = aluminum_door_to_budget + cast_aluminum_door_to_budget + stainless_steel_door_to_budget + fly_screen_to_budget;

    //display the result
    $('.the-result').html('<h1> $ '+ formatNumber(total_from) +' - '+ formatNumber(total_to)+'</h1>');
    //send to php for email
    var fname                       = $("#name").val();
    var email                       = $("#email").val();
    var phone_number                = $("#phone").val();
    var budget_from                 = $("#budget_from").val();
    var budget_to                   = $("#budget_to").val();
    var aluminum_door_qty           = $('input:radio[name="aluminum_door"]:checked').val();
    var cast_aluminum_door_qty      = $('input:radio[name="cast_aluminum_door"]:checked').val();
    var stainless_door_qty          = $('input:radio[name="stainless_steel_door"]:checked').val();
    var fly_screen_qty              = $('input:radio[name="fly_screen"]:checked').val();
    var design_style                = $('input:radio[name="design_style"]:checked').val();
         
    $.ajax({
        type: "post",
        url: "http://www.keepmout.com.au/budget-estimator/email_budget.php",
        data: {
            fullname:                       fname,
            email:                          email,
            phone:                          phone_number,
            budget_from:                    total_from,
            budget_to:                      total_to,
            aluminum_door_qty:              aluminum_door_qty,
            cast_aluminum_door_qty:         cast_aluminum_door_qty,
            stainless_door_qty:             stainless_door_qty,
            fly_screen_qty:                 fly_screen_qty,
            design_style:                   design_style


        },
        success: function(){
            $('.success').fadeIn(1000);
            //alert('its sending email');
        }
    })
}


// this function is to put decimal or comma to a number
function formatNumber(nStr)
{
    nStr = nStr.toFixed(2) + '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
