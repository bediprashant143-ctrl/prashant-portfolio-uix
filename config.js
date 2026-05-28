/* ============================================================
   CONFIG.JS — EDIT EVERYTHING FROM HERE
   This is the only file you need to touch for most changes.
   ============================================================ */

/* ---------- PERSONAL INFO ---------- */
const INFO = {
  name:       "Prashant Bedi",
  title:      "UIX Designer",
  tagline:    "Open to Freelance & Full-time",
  email:      "bediprashant143@gmail.com",
  phone:      "862 982 1047",
  location:   "Chandigarh, India",
  behance:    "https://www.behance.net/grafiction",
  linkedin:   "https://www.linkedin.com/in/prashant-kumar-028828169/",
  instagram:  "https://www.instagram.com/prick.clicks",
  instaHandle:"@prick.clicks",
  year:       "2026"
};

/* ---------- PROFILE PHOTO ----------
   Replace the URL below with your own photo link.
   HOW TO GET AN IMAGE URL EASILY:
     Option 1 — Upload to imgur.com:
       Go to imgur.com → click "New Post" → upload your photo
       Right-click the image → "Copy image address" → paste below
     Option 2 — From Google Drive:
       Upload photo → right-click → "Get link" → change to Anyone
       The link looks like: https://drive.google.com/file/d/FILEID/view
       Replace it with: https://drive.google.com/uc?id=FILEID
     Option 3 — Any direct image URL ending in .jpg/.png/.webp
   Leave it as "" to show a placeholder silhouette instead.
   ----------------------------------------- */
const PROFILE_PHOTO = "https://pps.services.adobe.com/api/profile/3D8D1E2F653D5AFE0A495EDA@AdobeID/image/8233e7a1-113f-44c3-aa9d-aaa2828c95a0/276";

/* ---------- INSTAGRAM / PHOTOGRAPHY IMAGES ----------
   Paste your Instagram image URLs below — one per line.

   HOW TO GET IMAGE URLS FROM INSTAGRAM:
     1. Open Instagram in a desktop browser (not the app)
     2. Click on any of your posts
     3. Right-click the photo → "Open image in new tab"
     4. Copy the full URL from the address bar
     5. Paste it below inside the quotes

   You can also use any public image URL (Unsplash, Imgur, etc.)
   If a URL is empty "" or broken, a gradient placeholder shows.
   ----------------------------------------- */
const INSTAGRAM_IMAGES = [
  // ADD YOUR INSTAGRAM PHOTO URLS BELOW:
  // "https://example.com/photo1.jpg",
  // "https://example.com/photo2.jpg",
  "",  // slot 1  ← replace "" with your URL
  "",  // slot 2
  "",  // slot 3
  "",  // slot 4
  "",  // slot 5
  "",  // slot 6
  "",  // slot 7
  "",  // slot 8
  "",  // slot 9
  "",  // slot 10
];

/* ---------- PROJECT THUMBNAIL IMAGES ----------
   Replace "" with an image URL to show a real screenshot.
   Leave "" to keep the animated wireframe placeholder.

   TIP: Export your Figma screens → upload to imgur.com
   → paste the direct image link here.
   ----------------------------------------- */
const PROJECT_IMAGES = {
  scryai:     "",   // ScryAI AI Product UX
  bhi:        "",   // Behavioural Healthcare App
  healthcare: "",   // Healthcare Web/Mobile App
  university: "",   // Universities Management Platform
  product:    "",   // Product Transition UI
  travel:     "",   // Travel Guide Mobile App
  pharmacy:   "",   // Medicines Reminder + e-Pharmacy
  rpm:        "",   // RPM Healthcare Mobile App
};

/* ---------- STATS ---------- */
const STATS = [
  { target: 7,   suffix: "+", label: "Years of experience" },
  { target: 50,  suffix: "+", label: "Products shipped" },
  { target: 6,   suffix: "",  label: "Designers led" },
  { target: 112, suffix: "",  label: "Behance appreciations" },
];

