const sidebarItems = Array.from(document.querySelectorAll('.sidebar-item'));
const sidebar=document.getElementById('sidebarMenu');
const sidebarToggle=document.getElementById('sidebarIcon');

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


document.onclick = function(e){
    if(e.target.id !== 'sidebarMenu' && e.target.id !== 'sidebarIcon'){
        
    }
}