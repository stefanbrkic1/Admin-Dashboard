const sidebarItems = Array.from(document.querySelectorAll('.sidebar-item'));
const sidebar=document.getElementById('sidebarMenu');
const sidebarToggle=document.getElementById('Open');

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

sidebarToggle.addEventListener('change', function () {
    if (sidebarToggle.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });