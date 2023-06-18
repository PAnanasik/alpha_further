const dom = {
    donaterName: document.querySelector('#nick__input'),
    donateValue: document.querySelector('#value__input'),
    donateText: document.querySelector('#textarea__input'),
    donateButton: document.querySelector('#transition__button'),
    newName: document.querySelector('#newnick__input'),
    newValue: document.querySelector('#newcash__input'),
    newText: document.querySelector('#newarea__input')
}

document.querySelector("form").addEventListener(`submit`, function(event) {
    event.preventDefault();
    if (formValid() == true) {
        submitForm();
        document.location.href = "perehod.html"
    }
    else {
        alert("Пошел нахуй")
    }
});


function formValid() {
    if (dom.donaterName.checkValidity() && (dom.donateValue.checkValidity() && dom.donateValue.value[0] !== '0')) {
        return true;
    }
    else {
        return false;
    }
}




function submitForm(){
    if(typeof(localStorage) != "undefined"){
        localStorage.name = dom.donaterName.value;
        localStorage.cash = dom.donateValue.value;
        localStorage.text = ((dom.donateText.value).trimStart()).trimEnd();
    }
    document.querySelector("form").submit();
}

function setData(){
    if(typeof(localStorage) != "undefined"){
       dom.newName.value = localStorage.name;
       dom.newValue.value = localStorage.cash;
       dom.newText.innerHTML = localStorage.text;
    }
}