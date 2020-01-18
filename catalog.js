var items = [];

function fetchCatalog() {
    items = [

        {
            "code": "Hak 5",
            "description":  "The leading rogue access point and WiFi pentest toolkit for close access operations. Passive and active attacks analyze vulnerable and misconfigured devices",
            "price": 199.99,
            "image": "Images/Pure-VPN-Pinapple-1.jpg",
            "category": "Pentest",
            "stock": 3,
            "deliveryDays": 7
        },

        {
            "code": "WIFIUSB",
            "description": "USB Long Range Antenna, Make your Internet of Things device cable-free by adding super WiFi",
            "price": 39.99,
            "image": "Images/images.jfif",
            "category": "USB",
            "stock": 10,
            "deliveryDays": 1
        },
        {
            "code": "SONYNEXTGEN",
            "description":  "PS4 PRO, Heighten your experiences. Enrich your adventures. Let the super charged PS4 Pro lead the way",
            "price": 299.99,
            "image": "Images/ps4.jfif",
            "category": "Gaming",
            "stock": 6,
            "deliveryDays": 5
        },
        {
            "code": "PixelB",
            "description": "PixelBook, Google Pixelbook (i7, 16 GB RAM, 512 GB)",
            "price": 999.00,
            "image": "Images/pixelbook.jfif",
            "category": "Computer",
            "stock": 2,
            "deliveryDays": 8
        },

    ];
}

function displayCatalog() {
    //travel item array
    for (var i = 0; i < items.length; i++) {
        //get item
        var item = items[i];
        //draw item on the DOM
        drawItem(item);
    }

}

function drawItem(item) {

    var sntx = `<div class='item'>
    <img src='${item.image}'>
    <label>Item Code:</label><label class='code'>${item.code}</label>
    <br>    
    <label>Description:</label><label class='description'>${item.description}</label> 
    <label>Category:</label><label class='category'>${item.category}</label> 
    <label>Price:</label><label class='price'>${item.price}</label>     
    <label>Stock:</label><label class='stock'>${item.stock}</label> 
    <label>Days to Deliver:</label><label class='deliveryDays'>${item.deliveryDays}</label> 
    <button class='btn btn-sm btn-info'>+</button>
    </div>`;

    var container = $("#catalog");

    container.append(sntx);
}


function search() {
    // console.log("User wants to search");

    var text = $("#txtSearch").val().toLowerCase();//get the search term

    //console.log(text);

    //clear non searched items
    $("#catalog").html("");

    //travel array to find the item that was searched

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.category.toLowerCase().includes(text) 
        || item.description.toLowerCase().includes(text)
        ||item.code == text
        ||item.price == text) 
        {
            drawItem(item);
        }

    }
}

function init() {

    //console.log("Hello World");

    //hook events
    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function(e) {
        //console.log(e);
        if (e.keyCode == 13) {
            search();
        }
    })
}
fetchCatalog();
displayCatalog();


//HTTP Method - get/post/put/delete/patch
//HTTP Status Code

window.onload = init;