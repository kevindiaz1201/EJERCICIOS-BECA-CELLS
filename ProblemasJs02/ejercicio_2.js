const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const dialCode = item.getAttribute('data-dial-code');
        const country = item.textContent;

        alert(`Country: ${country}\nID: ${id}\nDial Code: ${dialCode}`);
        
    });
});
