/**
 * Fingevity Showcase - Form Handling
 * Handles contact form submission via Formspree
 */

/**
 * Show a notification toast
 * @param {string} message - Message to display
 * @param {string} type - Type: 'success', 'error', 'info'
 */
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification-toast');
  if (existing) {
    existing.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification-toast fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-y-full opacity-0`;
  
  // Set colors based on type
  switch (type) {
    case 'success':
      notification.classList.add('bg-green-600', 'text-white');
      break;
    case 'error':
      notification.classList.add('bg-red-600', 'text-white');
      break;
    default:
      notification.classList.add('bg-primary', 'text-white');
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-y-full', 'opacity-0');
  }, 10);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-y-full', 'opacity-0');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Initialize contact form handling
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.name.trim()) {
      showNotification('Inserisci il tuo nome e cognome', 'error');
      return;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
      showNotification('Inserisci un indirizzo email valido', 'error');
      return;
    }
    
    if (!data.company || !data.company.trim()) {
      showNotification('Inserisci il nome della tua azienda', 'error');
      return;
    }
    
    if (!data.message || !data.message.trim()) {
      showNotification('Inserisci un messaggio', 'error');
      return;
    }
    
    // Check privacy checkbox
    const privacyCheckbox = document.getElementById('privacy');
    if (privacyCheckbox && !privacyCheckbox.checked) {
      showNotification('Devi accettare la Privacy Policy', 'error');
      return;
    }
    
    // Get submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Disable button and show loading state
    submitBtn.textContent = 'Invio in corso...';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    
    try {
      // Get form action (Formspree endpoint)
      const formAction = form.getAttribute('action');
      
      if (!formAction || formAction.includes('YOUR_FORM_ID')) {
        // Demo mode - no Formspree configured
        showNotification('Modalità demo: configura Formspree per abilitare l\'invio', 'info');
        
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showNotification('Messaggio ricevuto! (Modalità demo)', 'success');
        form.reset();
        return;
      }
      
      // Send to Formspree
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        showNotification('Messaggio inviato con successo! Ti risponderemo presto.', 'success');
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Errore nell\'invio del messaggio');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      showNotification('Si è verificato un errore. Riprova più tardi.', 'error');
    } finally {
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
    }
  });
}

/**
 * Initialize newsletter form handling
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (!email || !isValidEmail(email)) {
      showNotification('Inserisci un indirizzo email valido', 'error');
      return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'Iscrizione...';
    submitBtn.disabled = true;
    
    try {
      // Simulate API call (replace with actual newsletter service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showNotification('Iscrizione completata! Riceverai presto i nostri aggiornamenti.', 'success');
      emailInput.value = '';
    } catch (error) {
      showNotification('Errore durante l\'iscrizione. Riprova.', 'error');
    } finally {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }
  });
}

/**
 * Handle "Richiedi Demo" button click in contact page sidebar
 */
function initDemoButton() {
  const demoBtn = document.getElementById('demo-btn');
  
  if (!demoBtn) return;
  
  demoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const reasonSelect = document.getElementById('reason');
    if (reasonSelect) {
      reasonSelect.value = 'demo';
      
      // Scroll to form
      const form = document.getElementById('contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Focus on name field
      const nameInput = document.getElementById('name');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500);
      }
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initNewsletterForm();
  initDemoButton();
});
