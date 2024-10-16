let circulo = document.querySelector('.circulo')
let meio = document.getElementById('meio')
let proximo = document.getElementById('proximo')
let volta = document.getElementById('volta')


const img = document.getElementById('img1')

volta.onclick = () => {
    circulo.style.background = '#017143'
    img.src = "./img/img1.png" 
    
}

meio.onclick = () =>{
    circulo.style.background = '#FFB6C1'
    img.src = "./img/img2.png" 
}


proximo.onclick = () =>{
    circulo.style.background = '#FF00FF'
    img.src = "./img/img3.png" 
}






