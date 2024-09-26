var personArr = [
    {
        'personId':123,
        'name': 'Jhon',
        'city': 'Melbourne',
        'phoneNo': '1234567890'
    },

    {
        'personId':124,
        'name': 'Amelia',
        'city': 'Sydney',
        'phoneNo': '1234567890'
    },

    {
        'personId':125,
        'name': 'Emily',
        'city': 'Perth',
        'phoneNo': '1234567890'
    },

    {
        'personId':126,
        'name': 'Abraham',
        'city': 'Perth',
        'phoneNo': '1234567890'
    },
]

const table=document.createElement('table');
document.body.appendChild(table);

const headerRow = document.createElement('tr');
const headers = ['Person ID', 'Name', 'City', 'Phone'];

headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});

table.appendChild(headerRow);


personArr.forEach(person => {
    const contentRow = document.createElement('tr'); 
    const cells = [person.personId, person.name, person.city, person.phoneNo]; 

    cells.forEach(cellValue => {
        const cell = document.createElement('td'); 
        cell.textContent = cellValue; 
        contentRow.appendChild(cell); 
    });

    table.appendChild(contentRow); 
});

