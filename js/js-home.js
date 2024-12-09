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
    10005747, 10006922, 13473, 9983139, 58963, 10001337, 10006337, 20041, 10004139, 9983724, 57681, 57916, 84760, 
    128260, 10006630, 10003927, 10003024, 79758, 16268, 10007207, 9983180, 69167, 201901, 10006787, 10005748, 
    806862, 10007701, 10006094, 57792, 57215, 9982876, 10005244, 59200, 129917, 84689, 9962441, 10003001, 
    11564, 10001776, 121770, 10000855, 84280, 38741, 10007795, 9968342, 10004255, 9083030, 10006058, 
    9982094, 166611, 10006148, 10005240, 9071970, 16936, 51411, 10007191, 10006124, 10007781, 9982612,
    9072420, 621403, 10001257, 58130, 9982795, 10005077, 10007700, 7991, 10000280, 10006168,
    108952, 10004793, 9946721, 10008468, 10005256, 10001413, 10008361
    ];

const funcionariosPorMatricula = {
    "10005747": "Amanda",
    "10006922": "Amanda",
    "13473": "Amauri",
    "9983139": "Audilá",
    "58963": "Beatriz",
    "10001337": "Beatriz",
    "10006337": "Bruno",
    "20041": "Carla",
    "10004139": "Carmem",
    "9983724": "Claudia",
    "57681": "Daiany",
    "57916": "Daywison",
    "84760": "Diovana",
    "128260": "Edneia",
    "10006630": "Eliane",
    "10003927": "Eliene",
    "10003024": "Fabian",
    "79758": "Fernanda",
    "16268": "Gabriella",
    "10007207": "Gabrielle",
    "10008468": "Glaucia",
    "9983180": "Greyce",
    "69167": "Hamara",
    "201901": "Irene",
    "10006787": "Jessica",
    "10005748": "Jessica",
    "806862": "Joao",
    "10007701": "Joelma",
    "10006094": "Jorge",
    "57792": "Karoline",
    "57215": "Laiane",
    "9982876": "Leandra",
    "10005244": "Liege",
    "59200": "Lindiane",
    "129917": "Louizeanne",
    "84689": "Luciene",
    "9962441": "Lucilene",
    "10003001": "Lyanne",
    "11564": "Maiessa",
    "10001776": "Marcia",
    "121770": "Bete",
    "84280": "Penha",
    "10001413": "Marcela",
    "38741": "Mariana",
    "10007795": "Marileia",
    "9968342": "Marilza",
    "10004255": "Markilene",
    "9083030": "Marluce",
    "10006058": "Matheus",
    "9982094": "Milena",
    "166611": "Mirian",
    "10006148": "Naiany",
    "10005240": "Nayara",
    "9071970": "Noemia",
    "16936": "Paula",
    "51411": "Pedrina",
    "10007191": "Regina",
    "10006124": "Rogerio",
    "10007781": "Rosana",
    "9982612": "Rosilene",
    "10008361": "Silvana",
    "10001257": "Silvia",
    "58130": "Simone",
    "9982795": "Sirlei",
    "10005077": "Solange",
    "10007700": "Thays",
    "7991": "Thays",
    "10000280": "Thyrone",
    "10006168": "Uriel",
    "10005256": "Vera",
    "108952": "Chefa Virgínia",
    "9946721": "Waldete"
};


const delay = 300000; //3 minutos
const usuarioLogado = localStorage.getItem('accessGranted');
const valorUsuarioLogado = parseInt(usuarioLogado);
const nomeUsuario = funcionariosPorMatricula[usuarioLogado];
console.log(nomeUsuario)
const nome = document.querySelector("#nome");
nome.innerText = nomeUsuario;

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
    window.location.href = index;
    localStorage.removeItem('accessGranted');
});
