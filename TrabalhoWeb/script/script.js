var banner = document.getElementById('bannerSite');

function slide1(){
    banner.src="imagens/bannerPrincipal.png";
    setTimeout("slide2()", 7000)
}
    
function slide2(){
    banner.src="imagens/bannerTeclados.png";
    setTimeout("slide3()", 5000)
}
    
function slide3(){
    banner.src="imagens/bannerGaitas.png";
    setTimeout("slide4()", 5000)
}

function slide4(){
    banner.src="imagens/bannerGuitarras.png";
    setTimeout("slide5()", 5000)
}

function slide5(){
    banner.src="imagens/bannerVioloes.png";
    setTimeout("slide1()", 5000)
}

function slide6(){
    banner.src="imagens/bannerBaterias.png";
    setTimeout("slide1()", 5000)
}