import { renderFooter } from '../../components/footer.js';

const app = document.getElementById('app');
document.body.classList.add('no-scroll-mode');

const siteData = {
  vovLogo: '../../assets/EVAI Logo.svg',
  infographic: {
    imageSrc: '../../assets/VOV landing page image.png',
    imageAlt: 'The VOV Process: Investigation status and evidence classification'
  },
  featuredInvestigation: {
    id: '000041',
    question: 'Why does the Starlink app report different speeds than Ookla?',
    classification: 'Verified',
    status: 'Investigation Complete',
    completedDate: 'JULY 5, 2026',
    buttons: [
      { label: 'Read Investigation', href: '#investigation-000041' },
      { label: 'Watch Video', href: '#' },
      { label: 'Download Report', href: '#' }
    ]
  },
  currentInvestigations: [
    {
      id: '000042',
      status: 'Under Investigation',
      expectedCompletion: 'AUG 28, 2026',
      progress: 45,
      question: 'Solar Panel Efficiency in Winter Climates'
    },
    {
      id: '000043',
      status: 'Evidence Review',
      expectedCompletion: 'JUL 30, 2026',
      progress: 65,
      question: 'Portable Battery Pack Discharge Rates'
    }
  ],
  trustValues: ['Independent', 'Transparent', 'Evidence-Based', 'Repeatable', 'Documented', 'Accountable'],
  categories: ['Starlink', 'Portable Power', 'Solar', 'Networking', 'Remote Work', 'AI Tools', 'Cybersecurity', 'Vehicle Technology'],
  footer: {
    logoSrc: '../../assets/EVAI Logo.svg',
    logoAlt: 'EVAI Logo',
    publishedBy: 'Off Grid TV',
    governedBy: 'The VOV Standard',
    initiative: 'An EVAI Initiative'
  }
};

app.innerHTML = `
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <p class="hero-kicker">VOV VERIFIED</p>
      <div class="hero-logo">
        <img src="${siteData.vovLogo}" alt="VOV Logo" class="vov-logo-large" />
      </div>
      <h1>Independent Verification<br>for Real-World Decisions</h1>
      <p class="hero-lead">A simple question shouldn't require twenty websites, six videos, two AI conversations, and a Reddit rabbit hole.</p>
      <p class="hero-description">VOV independently investigates real-world claims through transparent methodology, documented evidence, and public results.</p>
      <div class="hero-buttons">
        <a href="#investigations" class="btn btn-primary">Browse Investigations</a>
        <a href="#standard" class="btn btn-secondary">Read the VOV Standard</a>
      </div>
      <div class="hero-publisher">
        <p>Published by Off Grid TV</p>
        <p>An EVAI Initiative</p>
      </div>
    </div>
  </section>

  <!-- The VOV Process -->
  <section class="vov-process">
    <div class="container">
      <h2>The VOV Process</h2>
      <img src="${siteData.infographic.imageSrc}" alt="${siteData.infographic.imageAlt}" class="process-infographic" />
    </div>
  </section>

  <!-- Footer -->
  ${renderFooter(siteData.footer)}
`;
