import './../components/header/style.css';


function sortCities() {
    let select = document.querySelector('select')
    let items = [...select.querySelectorAll('option')];
    console.log(items)
    items.sort((a, b) => a.text == b.text ? 0: a.text < b.text ? -1 : 1);
    items.forEach(item => select.appendChild(item));
}

export {sortCities}
