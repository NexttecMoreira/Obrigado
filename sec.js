
        document.addEventListener('DOMContentLoaded', function() {
            const animateOnScroll = function() {
                const sectionTitle = document.querySelector('.section-title');
                const serviceCards = document.querySelectorAll('.service-card');
                
                // Verifica se o elemento está visível na tela
                const isElementInViewport = function(el) {
                    const rect = el.getBoundingClientRect();
                    return (
                        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.bottom >= 0
                    );
                };
                
                // Anima o título da seção
                if (isElementInViewport(sectionTitle)) {
                    sectionTitle.style.animation = 'fadeInUp 1s ease forwards';
                }
                
                // Anima os cards com delay entre eles
                serviceCards.forEach((card, index) => {
                    if (isElementInViewport(card)) {
                        card.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.1 + 0.2}s`;
                    }
                });
            };
            
            // Executa na carga inicial
            animateOnScroll();
            
            // Executa no scroll
            window.addEventListener('scroll', animateOnScroll);
            
            // Força a animação do hero
            document.querySelector('.hero h1').style.animation = 'fadeInUp 1s ease forwards 0.3s';
            document.querySelector('.hero p').style.animation = 'fadeInUp 1s ease forwards 0.6s';
            document.querySelector('.hero .btn').style.animation = 'fadeInUp 1s ease forwards 0.9s';
        });