document.addEventListener( 'DOMContentLoaded', function() {
    document.getElementById("data_footer").textContent = new Date().getFullYear();

    //galeria
    new Splide( '.splide', {
        perPage: 3,
        focus  : 0
    }).mount();

});

window.addEventListener('scroll', function() {
    //menu fixo
    if(window.pageYOffset > 950){ document.querySelector(".menu").classList.add('fixed'); }
    else{ document.querySelector(".menu").classList.remove('fixed'); }
});

//Scroll Menu
document.querySelectorAll('.links').forEach(item => { item.addEventListener('click', scrollToIdOnClick); });
function scrollToIdOnClick(event) {
    const targetElement = document.querySelector(event.currentTarget.getAttribute('href'));
    if (targetElement) {
        if(event.currentTarget.getAttribute('href') == '#home'){
            var targetOffset = targetElement.offsetTop;
        }else{
            var targetOffset = targetElement.offsetTop - 150;
        }
        smoothScrollTo(0, targetOffset);
    }
}
function smoothScrollTo(endX, endY, duration = 600) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = performance.now();
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
    function scroll() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
            window.scroll(endX, endY);
        } else {
            const newX = easeInOutQuart(elapsedTime, startX, distanceX, duration);
            const newY = easeInOutQuart(elapsedTime, startY, distanceY, duration);
            window.scroll(newX, newY);
            requestAnimationFrame(scroll);
        }
    }
    scroll();
}

//formulario
// $(document).ready(function () {
//     $('#telefone').mask('(00) 00000 - 0000');

//     $('#btn_form').click(function (e) {
//         $('#nome').prop('required',false);
//         $('#email').prop('required',false);
//         $('#telefone').prop('required',false);
//     });

//     $('#formulario').submit(function (e) {
//         e.preventDefault();
//         $('#msg_form').text('');
//         $('#msg_form').removeClass('text-danger');
//         $('#msg_form').removeClass('text-success');
//         $.ajax({
//             url: "email.php",
//             method: "post",
//             data: $('form').serialize(),
//             dataType: "text",
//             success: function (msg) {
//                 if (msg.trim() === 'Formulario enviado com sucesso! Entraremos em contato em breve, obrigado por nos escolher!') {
//                     $('#msg_form').addClass('text-success');
//                     $('#msg_form').text(msg);
//                     setTimeout(() => { window.location.reload(); }, 5000)
//                 }
//                 else if (msg.trim() == "Preencha o campo de 'Nome completo'" || msg.trim() == 'Preencha o campo de E-mail' || msg.trim() == 'Por favor selecione uma planta') {
//                     $('#msg_form').addClass('text-danger');
//                     $('#msg_form').text(msg);
//                 }
//                 else{
//                     $('#msg_form').removeClass('text-success');
//                     $('#msg_form').addClass('text-danger');
//                     $('#msg_form').text('Erro ao enviar o formulario, provaveis problemas com o servidor, você pode tentar nos mandar mensagem via Instagram ou Whatsapp');
//                 }
//             }
//         })
//     });
// });