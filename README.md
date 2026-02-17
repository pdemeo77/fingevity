# Fingevity Showcase

Sito vetrina HTML/CSS/JavaScript per Fingevity - consulenza finanziaria innovativa per la longevità.

## 🌟 Caratteristiche

- **8 pagine HTML** statiche completamente funzionali
- **Tailwind CSS** via CDN per styling rapido e responsive
- **JavaScript vanilla** per interazioni (menu mobile, form)
- **Form contatti** integrato con Formspree
- **Design responsive** per desktop, tablet e mobile
- **Nessun build step** richiesto

## 📁 Struttura

```
fingevity-showcase/
├── index.html              # Home page
├── cosa-facciamo.html      # Chi siamo e cosa facciamo
├── prodotti-servizi.html   # Fingevity Simulator e servizi
├── pubblicazioni.html      # Pubblicazioni scientifiche
├── insights.html           # Blog e articoli
├── formazione.html         # Corsi e certificazioni
├── partnership.html        # Partnership e collaborazioni
├── contatti.html           # Form di contatto
├── css/
│   └── styles.css          # Stili custom
├── js/
│   ├── main.js             # Header/Footer injection
│   ├── icons.js            # SVG icons
│   └── form.js             # Gestione form
├── assets/
│   └── images/             # Immagini e favicon
└── README.md               # Questo file
```

## 🚀 Sviluppo Locale

1. **Clona il repository**
   ```bash
   git clone https://github.com/USERNAME/fingevity-showcase.git
   cd fingevity-showcase
   ```

2. **Apri nel browser**
   
   Basta aprire `index.html` nel browser. Nessun server richiesto!
   
   Oppure usa un server locale:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (npx)
   npx serve
   ```

3. **Naviga il sito**
   
   Vai su `http://localhost:8000` (o la porta indicata)

## ⚙️ Configurazione Form

Il form contatti utilizza [Formspree](https://formspree.io) per l'invio delle email.

### Setup

1. Crea un account gratuito su [formspree.io](https://formspree.io)
2. Crea un nuovo form
3. Copia il tuo form ID (es. `xyzabcde`)
4. Modifica `contatti.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Sostituisci `YOUR_FORM_ID` con il tuo ID

### Modalità Demo

Se non configuri Formspree, il form funziona in modalità demo con notifiche simulate.

## 🎨 Personalizzazione

### Colori

Modifica i colori in ogni file HTML nel blocco `tailwind.config`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',    // Blu scuro
        secondary: '#f39c12',   // Arancione
        accent: '#e74c3c'       // Rosso
      }
    }
  }
}
```

### Contenuti

I contenuti sono direttamente nei file HTML. Modifica i testi secondo le esigenze.

### Header/Footer

Header e Footer sono gestiti centralmente in `js/main.js`. Modifica le costanti `headerHTML` e `footerHTML`.

## 📦 Deploy

Il sito può essere deployato su qualsiasi piattaforma di hosting statico:

### GitHub Pages

```bash
# Dalla cartella del progetto
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/fingevity-showcase.git
git push -u origin main

# Poi attiva GitHub Pages dalle impostazioni del repo
```

### Netlify

1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella `fingevity-showcase` sulla dashboard
3. Oppure collega il repository GitHub

### Vercel

```bash
npx vercel
```

## 🔧 Tecnologie

- **HTML5** - Struttura semantica
- **Tailwind CSS** - Framework CSS utility-first (via CDN)
- **JavaScript ES6+** - Interazioni vanilla
- **Formspree** - Backend per form
- **Google Fonts** - Inter font family

## 📱 Responsive Design

Il sito è ottimizzato per:
- **Desktop** - 1024px+
- **Tablet** - 768px - 1023px
- **Mobile** - < 768px

## 📄 Licenza

© 2024 Fingevity. Tutti i diritti riservati.

## 🤝 Contribuire

Per modifiche e miglioramenti:

1. Fork del repository
2. Crea un branch (`git checkout -b feature/miglioramento`)
3. Commit delle modifiche (`git commit -m 'Aggiunto miglioramento'`)
4. Push sul branch (`git push origin feature/miglioramento`)
5. Apri una Pull Request

## 📞 Contatti

- **Email**: info@fingevity.it
- **LinkedIn**: [fingevity](https://linkedin.com/company/fingevity)
- **Twitter**: [@fingevity](https://twitter.com/fingevity)

---

**Fingevity** - La longevità è una variabile. Non un'incognita.
