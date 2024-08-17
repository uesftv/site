//Fade-in
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Aqui você pode adicionar mais ações conforme necessário
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

// Criação do Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observa todos os elementos com a classe "fade-in"
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

//Garantia de Acesso Restrito
const matriculasAutorizadas = [
10005747, 10006922, 9974601, 9983139, 58963, 10001337, 10006337, 10004139,
9076611, 9983724, 57681, 57916, 84760, 10003927, 10003024, 10007207, 9983180,
69167, 10005748, 806862, 10007701, 57215, 9982876, 10005244, 129917, 84689,
10003001, 10007528, 10001413, 121770, 10000855, 10007795, 9968342, 9083030,
10006058, 10006148, 51411, 10007191, 10006124, 10007781, 9982612, 58130,
9982795, 10000280, 10007863, 108952, 9946721, 10007700, 10005077, 9071970,
9962441, 59200, 10006094, 201901, 16268, 128260, 10005240, 84280, 166611
    ];
const delay = 300000; //3 minutos
const usuarioLogado = localStorage.getItem('accessGranted');
const valorUsuarioLogado = parseInt(usuarioLogado);
const index = "https://uesftv.github.io/site/"
if(!matriculasAutorizadas.includes(valorUsuarioLogado)){
    window.location.href = index;
};
setTimeout(function(){
    localStorage.removeItem('accessGranted');
    window.location.href = index;
}, delay);
let sair = document.querySelector('#sair');
sair.addEventListener("click", function(){
    localStorage.removeItem('accessGranted');
});