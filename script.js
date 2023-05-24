const sidebarItems = Array.from(document.querySelectorAll('.sidebar-item'));

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('sidebar-item-clicked');

        sidebarItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('sidebar-item-clicked');
            }
        });
    });
});
