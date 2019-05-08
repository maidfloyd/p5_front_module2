"use strict"

var tableBody = document.getElementById('table-body');
var tableFragment = document.createDocumentFragment();

var button = document.getElementById('button');
button.addEventListener('click', addNewRow);

function addNewRow () {
    var newRow = document.createElement('tr');

    var newName = document.createElement('td');
    newName.textContent = 'Name';

    var newItem = document.createElement('td');
    newItem.textContent = 'Item'; 

    var newPrice = document.createElement('td');
    newPrice.textContent = 'Price';    
        
    newRow.appendChild(newName);
    newRow.appendChild(newItem);
    newRow.appendChild(newPrice);

    tableBody.appendChild(newRow);

}




