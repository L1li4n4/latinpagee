fetch('menu.json')
.then(Response => Response.json())
.then(date=>{
    const menuContainer = document.getElementById('menu-container');
    let total=0;

    Data.items.forEach(category => {
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = categoty.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        let tableContent = `<tr><th>Foto</th><th>Descripcion</th><thPrecio</th><th>seleccionar</th></tr>`;

        category.items.forEach(item =>{
            tableContent +=
            <tr>
                <td><img scr="${item.image}" alt="${item.name}"></img></td>
                <td>${item.name} - ${item.description}</td>
                <td>${item.price}</td>
                <td><inpunt type="checkbox" data-price = "${item.price.replace('$','')}"onchange="updateTotal()"></inpunt></td>
            </tr>;
        });
        table.innerHTML = tableContent;
        menuContainer.appendChild(table);
    });
});
function updateTotal(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-price]');
    let currentTotal = 0;
    checkboxes.forEach(checkbox =>{
        if(checkboxes.checked){
            currentTotal += parseFloat(checkbox.getAttribute('data-price'));
        }
    });
    document.getElementById('total').textContent = currentTotal.toFixed(2);
}