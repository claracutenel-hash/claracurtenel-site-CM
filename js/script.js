// Désactiver le clic droit
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// Bloquer les raccourcis clavier de sauvegarde et d'inspection (Ctrl+S, Ctrl+U, F12)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.keyCode === 83) { e.preventDefault(); }
    if (e.ctrlKey && e.keyCode === 85) { e.preventDefault(); }
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        e.preventDefault();
    }
}, false);