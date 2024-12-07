function setupDropdownFunctionality() {
    document.querySelectorAll('.service-item.dropdown h3').forEach((header) => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            const dropdownContent = parent.querySelector('.dropdown-content');
            const icon = header.querySelector('span');
            document.querySelectorAll('.service-item.dropdown').forEach((item) => {
                if (item !== parent && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.dropdown-content').style.maxHeight = null;
                    item.querySelector('h3 span').innerText = '▼';
                }
            });
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                dropdownContent.style.maxHeight = null; 
                icon.innerText = '▼';
            } else {
                parent.classList.add('active');
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; 
                icon.innerText = '▲';
            }
        });
    });
}
window.addEventListener('load', function () {
    setupDropdownFunctionality();
});
