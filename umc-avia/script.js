/* ============================================
   UMC-AVIA - Scripts Principaux
   Navigation, Menu Mobile, etc.
   ============================================ */

// Menu Mobile
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        // Fermer le menu quand on clique sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            });
        });
    }
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les cartes et sections
    document.querySelectorAll('.card, .section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Validation de formulaire générique
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        const group = input.closest('.form-group');
        if (group) {
            group.classList.remove('error');
            const errorMsg = group.querySelector('.error-message');
            
            if (!input.value.trim()) {
                isValid = false;
                group.classList.add('error');
                if (errorMsg) {
                    errorMsg.textContent = t('apply.validation.required');
                }
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                group.classList.add('error');
                if (errorMsg) {
                    errorMsg.textContent = t('apply.validation.email');
                }
            } else if (input.type === 'tel' && !isValidPhone(input.value)) {
                isValid = false;
                group.classList.add('error');
                if (errorMsg) {
                    errorMsg.textContent = t('apply.validation.phone');
                }
            }
        }
    });
    
    return isValid;
}

// Validation email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validation téléphone
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
}

// Validation fichier PDF
function validatePDFFile(file) {
    if (!file) return false;
    
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const allowedTypes = ['application/pdf'];
    
    if (!allowedTypes.includes(file.type)) {
        return { valid: false, error: t('apply.validation.fileType') };
    }
    
    if (file.size > maxSize) {
        return { valid: false, error: t('apply.validation.fileSize') };
    }
    
    return { valid: true };
}

// Fonction pour afficher un message d'alerte
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const container = document.querySelector('.container') || document.querySelector('.form-container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        
        // Supprimer l'alerte après 5 secondes
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}

// Fonction pour générer un numéro de dossier
function generateApplicationNumber() {
    const prefix = 'UMC';
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${year}-${random}`;
}

// Fonction pour formater une date
function formatDate(date) {
    const d = new Date(date);
    const lang = getCurrentLanguage();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', options);
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        isValidEmail,
        isValidPhone,
        validatePDFFile,
        showAlert,
        generateApplicationNumber,
        formatDate
    };
}

