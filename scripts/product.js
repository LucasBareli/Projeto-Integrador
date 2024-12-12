import { database } from "./database.js";
import { findProduct, loadProduct } from "./functions.js"; 


let id = localStorage.getItem('prodId') 
let listaCompras = JSON.parse(localStorage.getItem('listaCompras')) 


if (listaCompras == null || listaCompras.length == 0){
    listaCompras = []
}

let produto = findProduct(database,id)
let selecaoProduto = document.querySelector(".grid_col_1") 



loadProduct(produto,selecaoProduto) 

let botaoComprar = document.querySelector(".product_price_container button") 


botaoComprar.addEventListener('click',()=>{
    let quantity = parseInt(document.querySelector("#quantity").value) 
    produto.quantity = quantity
    listaCompras.push(produto)
    alert("Produto adicionado com sucesso!")
    localStorage.setItem('listaCompras',JSON.stringify(listaCompras))
    console.log(listaCompras)
    window.location = "./checkout.html"
})


document.addEventListener('DOMContentLoaded', () => {
    // Seleciona as miniaturas e a imagem principal
    const thumbImages = document.querySelectorAll('.product_thumb');
    const mainImage = document.querySelector('.images_main img');
  
    // Função para trocar a imagem principal
    function changeMainImage(event) {
      const newImageSrc = event.target.src;  // Pega o caminho da miniatura clicada
      mainImage.src = newImageSrc;  // Troca o src da imagem principal
    }
  
    // Adiciona evento de clique em cada miniatura
    thumbImages.forEach(thumb => {
      thumb.addEventListener('click', changeMainImage);
    });
  });
  