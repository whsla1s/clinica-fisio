// shared/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('sidebarMenu');
    
    if (menuContainer && typeof menuItems !== 'undefined') {
        const currentPath = window.location.pathname;
        let menuHTML = '';

        menuItems.forEach(item => {
            // Verifica se o link do menu corresponde à página atual para marcar como 'active'
            const isActive = currentPath.includes(item.link);
            const activeClass = isActive ? ' active' : '';
            
            menuHTML += `
                <li class="menu-item${activeClass}">
                    <a href="${item.link}">
                        <span class="menu-item-icon">${item.icon}</span>
                        <span class="menu-item-text">${item.name}</span>
                    </a>
                </li>
            `;
        });

        menuContainer.innerHTML = menuHTML;
    }
});