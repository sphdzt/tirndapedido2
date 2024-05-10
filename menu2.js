fetch('menu.json')
.then(response => response.json())
.then(data=> {
    const menuContainer = document.getElementByid ('menu-container');

    let total= 0;
    data.items.forEach(category => {
        const categoryTitle = docuemnt. createElement('h3');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = docuemnt.createElement ('table');
        const tablecontent = `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>`;
        let tableBody ='';

        category.items.forEach(item => {
            tableBody +=`<tr>
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name} - ${item.description}</td>
            <td>${titem.price}</td>
            <td><input type="checkbox" data-price="${item.price.replace('&','')}" onchange="updateT </tr>`;
        }):
        table.innerHTML = tablecontent;
        menuContainer.appendChild(table);
    });
});
function updateTotal(){
    const checkbox = docuemnt.querySelectorAll('input[type="checkbox"] [data-pricel');
        let currentTotal = 0;
        checkboxes.forEach(checkbox =>{
            if(checkbox.checked){
                currentTotal += parseFloat (checkbox.getAttribute('data-price')):
            }
        });
        document.getElementById('total').textContent = currentTotal.toFixed(2);
    }


