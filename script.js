window.onload = function() {
            createHearts(30); // Membuat 30 hati
            showAdditionalMessage(); // Menampilkan pesan tambahan setelah 5 detik
        };

        function createHearts(num) {
            for (let i = 0; i < num; i++) {
                let heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = Math.random() * (window.innerWidth - 20) + 'px'; // Posisi horizontal acak
                heart.style.top = window.innerHeight + 'px'; // Mulai dari bawah layar
                heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Durasi animasi acak
                document.body.appendChild(heart);
            }
        }

        function showAdditionalMessage() {
            setTimeout(function() {
                let msg = document.querySelector('.additional-message');
                msg.classList.add('show'); // Menampilkan pesan tambahan
            }, 5000); // Tunda 5 detik
        }

