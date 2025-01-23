// Додаємо обробник події для кліку
document.getElementById('dropdownToggle').addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо переходу по посиланню
    var dropdownMenu = document.getElementById('dropdownMenu');
    
    // Закриваємо меню, якщо воно відкрите
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    } else {
        // Закриваємо будь-які інші відкриті меню, якщо вони є
        document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
            menu.classList.remove('show');
        });
        
        // Відкриваємо поточне меню
        dropdownMenu.classList.add('show');
    }
});

// Закриваємо меню при кліку поза його межами
document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('dropdownToggle').contains(event.target) || 
                        document.getElementById('dropdownMenu').contains(event.target);

    if (!isClickInside) {
        document.getElementById('dropdownMenu').classList.remove('show');
    }
});
