// HC Equipamentos - JavaScript
// Menu mobile toggle

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const header = document.querySelector('header');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// Header hide on scroll (mobile)
let lastScrollTop = 0;
const headerHideThreshold = 100; // Quantos pixels de scroll antes de esconder

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Apenas aplicar em telas pequenas (mobile)
    if (window.innerWidth <= 768) {
        if (scrollTop > headerHideThreshold) {
            // Scrollando para baixo
            if (scrollTop > lastScrollTop) {
                header.classList.add('header-hidden');
            }
            // Scrollando para cima
            else {
                header.classList.remove('header-hidden');
            }
        } else {
            // No topo da página
            header.classList.remove('header-hidden');
        }
    } else {
        // Desktop - sempre mostrar
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o scroll negativo
}, false);

// Smooth scroll é handled by CSS
