document.addEventListener('DOMContentLoaded', () => {
    if (typeof EventSource !== 'undefined') {
        const eventSource = new EventSource('/events/habits');

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);

            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #81a684;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease;
            `;
            notification.innerHTML = `
                <strong> ${data.message}</strong><br>
                Привычка: ${data.habit.title}<br>
                <small>${data.time}</small>
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 5000);
        };

        eventSource.onerror = (error) => {
            console.error('SSE error:', error);
        };
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);