const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');

//Ação do clique
btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.background = colors[randomColor];
    colorName.innerHTML = colors[randomColor];
});

//Função para gerar números aleatórios
function getRandomColor () {
    return Math.floor(Math.random() * colors.length);
}
