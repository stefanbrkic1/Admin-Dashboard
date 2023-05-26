const sidebarItems = Array.from(document.querySelectorAll('.sidebar-item'));
const sidebarToggle = document.getElementById('Open');
const header = document.getElementById('header');
const main = document.getElementById('main');
const cardIcons = Array.from(document.querySelectorAll('.white-icon'));

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

cardIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('white-icon')) {
      icon.classList.remove('white-icon')
      icon.classList.add('clicked-icon')
    }
    else {
      icon.classList.remove('clicked-icon')
      icon.classList.add('white-icon')
    }
  });
});

sidebarToggle.addEventListener('change', function () {
  if (sidebarToggle.checked) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      header.classList.add('blur');
      main.classList.add('blur');
    }, 155);
  }
  else {
    document.body.style.overflow = 'auto';
    header.classList.remove('blur');
    main.classList.remove('blur');
  }
});