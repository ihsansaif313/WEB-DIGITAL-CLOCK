function updateTime() {
            const now = new Date();
            document.getElementById('timeh').textContent = now.getHours().toString().padStart(2, '0');
            document.getElementById('timem').textContent = now.getMinutes().toString().padStart(2, '0');
            document.getElementById('times').textContent = now.getSeconds().toString().padStart(2, '0');
            
            // Update complications
            document.querySelector('.complication-value').textContent = now.getHours() >= 12 ? 'PM' : 'AM';
            document.querySelectorAll('.complication-value')[1].textContent = now.getDate();
        }
        setInterval(updateTime, 1000);
        updateTime();
