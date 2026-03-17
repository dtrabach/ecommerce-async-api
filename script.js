function carregarProdutos() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakestoreapi.com/products", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var produtos = JSON.parse(xhr.responseText);
            var lista = document.getElementById("lista");

            lista.innerHTML = "";

            produtos.forEach(function (produto) {
                var item = document.createElement("li");
                item.textContent = produto.title;
                lista.appendChild(item);
            });
        }
    };

    xhr.send();
}