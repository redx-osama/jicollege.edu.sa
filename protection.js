(() => {
    'use strict';

    // ==========================
    // Disable Right Click
    // ==========================
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    });

    // ==========================
    // Disable Text Selection
    // ==========================
    document.addEventListener('selectstart', e => {
        e.preventDefault();
    });

    // ==========================
    // Disable Drag
    // ==========================
    document.addEventListener('dragstart', e => {
        e.preventDefault();
    });

    // ==========================
    // Disable Copy
    // ==========================
    document.addEventListener('copy', e => {
        e.preventDefault();
    });

    // ==========================
    // Disable Cut
    // ==========================
    document.addEventListener('cut', e => {
        e.preventDefault();
    });

    // ==========================
    // Disable Paste
    // ==========================
    document.addEventListener('paste', e => {
        e.preventDefault();
    });

    // ==========================
    // Disable Keyboard Shortcuts
    // ==========================
    document.addEventListener('keydown', function (e) {

        const key = e.key.toUpperCase();

        if (
            key === 'F12' ||
            (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(key)) ||
            (e.ctrlKey && ['U', 'S', 'A', 'P'].includes(key))
        ) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

    }, true);

    // ==========================
    // Detect DevTools
    // ==========================
    let opened = false;

    function detectDevTools() {

        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {

            if (!opened) {
                opened = true;

                document.body.innerHTML = `
                    <div style="
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100vh;
                        background:#111;
                        color:#fff;
                        font-size:32px;
                        font-family:Arial;
                    ">
                        Access Denied
                    </div>
                `;

                document.title = "Blocked";
            }

        } else {
            opened = false;
        }
    }

    setInterval(detectDevTools, 500);

    // ==========================
    // Disable Print
    // ==========================
    window.onbeforeprint = function () {
        return false;
    };

    // ==========================
    // Disable Image Drag
    // ==========================
    document.querySelectorAll("img").forEach(img => {
        img.draggable = false;
    });

})();