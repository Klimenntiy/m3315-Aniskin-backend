(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initMenu();

        const domTime = performance.now();
        addLoadStats('DOM готов', Math.round(domTime));

        window.addEventListener('load', function() {
            const loadTime = performance.now();
            addLoadStats('Полная загрузка', Math.round(loadTime));
        });
    });

    function addLoadStats(type, time) {
        const memory = performance.memory ?
            Math.round(performance.memory.usedJSHeapSize / 1048576) : 'N/A';

        const footer = document.querySelector('footer');
        if (!footer) return;

        let statsDiv = document.querySelector('.load-statistics');

        if (!statsDiv) {
            statsDiv = document.createElement('div');
            statsDiv.className = 'load-statistics';
            statsDiv.innerHTML = `
                <p><strong>Статистика загрузки:</strong></p>
                <p id="dom-time">DOM готов:</p>
                <p id="load-time">Полная загрузка:</p>
                <p>Память: ${memory} MB</p>
            `;
            footer.prepend(statsDiv);
        }

        if (type === 'DOM готов') {
            document.getElementById('dom-time').textContent = `DOM готов: ${time} мс`;
        } else if (type === 'Полная загрузка') {
            document.getElementById('load-time').textContent = `Полная загрузка: ${time} мс`;
        }
    }

    function initMenu() {
        const menuItems = document.querySelectorAll('nav a');
        const currentPage = location.pathname.split('/').pop() || 'index.html';

        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            const itemPage = href.startsWith('#') ? 'index.html' : href.split('/').pop();

            if (itemPage === currentPage) {
                item.classList.add('active-menu-item');
            }
        });
    }
})();