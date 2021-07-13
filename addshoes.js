function validation(id, name, description, author, price, upload) {
    if (!id) {
        alert("Digite um ID(ex: 1)");
        return false;
    } else if (!name) {
        alert("Digite um Nome");
        return false;
    } else if (!description) {
        alert("Digite uma Descrição");
        return false;
    } else if (!price) {
        alert("Digite um Valor");
        return false;
    } else if (!author) {
        alert("Nome do Autor");
        return false;
    } else if (!upload) {
        alert("Faça upload de uma imagem");
        return false;
    } else {
        return true;
    }
}

function addProduct() {
    var products = JSON.parse(localStorage.getItem("products"));
    var id = document.getElementById("product_id").value;
    var name = document.getElementById("product_name").value;
    var description = document.getElementById("product_description").value;
    var author = document.getElementById("author").value;
    var price = document.getElementById("price").value;
    var upload = document.getElementById("filebutton").files[0];
  
    if (upload) {
      var fReader = new FileReader();
      fReader.readAsDataURL(upload);
      fReader.onloadend = function (event) {
        var path = event.target.result;
        var productObj = {
          id,
          name,
          description,
          author,
          path,
          price,
         
        };
  
        if (check) {
          if (products === null) {
            var data = [];
            data.push(productObj);
            localStorage.setItem("products", JSON.stringify(data));
            alert("Produto Adicionado com Sucesso");
            window.location.href = "index.html";
          } else {
            products.push(productObj);
            localStorage.setItem("products", JSON.stringify(products));
            alert("Produto Adicionado com Sucesso");
            window.location.href = "index.html";
          }
        }
      };
    }
  
    var check = validation(id, name, description, author, price, upload);
  }
  