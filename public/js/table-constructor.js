(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('table-settings-form');
        const saveBtn = document.getElementById('save-btn');
        const loadBtn = document.getElementById('load-btn');

        loadSettings();

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateTable();
        });

        saveBtn.addEventListener('click', saveSettings);
        loadBtn.addEventListener('click', loadSettings);

        initMenu();
    });

    function generateTable() {
        const form = document.getElementById('table-settings-form');
        const container = document.getElementById('table-container');

        const settings = {
            tableType: form['table-type'].value,
            maxLessons: parseInt(form['max-lessons'].value),
            language: form['language'].value,
            tableTitle: form['table-title'].value,
            showTime: form['show-time'].checked
        };

        const days = settings.tableType === '5-day'
            ? (settings.language === 'ru' ? ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
            : (settings.language === 'ru' ? ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

        let tableHTML = `<table class="generated-table"><caption>${settings.tableTitle}</caption><tr>`;

        if(settings.showTime) {
            tableHTML += `<th class="time-header">${settings.language === 'ru' ? 'Время' : 'Time'}</th>`;
        }

        days.forEach(day => tableHTML += `<th>${day}</th>`);
        tableHTML += '</tr>';

        for(let i = 1; i <= settings.maxLessons; i++) {
            tableHTML += '<tr>';
            if(settings.showTime) {
                const hour = 8 + i - 1;
                tableHTML += `<td class="time-cell">${hour}:00</td>`;
            }
            days.forEach(() => {
                const text = settings.language === 'ru' ? `Занятие ${i}` : `Lesson ${i}`;
                tableHTML += `<td contenteditable="true">${text}</td>`;
            });
            tableHTML += '</tr>';
        }

        tableHTML += '</table>';
        container.innerHTML = tableHTML;
    }

    function saveSettings() {
        const form = document.getElementById('table-settings-form');
        const settings = {
            tableType: form['table-type'].value,
            maxLessons: form['max-lessons'].value,
            language: form['language'].value,
            tableTitle: form['table-title'].value,
            showTime: form['show-time'].checked
        };
        localStorage.setItem('tableSettings', JSON.stringify(settings));
        alert('Настройки сохранены!');
    }

    function loadSettings() {
        const saved = localStorage.getItem('tableSettings');
        if(saved) {
            const settings = JSON.parse(saved);
            const form = document.getElementById('table-settings-form');
            form['table-type'].value = settings.tableType;
            form['max-lessons'].value = settings.maxLessons;
            form['language'].value = settings.language;
            form['table-title'].value = settings.tableTitle;
            form['show-time'].checked = settings.showTime;
            alert('Настройки загружены!');
        }
    }

    function initMenu() {
        const menuItems = document.querySelectorAll('nav a');
        const currentPage = location.pathname.split('/').pop() || 'index.html';
        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            const itemPage = href.split('/').pop();
            if(itemPage === currentPage) {
                item.classList.add('active-menu-item');
            }
        });
    }

})();