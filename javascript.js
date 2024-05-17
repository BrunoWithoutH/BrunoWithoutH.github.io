//notificação do formulário
window.onload = function() {
    if (window.location.href.indexOf("?enviado=true") > -1) {
        obrigado();
    }
};

function obrigado() {
    var notification = document.getElementById("notification");
    notification.className = "notification show";
    setTimeout(function(){ notification.className = "notification"; }, 3000);
}

//adiciona o ano atual no rodapé
document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    const creationYear = 2024;
    const footer = document.querySelector('.footer p');
    
    if (currentYear === creationYear) {
        footer.textContent = `Feito Por Bruno Evaristo Pinheiro - ${creationYear}`;
    } else {
        footer.textContent = `Feito Por Bruno Evaristo Pinheiro - ${creationYear} - ${currentYear}`;
    }
});