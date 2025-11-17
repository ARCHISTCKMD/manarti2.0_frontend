  // ENQUIRY POPUP
        const openButtons = document.querySelectorAll('.openPopupBtn');
        const overlay = document.getElementById('popupOverlay');
        const popupBox = document.getElementById('popupBox');
        const closePopup = document.getElementById('closePopup');

        // Open popup on any button click
        openButtons.forEach(button => {
            button.addEventListener('click', () => {
                overlay.classList.remove('hidden');
                overlay.classList.add('flex');
                setTimeout(() => {
                    popupBox.classList.remove('scale-95', 'opacity-0');
                    popupBox.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });

        // Close popup function
        const closePopupFunc = () => {
            popupBox.classList.remove('scale-100', 'opacity-100');
            popupBox.classList.add('scale-95', 'opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        };

        closePopup.addEventListener('click', closePopupFunc);

        // Close popup when clicking outside the box
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePopupFunc();
        });