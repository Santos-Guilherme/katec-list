const botao = document.getElementById('botao');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

function adicionarTarefa() {
    let valorInput = input.value
    let li = document.createElement('li')
    li.innerHTML = valorInput + '<span onclick= "deletarTarefa (this)"> 🗑️ </span>'
    document.querySelector('ul').appendChild(li)

   

}

function deletarTarefa (li){
    li.parentElement.remove()
}