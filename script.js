const btn = document.querySelector(".btn-js")
const [input1, input2] = document.querySelectorAll("input")
console.log(btn, input1,input2)

function ativarLogin(){
  if(input1.value && input2.value.length >=6){
    btn.removeAttribute("disabled")
    btn.classList.add("ativo")

  }
}

input1.addEventListener("input", ativarLogin)
input2.addEventListener("input", ativarLogin)