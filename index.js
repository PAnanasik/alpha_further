const itemsCont = document.querySelector('.items-container');
let selectedItem;

itemsCont.onclick = function(event) {
    let target = event.target.closest('.items-container__item');
        
    if (!target) return;
    if (target.tagName != 'DIV') return;
    if (!itemsCont.contains(target)) return;

    select(target);

}

function select(item) {
    if(selectedItem) {
        selectedItem.classList.remove('selected');
    }

    selectedItem = item;
    selectedItem.classList.add('selected');
}