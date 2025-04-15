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


const matriculasAcesso = [
    10005747, 10006922, 13473, 9983139, 58963, 10001337, 10006337, 10004139, 9983724, 57681, 57916, 84760, 
    128260, 10003024, 79758, 16268, 10007207, 9983180, 69167, 201901, 10005748, 
    806862, 10007701, 10006094, 57792, 57215, 9982876, 10005244, 59200, 129917, 84689, 9962441, 10003001, 
    11564, 121770, 10000855, 84280, 10007795, 9968342, 10004255, 9083030, 10006058, 
    9982094, 166611, 10005240, 9071970, 16936, 51411, 10007191, 10007781, 9982612,
    9072420, 621403, 58130, 9982795, 10005077, 10000280, 10006168,
    108952, 10004793, 9946721, 10008468, 10005256, 10001413, 10008361, 125792, 10006109, 121691, 10062
    ];

let matricula = document.querySelector('#matricula');
let botaoEntrar = document.querySelector('#botaoEntrar');
let usuarioLogado = localStorage.getItem('accessGranted');
const valorUsuarioLogado = parseInt(usuarioLogado);
const home = "https://uesftv.github.io/site/home";

if(matriculasAcesso.includes(valorUsuarioLogado)){
    window.location.href = home;
}else if (usuarioLogado == null){
    botaoEntrar.addEventListener("click", function(){
        const valorSenha = parseInt(matricula.value);
        if(matriculasAcesso.includes(valorSenha)){
            localStorage.setItem('accessGranted', valorSenha);
            window.location.href = home;
        }else{
            alert('Digite sua matrícula corretamente para acessar o sistema. A mátricula inserida não pertence à esta unidade de saúde!');
        }
    });
    matricula.addEventListener("keydown", function(evento){
        if(evento.key == 'Enter'){
        const valorSenha = parseInt(matricula.value);
        if(matriculasAcesso.includes(valorSenha)){
            localStorage.setItem('accessGranted', valorSenha);
            window.location.href = home;
        }else{
            alert('Digite sua matrícula corretamente para acessar o sistema. A mátricula inserida não pertence à esta unidade de saúde!');
        }
        }      
});
}
