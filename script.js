// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1) AOS init
    if (window.AOS) {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            mirror: false
        });
    }

    // 2) Inserir ano atual no footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 3) Smooth scroll for internal links (supports offset for sticky navbar)
    const OFFSET = 72; // pixels to offset for sticky navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
                // collapse mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).toggle();
                }
            }
        });
    });

    // 4) Contact form basic handler (demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simples feedback UX (substitua por integração real)
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = 'Enviando...';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                contactForm.reset();
                alert('Mensagem enviada com sucesso! Entraremos em contato em até 3 dias úteis.');
            }, 900);
        });
    }

    // 5) Optional: intercept download to show a tiny confirmation (unobtrusive)
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // If you want a confirmation, uncomment below; otherwise remove the handler.
            // e.preventDefault();
            // if (!confirm('Ao baixar você concorda com os termos e atribuições. Deseja prosseguir?')) return;
            // window.location.href = downloadBtn.href;
            // For now we allow default download behaviour.
        });
    }
});
