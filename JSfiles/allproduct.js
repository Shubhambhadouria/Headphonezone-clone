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



var cartData=[
{
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/gift-wrap-your-order-headphone-zone-3900251734079_500x.png?v=1580174496",
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/gift-wrap-your-order-headphone-zone-3900251734079_500x.png?v=1580174496",
  name: "GIFT WRAP YOUR ORDER",
  subname:"",
  price:50,
  strikedoffprice: 95,
  star:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/800px-Star_rating_4.5_of_5.png",
  reviewnumber:"33 reviews"
},
{
  image_url:
    "https://cdn.shopify.com/s/files/1/0153/8863/products/V-MODA-Authenticity-Certificate2_cd68a528-eb64-4129-b127-7f056edb28d7_700x.png?v=1604060994",
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/v-moda-over-ear-headphone-shield-kit-matte-blue-headphone-zone-15042205255_700x.jpg?v=1604060994",
  name: "V-MODA - OVER-EAR HEADPHONE SHIELD KIT",
  subname:"Replaceable Shields",
  price:2490,
  strikedoffprice: 2990,
  star:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png",
  reviewnumber:"10 reviews"
},
{
  image_url:
    "https://cdn.shopify.com/s/files/1/0153/8863/products/the-it-s-called-bass-t-shirt-headphone-zone-4681644671039_700x.jpg?v=1580336617",
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/the-it-s-called-bass-t-shirt-s-headphone-zone-4681644474431_700x.jpg?v=1580336617",
  name: "THE IT'S CALLED BASS T-SHIRT",
  subname:"Custome Made Merchandise",
  price:499,
  strikedoffprice: 599,
  star:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png",
  reviewnumber:"No review"
},
{
  image_url:
    "https://cdn.shopify.com/s/files/1/0153/8863/products/the-audiophile-t-shirt-headphone-zone-4686953840703_700x.jpg?v=1642489733",
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audiophile-Box-T-shirt-1160-1160_13a2bae7-0e9b-4b3c-9e54-62d0352a9872_700x.jpg?v=1642489733",
  name: "PROFESSED AUDIOPHILE T-SHIRT",
  subname:"Custom Made Merchandise",
  price:499,
  strikedoffprice: 599,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"7 reviews"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/comply-whoomp-apple-earbud-enhancers-single-pair-headphone-zone-23601173063_700x.jpg?v=1596882158",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/comply-whoomp-apple-earbud-enhancers-single-pair-headphone-zone-23601173255_700x.jpg?v=1596882158",
  name: "COMPLY - WHOOMP! - APPLE EARBUD ENHANCERS (SINGLE PAIR)",
  subname:"Memory Foam Eartips",
  price:799,
  strikedoffprice: 899,
  star:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png",
  reviewnumber:"No review"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/miter-astell-kern-ak70-leather-case-dark-gray-headphone-zone-25876967943_700x.jpg?v=1605009073",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/miter-astell-kern-ak70-leather-case-dark-gray-headphone-zone-25876980487_700x.jpg?v=1605009073",
  name: "MITER - ASTELL&KERN - AK70 LEATHER CASE",
  subname:"Fingerprint & Scratch Resistant",
  price:3999,
  strikedoffprice: 4999,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"1 review"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/STAX-SRM-353X-7_700x.jpg?v=1594272819",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/STAX-SRM-353X-8_700x.jpg?v=1594272823",
  name: "STAX - SRM-353X",
  subname:"Electrostatic Energiser For STAX Heaphones",
  price:79999,
  strikedoffprice: 99990,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"1 review"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/effect-audio-lionheart-iem-upgrade-cable-headphone-zone-287958532103_700x.jpg?v=1580174735",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/effect-audio-lionheart-iem-upgrade-cable-headphone-zone-279941283847_700x.jpg?v=1580174735",
  name: "EFFECT AUDIO - LIONHEART IEM UPGRADE CABLE",
  subname:"",
  price:39999,
  strikedoffprice: 49999,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"No reviews"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-shure-srh1840-1160-1160_700x.jpg?v=1623753121",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-shure-srh1840-1160-1160-1_700x.jpg?v=1623753121",
  name: "SHURE - SRH1840",
  subname:"Open-Back Studio Headphone",
  price:45999,
  strikedoffprice: 61875,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"No reviews"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/chord-dave-headphone-zone-27280914183_700x.jpg?v=1580179137",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/chord-dave-headphone-zone-27280953991_700x.jpg?v=1580179137",
  name: "CHORD - DAVE",
  subname:"Desktop DAC & Headphone Amp",
  price:799990,
  strikedoffprice: 89990,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"No reviews"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/miter-fiio-x5-3rd-gen-leather-case-grey-headphone-zone-25882396359_700x.jpg?v=1579934857",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/miter-fiio-x5-3rd-gen-leather-case-headphone-zone-25882398471_700x.jpg?v=1605009474",
  name: "MITER - FIIO X5 (3RD GEN) LEATHER CASE",
  subname:"Fingerprint & Scratch Resistant",
  price:3999,
  strikedoffprice: 4999,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"No reviews"
},
{
  image_url2:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-1_700x.jpg?v=1593677179",
  image_url:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-2_700x.jpg?v=1593677188",
  name: "SENNHEISER - HD 820",
  subname:"Flagship Closed-Back Headphone",
  price:189990,
  strikedoffprice: 219999,
  star:"https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
  reviewnumber:"No reviews"
}
];

cartData.map(function(elem){

var box=document.createElement("div");
box.setAttribute("class","productdiv")

var imagediv=document.createElement("div");
imagediv.setAttribute("class","imagehover");

var image1=document.createElement("img");
image1.src=elem.image_url;
image1.setAttribute("class","image-front");

var image2=document.createElement("img");
image2.src=elem.image_url2;
image2.setAttribute("class","image-back");

imagediv.append(image1,image2);

var Name=document.createElement("h3");
Name.innerText=elem.name;
Name.setAttribute("class","producth3");

var anchor=document.createElement("a");
anchor.href="product.html";

anchor.append(Name);
anchor.setAttribute("class","anchor")

var Subname=document.createElement("h5");
Subname.innerText=elem.subname;
Subname.setAttribute("class","producth5");

var Pricediv=document.createElement("div");
Pricediv.setAttribute("class","pricediv");

var indiancurrency=document.createElement("p");
indiancurrency.innerText="₹";


var Price=document.createElement("p");
Price.innerText=elem.price;
Price.setAttribute("class","productp")

var indiancurrency2=document.createElement("p");
indiancurrency2.innerText="₹";
indiancurrency2.style.color="blue";
indiancurrency2.style.fontWeight="bold";

var Striked=document.createElement("p");
Striked.innerText=elem.strikedoffprice;
Striked.setAttribute("class","productp2")

Pricediv.append(indiancurrency2,Price,indiancurrency,Striked);

var ratingdiv=document.createElement("div");
ratingdiv.setAttribute("class","ratingdiv");

var rating=document.createElement("img");
rating.src=elem.star;
rating.setAttribute("class","productimg2")

var Reviewnumber=document.createElement("p");
Reviewnumber.innerText=elem.reviewnumber;
Reviewnumber.setAttribute("class","reviewnumber")

ratingdiv.append(rating,Reviewnumber);

box.append(imagediv, anchor , Subname, Pricediv, ratingdiv);

document.querySelector("#container").append(box);

})