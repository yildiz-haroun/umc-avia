/* ============================================
   UMC-AVIA - Scripts Admin
   Tableau de bord administrateur
   ============================================ */

// Données mock pour les candidatures
let mockApplications = [
    {
        id: 1,
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jean.dupont@email.com',
        phone: '+33 6 12 34 56 78',
        program: 'Master en Management',
        level: 'Bac+3',
        date: '2024-01-15',
        status: 'pending',
        applicationNumber: 'UMC-2024-0001'
    },
    {
        id: 2,
        firstName: 'Marie',
        lastName: 'Martin',
        email: 'marie.martin@email.com',
        phone: '+33 6 23 45 67 89',
        program: 'Bachelor en Management',
        level: 'Baccalauréat',
        date: '2024-01-20',
        status: 'approved',
        applicationNumber: 'UMC-2024-0002'
    },
    {
        id: 3,
        firstName: 'Pierre',
        lastName: 'Bernard',
        email: 'pierre.bernard@email.com',
        phone: '+33 6 34 56 78 90',
        program: 'Executive Education',
        level: 'Bac+5',
        date: '2024-02-01',
        status: 'pending',
        applicationNumber: 'UMC-2024-0003'
    },
    {
        id: 4,
        firstName: 'Sophie',
        lastName: 'Dubois',
        email: 'sophie.dubois@email.com',
        phone: '+33 6 45 67 89 01',
        program: 'Formation Continue',
        level: 'Bac+3',
        date: '2024-02-05',
        status: 'rejected',
        applicationNumber: 'UMC-2024-0004'
    },
    {
        id: 5,
        firstName: 'Luc',
        lastName: 'Moreau',
        email: 'luc.moreau@email.com',
        phone: '+33 6 56 78 90 12',
        program: 'Master en Management',
        level: 'Bac+3',
        date: '2024-02-10',
        status: 'approved',
        applicationNumber: 'UMC-2024-0005'
    },
    {
        id: 6,
        firstName: 'Emma',
        lastName: 'Lefebvre',
        email: 'emma.lefebvre@email.com',
        phone: '+33 6 67 89 01 23',
        program: 'Bachelor en Management',
        level: 'Baccalauréat',
        date: '2024-02-15',
        status: 'pending',
        applicationNumber: 'UMC-2024-0006'
    }
];

// Fonction pour charger les candidatures depuis le localStorage (ou mock data)
function loadApplications() {
    const stored = localStorage.getItem('umc-avia-applications');
    if (stored) {
        mockApplications = JSON.parse(stored);
    }
    return mockApplications;
}

// Fonction pour sauvegarder les candidatures
function saveApplications() {
    localStorage.setItem('umc-avia-applications', JSON.stringify(mockApplications));
}

// Fonction pour calculer les statistiques
function calculateStats() {
    const apps = loadApplications();
    return {
        total: apps.length,
        pending: apps.filter(a => a.status === 'pending').length,
        approved: apps.filter(a => a.status === 'approved').length,
        rejected: apps.filter(a => a.status === 'rejected').length
    };
}

// Fonction pour mettre à jour les statistiques dans l'interface
function updateStats() {
    const stats = calculateStats();
    const lang = getCurrentLanguage();
    
    document.getElementById('statTotal').textContent = stats.total;
    document.getElementById('statPending').textContent = stats.pending;
    document.getElementById('statApproved').textContent = stats.approved;
    document.getElementById('statRejected').textContent = stats.rejected;
}

// Fonction pour obtenir le texte du statut traduit
function getStatusText(status) {
    const lang = getCurrentLanguage();
    return t(`admin.status.${status}`, lang);
}

// Fonction pour obtenir la classe CSS du statut
function getStatusClass(status) {
    return `status-${status}`;
}

// Fonction pour afficher les candidatures dans le tableau
function displayApplications() {
    const apps = loadApplications();
    const tbody = document.getElementById('applicationsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    apps.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app.lastName}</td>
            <td>${app.firstName}</td>
            <td>${app.email}</td>
            <td>${app.program}</td>
            <td>${formatDate(app.date)}</td>
            <td>
                <span class="status-badge ${getStatusClass(app.status)}">
                    ${getStatusText(app.status)}
                </span>
            </td>
            <td>
                <button class="btn btn-secondary" onclick="viewApplication(${app.id})" data-translate="admin.actions.view">Voir dossier</button>
                <button class="btn btn-primary" onclick="downloadApplicationPDFById(${app.id})" data-translate="admin.actions.download">Télécharger PDF</button>
                <select class="status-select" onchange="changeStatus(${app.id}, this.value)" style="margin-left: 0.5rem; padding: 0.5rem;">
                    <option value="pending" ${app.status === 'pending' ? 'selected' : ''}>${getStatusText('pending')}</option>
                    <option value="approved" ${app.status === 'approved' ? 'selected' : ''}>${getStatusText('approved')}</option>
                    <option value="rejected" ${app.status === 'rejected' ? 'selected' : ''}>${getStatusText('rejected')}</option>
                </select>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Fonction pour voir les détails d'une candidature
function viewApplication(id) {
    const app = mockApplications.find(a => a.id === id);
    if (!app) return;
    
    const details = `
        Numéro de dossier: ${app.applicationNumber}
        Nom: ${app.lastName}
        Prénom: ${app.firstName}
        Email: ${app.email}
        Téléphone: ${app.phone}
        Formation: ${app.program}
        Niveau: ${app.level}
        Date: ${formatDate(app.date)}
        Statut: ${getStatusText(app.status)}
    `;
    
    alert(details);
}

// Fonction pour télécharger le PDF d'une candidature
function downloadApplicationPDFById(id) {
    const app = mockApplications.find(a => a.id === id);
    if (!app) return;
    
    const applicationData = {
        firstName: app.firstName,
        lastName: app.lastName,
        email: app.email,
        phone: app.phone,
        program: app.program,
        level: app.level,
        applicationNumber: app.applicationNumber,
        date: formatDate(app.date),
        message: app.message || ''
    };
    
    // Appeler la fonction de pdf.js
    if (typeof downloadApplicationPDF === 'function') {
        downloadApplicationPDF(applicationData);
    } else {
        generateApplicationPDF(applicationData);
    }
}

// Fonction pour changer le statut d'une candidature
function changeStatus(id, newStatus) {
    const app = mockApplications.find(a => a.id === id);
    if (app) {
        app.status = newStatus;
        saveApplications();
        displayApplications();
        updateStats();
        showAlert(`Statut de la candidature ${app.applicationNumber} mis à jour: ${getStatusText(newStatus)}`, 'success');
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('applicationsTableBody')) {
        loadApplications();
        displayApplications();
        updateStats();
    }
});

