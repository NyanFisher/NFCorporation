var ck = true;
//----------------------------------------------
// Слздание нового блока Social, принимает блок в которые необходимо записать, блок прописывается в функции al в качестве параметра 'Div'. Перед этим в CSS сделать стиль этого блока
//----------------------------------------------
function createDiv(blockDiv) {
    
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'Social');
    document.getElementById(blockDiv).appendChild(newDiv);
    var hrefA = document.createElement('a')
    hrefA.setAttribute('class', 'inputs');
    hrefA.setAttribute('id', 'inpA');
    hrefA.setAttribute('href', 'https://vk.com/NyanFisher');
    hrefA.appendChild(document.createTextNode('Мой Вконтакте'));

    document.getElementById('Social').appendChild(hrefA);
    var hrefB = document.createElement('a');
    hrefB.setAttribute('class', 'inputs');
    hrefB.setAttribute('id', 'inpB');
    hrefB.setAttribute('href', 'https://vk.com/id1');
    hrefB.appendChild(document.createTextNode('Мой Инстаграм'));
    document.getElementById('Social').appendChild(hrefB);
}
//----------------------------------------------
// Удаление созданного блока
//----------------------------------------------
function removeDiv() {
    document.getElementById('Social').remove();
}
//----------------------------------------------
//Анимация картинки, функция принимает id картинки и блок(div) в который необходимо записать Анимацию появления нового блока.
//----------------------------------------------

function animateSocial(id, Div) {
    if (ck) {
        $('img#' + id).animate({
            'left': '12',
            'top': '2630',
            'opacity': '1'
        }, 500);
        createDiv(Div);
        animateDiv();
        ck = false;
    } else {
        $('img#' + id).animate({
            'left': '30',
            'top': '2535',
            'opacity': '1'
        }, 500);
        animateDiv();
        setTimeout(removeDiv, 100);
        ck = true;
    }
}

//----------------------------------------------
// Анимация всплывания блока
//----------------------------------------------

function animateDiv() {
    if (ck) {
        $('div#Social').animate({
            'left': '100',
            'opacity': '1'
        }, 500);
    } else {
        $('div#Social').animate({
            'left': '-100',
            'opacity': '1'
        }, 500);
    }

}
