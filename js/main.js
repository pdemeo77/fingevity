/**
 * Fingevity Showcase - Main JavaScript
 * Handles Header/Footer injection and mobile menu
 */

// Get current page filename for active state
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return filename;
}

// Header HTML template
const headerHTML = `
  <header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <nav class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Logo -->
      <a href="index.html" class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-primary">Fingevity</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex lg:items-center lg:space-x-6">
        <a href="cosa-facciamo.html" class="nav-link" data-page="cosa-facciamo.html">Cosa Facciamo</a>
        <a href="chi-siamo.html" class="nav-link" data-page="chi-siamo.html">Chi Siamo</a>
        <a href="metriche.html" class="nav-link" data-page="metriche.html">Metriche</a>
        <a href="prodotti-servizi.html" class="nav-link" data-page="prodotti-servizi.html">Prodotti</a>
        <a href="insights.html" class="nav-link" data-page="insights.html">Insights</a>
        <a href="formazione.html" class="nav-link" data-page="formazione.html">Formazione</a>
        <a href="contatti.html" class="nav-link" data-page="contatti.html">Contatti</a>
      </div>

      <!-- CTA Button -->
      <div class="hidden lg:flex lg:items-center lg:space-x-4">
        <a href="contatti.html" class="btn btn-primary">
          Richiedi Demo
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        id="mobile-menu-btn"
        class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
        aria-expanded="false"
      >
        <span class="sr-only">Apri menu</span>
        <span id="menu-icon-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </span>
        <span id="menu-icon-close" class="hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="lg:hidden hidden transition-all duration-300 ease-in-out">
      <div class="container mx-auto px-4 py-4 space-y-2 bg-white border-t">
        <a href="cosa-facciamo.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="cosa-facciamo.html">Cosa Facciamo</a>
        <a href="chi-siamo.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="chi-siamo.html">Chi Siamo</a>
        <a href="metriche.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="metriche.html">Metriche</a>
        <a href="prodotti-servizi.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="prodotti-servizi.html">Prodotti</a>
        <a href="insights.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="insights.html">Insights</a>
        <a href="formazione.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="formazione.html">Formazione</a>
        <a href="contatti.html" class="block py-2 text-base font-medium text-gray-700 hover:text-primary mobile-nav-link" data-page="contatti.html">Contatti</a>
        <div class="pt-4">
          <a href="contatti.html" class="btn btn-primary w-full text-center block">Richiedi Demo</a>
        </div>
      </div>
    </div>
  </header>
`;

// Footer HTML template
const footerHTML = `
  <footer class="bg-primary text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <a href="index.html" class="text-2xl font-bold">
            Fingevity
          </a>
          <p class="mt-4 text-gray-300 max-w-md">
            La longevità è una variabile. Non un'incognita. 
            Strumenti analitici avanzati per consulenti che vogliono pianificare 
            il futuro dei loro clienti considerando ogni scenario di sopravvivenza.
          </p>
          <div class="flex space-x-4 mt-6">
            <a
              href="https://linkedin.com/company/fingevity"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href="https://twitter.com/fingevity"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a
              href="mailto:info@fingevity.it"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">
            Azienda
          </h3>
          <ul class="space-y-3">
            <li>
              <a href="cosa-facciamo.html" class="text-gray-300 hover:text-white transition-colors">
                Cosa Facciamo
              </a>
            </li>
            <li>
              <a href="cosa-facciamo.html#chi-siamo" class="text-gray-300 hover:text-white transition-colors">
                Chi Siamo
              </a>
            </li>
            <li>
              <a href="contatti.html" class="text-gray-300 hover:text-white transition-colors">
                Carriere
              </a>
            </li>
          </ul>
        </div>

        <!-- Products Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">
            Prodotti
          </h3>
          <ul class="space-y-3">
            <li>
              <a href="prodotti-servizi.html" class="text-gray-300 hover:text-white transition-colors">
                Fingevity Simulator
              </a>
            </li>
            <li>
              <a href="pubblicazioni.html" class="text-gray-300 hover:text-white transition-colors">
                Pubblicazioni
              </a>
            </li>
            <li>
              <a href="formazione.html" class="text-gray-300 hover:text-white transition-colors">
                Formazione
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">
            Risorse
          </h3>
          <ul class="space-y-3">
            <li>
              <a href="insights.html" class="text-gray-300 hover:text-white transition-colors">
                Insights
              </a>
            </li>
            <li>
              <a href="partnership.html" class="text-gray-300 hover:text-white transition-colors">
                Partnership
              </a>
            </li>
            <li>
              <a href="contatti.html" class="text-gray-300 hover:text-white transition-colors">
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-300 text-sm">
            © <span id="current-year"></span> Fingevity. Tutti i diritti riservati.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="privacy.html" class="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="termini.html" class="text-gray-300 hover:text-white text-sm transition-colors">
              Termini di Servizio
            </a>
            <a href="cookie.html" class="text-gray-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', isHidden);
    
    // Toggle icons
    if (isHidden) {
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
    } else {
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
}

/**
 * Set active state for current page in navigation
 */
function setActivePage() {
  const currentPage = getCurrentPage();
  
  // Desktop nav
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-gray-700');
    }
  });
  
  // Mobile nav
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-gray-700');
    }
  });
}

/**
 * Set current year in footer
 */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Initialize all components on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inject header and footer
  const headerPlaceholder = document.getElementById('header');
  const footerPlaceholder = document.getElementById('footer');
  
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;
  }
  
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
  
  // Initialize components
  initMobileMenu();
  setActivePage();
  setCurrentYear();
  
  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
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
});
