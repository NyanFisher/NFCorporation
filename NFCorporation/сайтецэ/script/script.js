var i = 0;
var ck = true;

function al() {
    if (ck) {
        $('img').animate({
            'left': '10',
            'top': '200',
            'opacity': '1'
        }, 1000);
        clickDiv();
        ck = false;
    } else {
        $('img').animate({
            'left': '30',
            'top': '25',
            'opacity': '1'
        }, 1000);
        clickDiv();
        document.getElementById('VkInst').remove();
        ck = true;
    }
}

function clickDiv() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'VkInst');

    if (i == 0 && ck) {
        document.getElementById('head').appendChild(newDiv);
        var hrefA = document.createElement('a')
        hrefA.setAttribute('class', 'inputs');
        hrefA.setAttribute('id', 'inpA');
        hrefA.setAttribute('href', 'https://vk.com/NyanFisher');
        hrefA.appendChild(document.createTextNode('Мой Вконтакте'));

        document.getElementById('VkInst').appendChild(hrefA);
        var hrefB = document.createElement('a');
        hrefB.setAttribute('class', 'inputs');
        hrefB.setAttribute('id', 'inpB');
        hrefB.setAttribute('href', 'https://vk.com/id1');
        hrefB.appendChild(document.createTextNode('Мой Инстаграм'));
        document.getElementById('VkInst').appendChild(hrefB);
        $('div').animate({
            'left': '100',
            'opacity': '1'
        }, 1000);
        i--;
    } else {

        i++;
    }

}
