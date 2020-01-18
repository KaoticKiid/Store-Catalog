var serverURL = "http://restclass.azurewebsites.net/API/";




function saveItem() {
    //get the values
    var code = $("#txtcode").val();
    var description = $("#txtdescription").val();
    var price = $("#txtprice").val();
    var category = $("#txtcategory").val();
    var image = $("#txtimage").val();
    var stock = $("#txtstock").val();
    var deliveryDays = $("#txtdeliveryDays").val();



    console.log("code:" + code + "description:" + description + "price:" + price + "category:" + category + "image:" + image + "stock:" + stock + "deliveryDays:" + deliveryDays);

    //clear input field
    $("#code").val("");
    $("#description").val("");
    $("#price").val("");
    $("#category").val("");
    $("#image").val("");
    $("#stock").val("");
    $("#deliveryDays").val("");

    //set focus
    $("#code").focus();

    // send to the server
    $.ajax({

    });
}


function testAjax() {
    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        success: function (res) {
            console.log("Server says:"+res);
        }, 
        error: function (err) { 
            console.log("error has occured:"+err); }
    });

    console.log("below ajax req");
    console.log("Waiting on Jax");
}
function init() {
    //hook events
    $("#btnSave").click(saveItem);
}

//when browser finishes loading all elements
window.onload = init;
