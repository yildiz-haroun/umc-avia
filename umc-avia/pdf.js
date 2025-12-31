/* ============================================
   UMC-AVIA - Génération PDF
   Dossier de candidature
   ============================================ */

// Fonction pour générer le PDF de candidature
function generateApplicationPDF(applicationData) {
    // Note: Cette fonction est préparée pour utiliser jsPDF
    // Pour l'instant, elle crée un PDF basique via le navigateur
    
    // Si jsPDF est disponible, l'utiliser
    if (typeof jsPDF !== 'undefined') {
        return generatePDFWithJSPDF(applicationData);
    } else {
        // Fallback: créer un document HTML stylisé et permettre l'impression
        return generatePDFFallback(applicationData);
    }
}

// Génération PDF avec jsPDF (quand la bibliothèque sera ajoutée)
function generatePDFWithJSPDF(applicationData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Logo et en-tête
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102); // Couleur primaire
    doc.text('UMC-AVIA', 20, 30);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('École de Management', 20, 40);
    doc.text('Dossier de Candidature', 20, 50);
    
    // Ligne de séparation
    doc.setDrawColor(255, 102, 0); // Couleur accent
    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);
    
    // Informations du candidat
    let yPos = 70;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Informations du Candidat', 20, yPos);
    
    yPos += 10;
    doc.setFont(undefined, 'normal');
    doc.text(`Numéro de dossier: ${applicationData.applicationNumber}`, 20, yPos);
    yPos += 8;
    doc.text(`Date de candidature: ${applicationData.date}`, 20, yPos);
    yPos += 15;
    
    doc.setFont(undefined, 'bold');
    doc.text('Coordonnées:', 20, yPos);
    yPos += 8;
    doc.setFont(undefined, 'normal');
    doc.text(`Nom: ${applicationData.lastName}`, 20, yPos);
    yPos += 8;
    doc.text(`Prénom: ${applicationData.firstName}`, 20, yPos);
    yPos += 8;
    doc.text(`Email: ${applicationData.email}`, 20, yPos);
    yPos += 8;
    doc.text(`Téléphone: ${applicationData.phone}`, 20, yPos);
    yPos += 15;
    
    doc.setFont(undefined, 'bold');
    doc.text('Formation:', 20, yPos);
    yPos += 8;
    doc.setFont(undefined, 'normal');
    doc.text(applicationData.program, 20, yPos);
    yPos += 8;
    doc.text(`Niveau d'études: ${applicationData.level}`, 20, yPos);
    yPos += 15;
    
    if (applicationData.message) {
        doc.setFont(undefined, 'bold');
        doc.text('Message de motivation:', 20, yPos);
        yPos += 8;
        doc.setFont(undefined, 'normal');
        const messageLines = doc.splitTextToSize(applicationData.message, 170);
        doc.text(messageLines, 20, yPos);
        yPos += messageLines.length * 6;
    }
    
    // Pied de page
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text('UMC-AVIA - École de Management', 20, pageHeight - 20);
    doc.text('www.umc-avia.com', 20, pageHeight - 15);
    
    // Sauvegarder le PDF
    const fileName = `Candidature_${applicationData.lastName}_${applicationData.firstName}_${applicationData.applicationNumber}.pdf`;
    doc.save(fileName);
    
    return fileName;
}

// Fallback: génération via impression navigateur
function generatePDFFallback(applicationData) {
    // Créer un document HTML stylisé
    const printWindow = window.open('', '_blank');
    const lang = getCurrentLanguage();
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${lang}">
        <head>
            <meta charset="UTF-8">
            <title>Dossier de Candidature - ${applicationData.applicationNumber}</title>
            <style>
                @page {
                    margin: 2cm;
                }
                body {
                    font-family: Arial, sans-serif;
                    color: #1a1a1a;
                    line-height: 1.6;
                }
                .header {
                    border-bottom: 3px solid #FF6600;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .header h1 {
                    color: #003366;
                    margin: 0;
                    font-size: 24px;
                }
                .header h2 {
                    color: #666;
                    margin: 5px 0;
                    font-size: 16px;
                    font-weight: normal;
                }
                .section {
                    margin-bottom: 25px;
                }
                .section-title {
                    color: #003366;
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #E0E0E0;
                    padding-bottom: 5px;
                }
                .info-row {
                    margin-bottom: 8px;
                }
                .info-label {
                    font-weight: bold;
                    display: inline-block;
                    width: 150px;
                }
                .footer {
                    margin-top: 50px;
                    padding-top: 20px;
                    border-top: 1px solid #E0E0E0;
                    font-size: 12px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>UMC-AVIA</h1>
                <h2>École de Management</h2>
                <h2>Dossier de Candidature</h2>
            </div>
            
            <div class="section">
                <div class="section-title">Informations Générales</div>
                <div class="info-row">
                    <span class="info-label">Numéro de dossier:</span>
                    <span>${applicationData.applicationNumber}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Date de candidature:</span>
                    <span>${applicationData.date}</span>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">Coordonnées du Candidat</div>
                <div class="info-row">
                    <span class="info-label">Nom:</span>
                    <span>${applicationData.lastName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Prénom:</span>
                    <span>${applicationData.firstName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span>${applicationData.email}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Téléphone:</span>
                    <span>${applicationData.phone}</span>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">Formation</div>
                <div class="info-row">
                    <span class="info-label">Formation choisie:</span>
                    <span>${applicationData.program}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Niveau d'études:</span>
                    <span>${applicationData.level}</span>
                </div>
            </div>
            
            ${applicationData.message ? `
            <div class="section">
                <div class="section-title">Message de Motivation</div>
                <p>${applicationData.message.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}
            
            <div class="footer">
                <p><strong>UMC-AVIA - École de Management</strong></p>
                <p>www.umc-avia.com</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Attendre que le document soit chargé puis imprimer
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
        }, 250);
    };
    
    return `Candidature_${applicationData.lastName}_${applicationData.firstName}_${applicationData.applicationNumber}.pdf`;
}

// Fonction pour télécharger le PDF (appelée depuis apply.html)
function downloadApplicationPDF(applicationData) {
    try {
        const fileName = generateApplicationPDF(applicationData);
        showAlert(t('apply.form.success'), 'success');
        return fileName;
    } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
        showAlert('Erreur lors de la génération du PDF. Veuillez réessayer.', 'error');
        return null;
    }
}

