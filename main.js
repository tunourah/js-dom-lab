let textEL = document.getElementsByClassName('titleEL')[0];
let subTitle = document.getElementById('sub-title');
let subP = document.getElementsByClassName('sub-title-p')[0];
let unorderedList = document.querySelector('ul');  
let tableContainer = document.getElementById('table-container');

// Adding style to textEL
textEL.style.backgroundColor = 'pink';
textEL.style.color = 'blue';

// Adding style to subTitle by id
subTitle.style.fontWeight = 'bold';
// Adding style to subP by class
subTitle.classList.add('subP');


// Image
let imageElement = document.getElementsByTagName('img')[0];
imageElement.src = "https://tunora.netlify.app/assets/IMG_7254-removebg-preview.png";  // Assign the source
imageElement.style.width = '100px';
imageElement.style.height = '100px';

// unorderedList

unorderedList.style.display = 'flex';
unorderedList.style.listStyle = 'none';
unorderedList.style.width = '300vw';
for (let i = 1; i <= 3; i++) {
    let liElement = document.createElement('li');   
    liElement.textContent = 'Item ' + i; 
    liElement.style.color = 'green';
    liElement.style.border = '2px solid black';
    
    unorderedList.appendChild(liElement);              
}


// Table
let table = document.createElement('table');
table.classList.add('custom-table');

         
        for (let i = 0; i < 2; i++) {
            let row = document.createElement('tr');  

    
            for (let j = 0; j < 3; j++) {
                let cell = document.createElement('td');  
                cell.textContent = `init Row`;  
                row.appendChild(cell) 
            }

            table.appendChild(row);  
        }

   
        tableContainer.appendChild(table);