/* ---------- PROJECTS DATA ---------- */
const PROJ = {
  scryai:{
    title:'ScryAI — <em>AI Product UX</em>',
    bg:'radial-gradient(ellipse at 70% 30%,#2a1a5e 0%,#0c0515 100%)',
    meta:[{l:'Year',v:'2025–Present'},{l:'Role',v:'Senior UIX Designer'},{l:'Company',v:'ScryAI, Gurugram'},{l:'Focus',v:'AI-powered UX'}],
    body:`<p>At ScryAI I design the human layer on top of complex AI models — making powerful machine intelligence feel approachable and intuitive for business users who aren't data scientists.</p>
    <h2>The <em>Challenge</em></h2>
    <p>AI dashboards are notoriously dense. Users face confidence intervals, model outputs, and real-time data feeds all at once. My role is to apply progressive disclosure, clear hierarchy, and adaptive UI patterns that reveal complexity only when users need it.</p>
    <div class="dmock pAI"><div class="mock" style="width:70%;max-width:500px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb" style="width:55%"></div><div class="mb a" style="width:38%"></div><div class="mch"><div class="mbv a" style="height:70%"></div><div class="mbv" style="height:45%"></div><div class="mbv a" style="height:88%"></div><div class="mbv" style="height:55%"></div><div class="mbv" style="height:72%"></div><div class="mbv a" style="height:65%"></div></div></div></div>
    <h2>Design System <em>at Scale</em></h2>
    <p>I'm establishing and maintaining a design system that ensures consistency, scalability, and accessibility across all of ScryAI's AI-powered product modules.</p>
    <div class="dout-grid"><div class="dout"><div class="dout-num">AI</div><div class="dout-lbl">Adaptive, personalized UI patterns for AI outputs</div></div><div class="dout"><div class="dout-num">∞</div><div class="dout-lbl">Scalable design system across multiple AI product modules</div></div><div class="dout"><div class="dout-num">↑</div><div class="dout-lbl">UX lift through ongoing usability testing with real users</div></div></div>`
  },
  bhi:{
    title:'Behavioural Healthcare — <em>Intelligent App</em>',
    bg:'radial-gradient(ellipse at 30% 70%,#1a3a55 0%,#040d1a 100%)',
    meta:[{l:'Year',v:'2024'},{l:'Role',v:'Lead UIX Designer'},{l:'Platform',v:'Web + Mobile'},{l:'Behance',v:'33 appreciations'}],
    behanceUrl:'https://www.behance.net/gallery/246589307/Intelligence-Based-Behavioural-Healthcare-Application',
    body:`<p>An intelligence-based behavioural healthcare application designed to support mental health practitioners and patients alike — one of my highest-appreciated projects on Behance with 1,313 views.</p>
    <h2>Human-centred <em>Mental Health UX</em></h2>
    <p>Mental health apps require exceptional sensitivity in design. Every interaction was designed to feel calm, non-judgmental, and clear.</p>
    <div class="dmock pHC"><div style="display:flex;gap:20px;width:75%"><div class="mock" style="flex:1"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb" style="width:60%"></div><div class="mb a" style="width:38%"></div><div class="mr"><div class="mbox a"></div><div class="mbox"></div><div class="mbox a"></div></div></div><div class="mock" style="flex:1"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb a" style="width:45%"></div><div class="mr"><div class="mbox"></div><div class="mbox a"></div></div></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">33</div><div class="dout-lbl">Appreciations from the Behance design community</div></div><div class="dout"><div class="dout-num">1,313</div><div class="dout-lbl">Project views on Behance</div></div><div class="dout"><div class="dout-num">★</div><div class="dout-lbl">Featured in healthcare UX design category</div></div></div>`
  },
  healthcare:{
    title:'Healthcare <em>Web/Mobile App</em>',
    bg:'radial-gradient(ellipse at 40% 60%,#1a3a55 0%,#040d1a 100%)',
    meta:[{l:'Year',v:'2024'},{l:'Role',v:'Lead UIX Designer'},{l:'Platform',v:'Web + iOS + Android'},{l:'Behance',v:'44 appreciations'}],
    behanceUrl:'https://www.behance.net/gallery/202689359/Healthcare-WebMobile-Application',
    body:`<p>A comprehensive healthcare platform covering appointment booking, remote patient monitoring (RPM), e-pharmacy, and medication management.</p>
    <h2>One Platform, <em>Many Workflows</em></h2>
    <p>Healthcare users are diverse — doctors, patients, caregivers, and pharmacists all use the same system with vastly different needs.</p>
    <div class="dmock pHC"><div style="display:flex;gap:20px;flex-wrap:wrap;width:80%"><div class="mock" style="flex:1;min-width:140px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb" style="width:55%"></div><div class="mr"><div class="mbox a"></div><div class="mbox"></div></div></div><div class="mock" style="flex:1;min-width:140px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb a" style="width:48%"></div><div class="mr"><div class="mbox"></div><div class="mbox a"></div></div></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">44</div><div class="dout-lbl">Appreciations — most appreciated project</div></div><div class="dout"><div class="dout-num">3</div><div class="dout-lbl">Core modules: Appointments, RPM, e-Pharmacy</div></div><div class="dout"><div class="dout-num">58</div><div class="dout-lbl">Behance views and counting</div></div></div>`
  },
  university:{
    title:'Universities <em>Management Platform</em>',
    bg:'radial-gradient(ellipse at 40% 60%,#0d3d26 0%,#020e08 100%)',
    meta:[{l:'Year',v:'2024'},{l:'Role',v:'UIX Designer'},{l:'Platform',v:'Web'},{l:'Domain',v:'EdTech / SaaS'}],
    behanceUrl:'https://www.behance.net/gallery/201811393/Universities-management-web-Platform',
    body:`<p>A web-based platform for managing multiple universities — student records, faculty management, admission workflows, and institutional analytics.</p>
    <h2>Taming <em>Complex Information</em></h2>
    <p>University management involves deeply hierarchical data. The navigation scales from a single department to an entire university group.</p>
    <div class="dmock pUni"><div class="mock" style="width:75%;max-width:500px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb a" style="width:45%"></div><div class="mr"><div class="mbox a"></div><div class="mbox"></div><div class="mbox a"></div></div><div class="mb" style="width:65%;margin-top:10px"></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">3</div><div class="dout-lbl">Appreciations from the Behance design community</div></div><div class="dout"><div class="dout-num">36</div><div class="dout-lbl">Behance project views</div></div><div class="dout"><div class="dout-num">∞</div><div class="dout-lbl">Scalable information architecture for multi-campus use</div></div></div>`
  },
  travel:{
    title:'Travel Guide <em>Mobile App</em>',
    bg:'radial-gradient(ellipse at 50% 30%,#1a2a3a 0%,#030810 100%)',
    meta:[{l:'Year',v:'2023'},{l:'Role',v:'UIX Designer'},{l:'Platform',v:'iOS + Android'},{l:'Behance',v:'41 views'}],
    body:`<p>An immersive travel guide mobile application — helping explorers discover destinations, plan itineraries, and navigate experiences with a beautiful, minimal interface.</p>
    <h2>Design for <em>Wanderers</em></h2>
    <p>Full-bleed imagery-first layout, gesture-driven navigation, and offline-friendly design patterns.</p>
    <div class="dmock pTrv"><div class="mock" style="width:40%;max-width:200px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb" style="width:55%"></div><div class="mr"><div class="mbox a"></div><div class="mbox"></div></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">2</div><div class="dout-lbl">Behance appreciations</div></div><div class="dout"><div class="dout-num">41</div><div class="dout-lbl">Behance project views</div></div><div class="dout"><div class="dout-num">✦</div><div class="dout-lbl">Imagery-first, gesture-driven mobile UI</div></div></div>`
  },
  product:{
    title:'Product Transition <em>UI</em>',
    bg:'radial-gradient(ellipse at 60% 40%,#3a2a1a 0%,#100805 100%)',
    meta:[{l:'Year',v:'2023'},{l:'Role',v:'UIX Designer'},{l:'Platform',v:'Mobile'},{l:'Behance',v:'4 appreciations'}],
    body:`<p>A product transition UI for a mobile e-commerce application — focusing on smooth animations, micro-interactions, and a satisfying browsing experience.</p>
    <h2>Motion as <em>Design Language</em></h2>
    <p>Every animation was designed to reinforce the mental model of the product catalogue, guiding users intuitively between views.</p>
    <div class="dmock pMob"><div class="mock" style="width:45%;max-width:200px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb" style="width:50%"></div><div class="mr"><div class="mbox a"></div><div class="mbox"></div></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">4</div><div class="dout-lbl">Behance appreciations</div></div><div class="dout"><div class="dout-num">35</div><div class="dout-lbl">Behance project views</div></div><div class="dout"><div class="dout-num">✦</div><div class="dout-lbl">Micro-interaction driven engagement design</div></div></div>`
  },
  pharmacy:{
    title:'Medicines Reminder + <em>e-Pharmacy</em>',
    bg:'radial-gradient(ellipse at 35% 65%,#3a1a2a 0%,#100508 100%)',
    meta:[{l:'Year',v:'2023'},{l:'Role',v:'UIX Designer'},{l:'Platform',v:'Mobile'},{l:'Behance',v:'108 views'}],
    behanceUrl:'https://www.behance.net/gallery/189552459/Medicines-Reminder-e-pharmacy-Appointment-booking',
    body:`<p>A mobile healthcare application combining medicines reminders, an e-pharmacy marketplace, and appointment booking.</p>
    <h2>Healthcare in <em>Every Pocket</em></h2>
    <p>Accessibility was paramount — large touch targets, clear typography, and voice-friendly reminder flows for elderly users.</p>
    <div class="dmock pRPM"><div class="mock" style="width:50%;max-width:220px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb" style="width:60%"></div><div class="mb a" style="width:38%"></div><div class="mr"><div class="mbox"></div><div class="mbox a"></div></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">108</div><div class="dout-lbl">Behance project views — highest viewed project</div></div><div class="dout"><div class="dout-num">3-in-1</div><div class="dout-lbl">Reminders, e-pharmacy, and appointment booking</div></div><div class="dout"><div class="dout-num">♿</div><div class="dout-lbl">Accessibility-first design for elderly users</div></div></div>`
  },
  rpm:{
    title:'RPM Healthcare <em>Mobile App</em>',
    bg:'radial-gradient(ellipse at 35% 65%,#3a1a2a 0%,#100508 100%)',
    meta:[{l:'Year',v:'2022'},{l:'Role',v:'UIX Designer'},{l:'Platform',v:'Mobile'},{l:'Domain',v:'Remote Patient Monitoring'}],
    body:`<p>A Remote Patient Monitoring application enabling continuous health data collection and communication between patients and healthcare providers.</p>
    <h2>Continuous Care, <em>Beautiful UX</em></h2>
    <p>The design had to be reassuring, not alarming, while surfacing critical alerts when needed.</p>
    <div class="dmock pRPM"><div class="mock" style="width:50%;max-width:220px"><div class="mh"><div class="md"></div><div class="md"></div><div class="md"></div></div><div class="mb a" style="width:50%"></div><div class="mch"><div class="mbv a" style="height:60%"></div><div class="mbv" style="height:40%"></div><div class="mbv a" style="height:80%"></div><div class="mbv" style="height:55%"></div></div></div></div>
    <div class="dout-grid"><div class="dout"><div class="dout-num">RPM</div><div class="dout-lbl">Real-time patient health monitoring interface</div></div><div class="dout"><div class="dout-num">18</div><div class="dout-lbl">Behance project views</div></div><div class="dout"><div class="dout-num">♡</div><div class="dout-lbl">Calm, reassuring UI for daily health check-ins</div></div></div>`
  }
};
