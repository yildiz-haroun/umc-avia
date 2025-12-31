/* ============================================
   UMC-AVIA - Système de Traduction
   Bilingue FR / EN
   ============================================ */

const translations = {
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            school: "L'École",
            programs: "Programmes",
            admissions: "Admissions",
            contact: "Contact",
            apply: "Candidater",
            admin: "Admin"
        },
        // Pages communes
        common: {
            readMore: "En savoir plus",
            applyNow: "Candidater maintenant",
            download: "Télécharger",
            view: "Voir",
            edit: "Modifier",
            delete: "Supprimer",
            save: "Enregistrer",
            cancel: "Annuler",
            submit: "Envoyer",
            back: "Retour",
            next: "Suivant",
            previous: "Précédent",
            loading: "Chargement...",
            search: "Rechercher",
            filter: "Filtrer"
        },
        // Page d'accueil
        home: {
            title: "UMC-AVIA - École de Management d'Excellence",
            heroTitle: "Formez-vous au Management de Demain",
            heroSubtitle: "Rejoignez une école reconnue pour son excellence académique et son réseau professionnel international",
            heroCta: "Découvrir nos programmes",
            aboutTitle: "À propos d'UMC-AVIA",
            aboutText: "UMC-AVIA est une école de management de référence, formant les leaders de demain depuis plus de 20 ans. Notre mission est de développer les compétences managériales et entrepreneuriales de nos étudiants dans un environnement international et innovant.",
            programsTitle: "Nos Programmes",
            programsSubtitle: "Des formations adaptées à tous les profils",
            featuresTitle: "Pourquoi choisir UMC-AVIA ?",
            feature1Title: "Excellence Académique",
            feature1Text: "Programmes reconnus par les plus grandes institutions",
            feature2Title: "Réseau International",
            feature2Text: "Partenariats avec plus de 50 universités dans le monde",
            feature3Title: "Insertion Professionnelle",
            feature3Text: "95% de nos diplômés trouvent un emploi dans les 6 mois",
            feature4Title: "Innovation Pédagogique",
            feature4Text: "Méthodes d'enseignement modernes et interactives"
        },
        // Page École
        school: {
            title: "L'École - UMC-AVIA",
            h1: "Notre École",
            missionTitle: "Notre Mission",
            missionText: "Former les managers et entrepreneurs de demain en leur offrant une éducation de qualité, des opportunités internationales et un accompagnement personnalisé vers la réussite professionnelle.",
            valuesTitle: "Nos Valeurs",
            value1: "Excellence",
            value2: "Innovation",
            value3: "Intégrité",
            value4: "Ouverture Internationale",
            historyTitle: "Notre Histoire",
            historyText: "Fondée en 2000, UMC-AVIA a rapidement établi sa réputation comme l'une des meilleures écoles de management. Avec plus de 5000 diplômés à travers le monde, nous continuons à innover et à évoluer pour répondre aux défis du monde professionnel moderne.",
            statsTitle: "En Chiffres",
            stat1: "5000+ Diplômés",
            stat2: "50+ Partenaires Internationaux",
            stat3: "95% Taux d'Insertion",
            stat4: "20+ Ans d'Expérience"
        },
        // Page Programmes
        programs: {
            title: "Nos Programmes - UMC-AVIA",
            h1: "Nos Programmes de Formation",
            subtitle: "Des parcours adaptés à votre projet professionnel",
            bachelorTitle: "Bachelor",
            bachelorDesc: "Formation de 3 ans pour acquérir les fondamentaux du management",
            masterTitle: "Master",
            masterDesc: "Programme de 2 ans pour se spécialiser et développer son expertise",
            executiveTitle: "Executive Education",
            executiveDesc: "Formations pour les professionnels en activité",
            continuingTitle: "Formation Continue",
            continuingDesc: "Programmes courts et certifiants pour évoluer professionnellement"
        },
        // Page Admissions
        admissions: {
            title: "Admissions - UMC-AVIA",
            h1: "Processus d'Admission",
            stepsTitle: "Les Étapes",
            step1: "Candidature en ligne",
            step2: "Examen du dossier",
            step3: "Entretien",
            step4: "Décision d'admission",
            requirementsTitle: "Prérequis",
            requirementsText: "Les candidats doivent posséder un diplôme de niveau baccalauréat minimum et démontrer une motivation forte pour le management.",
            documentsTitle: "Documents Requis",
            doc1: "CV à jour",
            doc2: "Lettre de motivation",
            doc3: "Relevés de notes",
            doc4: "Copie du diplôme",
            datesTitle: "Calendrier",
            datesText: "Les candidatures sont ouvertes toute l'année. Les sessions d'admission ont lieu en septembre et janvier.",
            applyButton: "Postuler maintenant"
        },
        // Page Contact
        contact: {
            title: "Contact - UMC-AVIA",
            h1: "Contactez-nous",
            subtitle: "Notre équipe est à votre disposition pour répondre à toutes vos questions",
            addressTitle: "Adresse",
            address: "123 Avenue de l'Éducation\n75001 Paris, France",
            phoneTitle: "Téléphone",
            emailTitle: "Email",
            hoursTitle: "Horaires",
            hours: "Lundi - Vendredi: 9h00 - 18h00\nSamedi: 9h00 - 13h00",
            formTitle: "Envoyez-nous un message",
            formName: "Nom",
            formEmail: "Email",
            formSubject: "Sujet",
            formMessage: "Message",
            formSend: "Envoyer le message"
        },
        // Page Candidature
        apply: {
            title: "Candidature en ligne - UMC-AVIA",
            h1: "Formulaire de Candidature",
            subtitle: "Remplissez le formulaire ci-dessous pour postuler à l'un de nos programmes",
            form: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Email",
                phone: "Téléphone",
                program: "Formation choisie",
                selectProgram: "Sélectionnez une formation",
                level: "Niveau d'études",
                selectLevel: "Sélectionnez votre niveau",
                message: "Message de motivation",
                cv: "CV (PDF uniquement)",
                uploadCv: "Télécharger votre CV",
                submit: "Soumettre la candidature",
                success: "Votre candidature a été envoyée avec succès !",
                successMessage: "Un email de confirmation a été envoyé à votre adresse. Vous pouvez télécharger votre dossier PDF ci-dessous.",
                downloadPdf: "Télécharger mon dossier PDF"
            },
            validation: {
                required: "Ce champ est obligatoire",
                email: "Email invalide",
                phone: "Numéro de téléphone invalide",
                fileType: "Seuls les fichiers PDF sont acceptés",
                fileSize: "Le fichier ne doit pas dépasser 5 Mo"
            }
        },
        // Page Admin
        admin: {
            title: "Tableau de Bord - UMC-AVIA",
            h1: "Tableau de Bord Administrateur",
            stats: {
                total: "Total Candidatures",
                pending: "En Attente",
                approved: "Approuvées",
                rejected: "Refusées"
            },
            table: {
                name: "Nom",
                firstName: "Prénom",
                email: "Email",
                program: "Formation",
                date: "Date",
                status: "Statut",
                actions: "Actions"
            },
            actions: {
                view: "Voir dossier",
                download: "Télécharger PDF",
                changeStatus: "Changer statut"
            },
            status: {
                pending: "En attente",
                approved: "Approuvée",
                rejected: "Refusée"
            }
        },
        // Page Login
        login: {
            title: "Connexion Admin - UMC-AVIA",
            h1: "Connexion Administrateur",
            email: "Email",
            password: "Mot de passe",
            submit: "Se connecter",
            error: "Email ou mot de passe incorrect"
        },
        // Formations
        bachelor: {
            title: "Bachelor - UMC-AVIA",
            h1: "Bachelor en Management",
            duration: "Durée: 3 ans",
            description: "Le Bachelor en Management d'UMC-AVIA est une formation complète de 3 ans qui vous prépare aux métiers du management et de l'entrepreneuriat."
        },
        master: {
            title: "Master - UMC-AVIA",
            h1: "Master en Management",
            duration: "Durée: 2 ans",
            description: "Le Master en Management vous permet de vous spécialiser et de développer une expertise approfondie dans votre domaine de prédilection."
        },
        executive: {
            title: "Executive Education - UMC-AVIA",
            h1: "Executive Education",
            description: "Programmes de formation continue pour les cadres et dirigeants souhaitant développer leurs compétences managériales."
        },
        continuing: {
            title: "Formation Continue - UMC-AVIA",
            h1: "Formation Continue",
            description: "Formations courtes et certifiantes pour évoluer professionnellement et acquérir de nouvelles compétences."
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            school: "School",
            programs: "Programs",
            admissions: "Admissions",
            contact: "Contact",
            apply: "Apply",
            admin: "Admin"
        },
        // Pages communes
        common: {
            readMore: "Read more",
            applyNow: "Apply now",
            download: "Download",
            view: "View",
            edit: "Edit",
            delete: "Delete",
            save: "Save",
            cancel: "Cancel",
            submit: "Submit",
            back: "Back",
            next: "Next",
            previous: "Previous",
            loading: "Loading...",
            search: "Search",
            filter: "Filter"
        },
        // Page d'accueil
        home: {
            title: "UMC-AVIA - Excellence Management School",
            heroTitle: "Train for Tomorrow's Management",
            heroSubtitle: "Join a school recognized for its academic excellence and international professional network",
            heroCta: "Discover our programs",
            aboutTitle: "About UMC-AVIA",
            aboutText: "UMC-AVIA is a leading management school, training tomorrow's leaders for over 20 years. Our mission is to develop the managerial and entrepreneurial skills of our students in an international and innovative environment.",
            programsTitle: "Our Programs",
            programsSubtitle: "Training programs adapted to all profiles",
            featuresTitle: "Why choose UMC-AVIA?",
            feature1Title: "Academic Excellence",
            feature1Text: "Programs recognized by the greatest institutions",
            feature2Title: "International Network",
            feature2Text: "Partnerships with over 50 universities worldwide",
            feature3Title: "Professional Integration",
            feature3Text: "95% of our graduates find employment within 6 months",
            feature4Title: "Pedagogical Innovation",
            feature4Text: "Modern and interactive teaching methods"
        },
        // Page École
        school: {
            title: "The School - UMC-AVIA",
            h1: "Our School",
            missionTitle: "Our Mission",
            missionText: "Train tomorrow's managers and entrepreneurs by offering them quality education, international opportunities, and personalized support towards professional success.",
            valuesTitle: "Our Values",
            value1: "Excellence",
            value2: "Innovation",
            value3: "Integrity",
            value4: "International Openness",
            historyTitle: "Our History",
            historyText: "Founded in 2000, UMC-AVIA quickly established its reputation as one of the best management schools. With over 5000 graduates worldwide, we continue to innovate and evolve to meet the challenges of the modern professional world.",
            statsTitle: "In Numbers",
            stat1: "5000+ Graduates",
            stat2: "50+ International Partners",
            stat3: "95% Employment Rate",
            stat4: "20+ Years of Experience"
        },
        // Page Programmes
        programs: {
            title: "Our Programs - UMC-AVIA",
            h1: "Our Training Programs",
            subtitle: "Paths adapted to your professional project",
            bachelorTitle: "Bachelor",
            bachelorDesc: "3-year program to acquire management fundamentals",
            masterTitle: "Master",
            masterDesc: "2-year program to specialize and develop expertise",
            executiveTitle: "Executive Education",
            executiveDesc: "Training for working professionals",
            continuingTitle: "Continuing Education",
            continuingDesc: "Short and certified programs for professional development"
        },
        // Page Admissions
        admissions: {
            title: "Admissions - UMC-AVIA",
            h1: "Admission Process",
            stepsTitle: "The Steps",
            step1: "Online application",
            step2: "File review",
            step3: "Interview",
            step4: "Admission decision",
            requirementsTitle: "Prerequisites",
            requirementsText: "Candidates must have a high school diploma minimum and demonstrate strong motivation for management.",
            documentsTitle: "Required Documents",
            doc1: "Updated CV",
            doc2: "Motivation letter",
            doc3: "Transcripts",
            doc4: "Diploma copy",
            datesTitle: "Calendar",
            datesText: "Applications are open year-round. Admission sessions take place in September and January.",
            applyButton: "Apply now"
        },
        // Page Contact
        contact: {
            title: "Contact - UMC-AVIA",
            h1: "Contact Us",
            subtitle: "Our team is available to answer all your questions",
            addressTitle: "Address",
            address: "123 Education Avenue\n75001 Paris, France",
            phoneTitle: "Phone",
            emailTitle: "Email",
            hoursTitle: "Hours",
            hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM",
            formTitle: "Send us a message",
            formName: "Name",
            formEmail: "Email",
            formSubject: "Subject",
            formMessage: "Message",
            formSend: "Send message"
        },
        // Page Candidature
        apply: {
            title: "Online Application - UMC-AVIA",
            h1: "Application Form",
            subtitle: "Fill out the form below to apply to one of our programs",
            form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone",
                program: "Chosen Program",
                selectProgram: "Select a program",
                level: "Education Level",
                selectLevel: "Select your level",
                message: "Motivation Message",
                cv: "CV (PDF only)",
                uploadCv: "Upload your CV",
                submit: "Submit Application",
                success: "Your application has been sent successfully!",
                successMessage: "A confirmation email has been sent to your address. You can download your PDF file below.",
                downloadPdf: "Download my PDF file"
            },
            validation: {
                required: "This field is required",
                email: "Invalid email",
                phone: "Invalid phone number",
                fileType: "Only PDF files are accepted",
                fileSize: "File must not exceed 5 MB"
            }
        },
        // Page Admin
        admin: {
            title: "Dashboard - UMC-AVIA",
            h1: "Administrator Dashboard",
            stats: {
                total: "Total Applications",
                pending: "Pending",
                approved: "Approved",
                rejected: "Rejected"
            },
            table: {
                name: "Name",
                firstName: "First Name",
                email: "Email",
                program: "Program",
                date: "Date",
                status: "Status",
                actions: "Actions"
            },
            actions: {
                view: "View file",
                download: "Download PDF",
                changeStatus: "Change status"
            },
            status: {
                pending: "Pending",
                approved: "Approved",
                rejected: "Rejected"
            }
        },
        // Page Login
        login: {
            title: "Admin Login - UMC-AVIA",
            h1: "Administrator Login",
            email: "Email",
            password: "Password",
            submit: "Log in",
            error: "Incorrect email or password"
        },
        // Formations
        bachelor: {
            title: "Bachelor - UMC-AVIA",
            h1: "Bachelor in Management",
            duration: "Duration: 3 years",
            description: "UMC-AVIA's Bachelor in Management is a comprehensive 3-year program that prepares you for careers in management and entrepreneurship."
        },
        master: {
            title: "Master - UMC-AVIA",
            h1: "Master in Management",
            duration: "Duration: 2 years",
            description: "The Master in Management allows you to specialize and develop deep expertise in your field of choice."
        },
        executive: {
            title: "Executive Education - UMC-AVIA",
            h1: "Executive Education",
            description: "Continuing education programs for executives and managers wishing to develop their managerial skills."
        },
        continuing: {
            title: "Continuing Education - UMC-AVIA",
            h1: "Continuing Education",
            description: "Short and certified training programs for professional development and acquiring new skills."
        }
    }
};

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
    return localStorage.getItem('umc-avia-lang') || 'fr';
}

// Fonction pour définir la langue
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem('umc-avia-lang', lang);
        updatePageLanguage(lang);
    }
}

// Fonction pour obtenir une traduction
function t(key, lang = null) {
    const currentLang = lang || getCurrentLanguage();
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLang}`);
            return key;
        }
    }
    
    return value;
}

// Fonction pour mettre à jour tous les éléments de la page avec les traductions
function updatePageLanguage(lang) {
    // Mettre à jour les attributs data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = t(key, lang);
        
        if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translation;
        } else if (element.tagName === 'INPUT' && element.placeholder) {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Mettre à jour le titre de la page si présent
    const pageTitle = document.querySelector('[data-page-title]');
    if (pageTitle) {
        const titleKey = pageTitle.getAttribute('data-page-title');
        document.title = t(titleKey, lang);
    }
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updatePageLanguage(currentLang);
    
    // Ajouter les écouteurs d'événements aux boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
});

