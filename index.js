
var products = JSON.parse(localStorage.getItem("products"));

if (products) {
  var data = [];
  for (var i = 0; i < products.length; i++) {
      data.push(products[i]);
  }

  data.forEach((element) => {
    var main = document.getElementById("products");
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var bodyCard = document.createElement("div");
    bodyCard.setAttribute("class", "card-body");

    var img = document.createElement("img");
    img.setAttribute("src", element.path);
    var h5 = document.createElement("h3");
    h5.setAttribute("class", "card-title");
    var h5Text = document.createTextNode(element.name);
    h5.appendChild(h5Text);
    var description = document.createElement("p");
    description.setAttribute("class", "card-text");
    var descriptionText = document.createTextNode(element.description);
    description.appendChild(descriptionText);
    bodyCard.appendChild(h5);
    bodyCard.appendChild(description);
    card.appendChild(img);
    card.appendChild(bodyCard);
    main.appendChild(card);
  });
}

