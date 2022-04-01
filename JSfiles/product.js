
    function searchFunction()
    {
        document.querySelector("#searchpopside").style.width="450px";
    }
    function closethepopsideFunction()
    {
        document.querySelector("#searchpopside").style.width="0px";
    }
    function cartFunction()
    {
        document.querySelector("#cartpopside").style.width="450px";
    }
    function closethecartpopsideFunction()
    {
        document.querySelector("#cartpopside").style.width="0px";
    }

    function addtocartfunction()
    {
        var dataObj={
                    image_url:
                        "https://cdn.shopify.com/s/files/1/0153/8863/products/V-MODA-Authenticity-Certificate2_cd68a528-eb64-4129-b127-7f056edb28d7_700x.png?v=1604060994",
                    image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/v-moda-over-ear-headphone-shield-kit-matte-blue-headphone-zone-15042205255_700x.jpg?v=1604060994",
                    name: "V-MODA - OVER-EAR HEADPHONE SHIELD KIT",
                    subname:"Replaceable Shields",
                    price:2490,
                    strikedoffprice: 2990,
                    star:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png",
                    reviewnumber:"10 reviews"            
                    };
        localStorage.setItem("productData",JSON.stringify(dataObj));    
        alert("Item Added to the Cart-->Please Go to Cart for Checkout")        

        document.querySelector("cartitems1").innerText="1 ITEM";
    }