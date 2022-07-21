const menu_lateral = document.getElementById("menu_lateral");
const body =  document.getElementsByTagName("html")[0];

//Função para abrir o icone menu lateral
function openMenu(){
    menu_lateral.style = "display:flex";

    body.style.overflow = "hidden";
}

//Função para fechar o icone menu lateral
function closeMenu(){
    menu_lateral.style.animationName = "close_menu";

    body.style.overflow = "scroll";
}