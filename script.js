/* ════════════════════════════════════════════════
   PORTFOLIO – script.js
   - Custom cursor
   - Loader
   - Navbar (scroll + hamburger)
   - Hero canvas (particle field)
   - Hero role rotator + stat counters
   - Scroll reveal
   - Skills tabs / skill bars
   - Projects grid (filter)
   - Experience/Internships timeline (render)
   - Certifications & Achievements section
   - Contact form
   - Active nav link highlight
═══════════════════════════════════════════════ */

"use strict";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const SKILLS = {
  frontend: [
    { icon: "☕", name: "Java", level: 85 },
    { icon: "🐍", name: "Python", level: 80 },
    { icon: "🌐", name: "HTML5", level: 88 },
    { icon: "🎨", name: "CSS3", level: 82 },
    { icon: "📜", name: "JavaScript", level: 78 },
    { icon: "🗄️", name: "MySQL", level: 80 },
  ],
  backend: [
    { icon: "🔬", name: "Selenium WebDriver", level: 82 },
    { icon: "🧪", name: "TestNG", level: 78 },
    { icon: "📋", name: "JIRA", level: 75 },
    { icon: "🔄", name: "Agile Testing", level: 75 },
    { icon: "📦", name: "OOP Concepts", level: 88 },
    { icon: "🧠", name: "Problem Solving", level: 85 },
  ],
  tools: [
    { icon: "⚡", name: "Eclipse IDE", level: 82 },
    { icon: "💻", name: "VS Code", level: 88 },
    { icon: "🐙", name: "GitHub", level: 85 },
    { icon: "📓", name: "Jupyter Notebook", level: 78 },
    { icon: "🤖", name: "scikit-learn", level: 72 },
    { icon: "📊", name: "Pandas / NumPy", level: 72 },
  ],
};

const PROJECTS = [
  {
    emoji: "📞",
    gradient: "linear-gradient(135deg, #1e3a5f, #0a1628)",
    title: "Telephone Directory",
    desc: "A Java-based Telephone Directory application using a doubly linked list, supporting add, delete, update, search, and display of contacts via a menu-driven interface. Features alphabetical insertion, duplicate-name handling, phone-number validation, and a Recycle Bin using stack for fault-tolerant deletions.",
    tags: ["Java", "Doubly Linked List", "Stack", "OOP"],
    category: "java",
    demo: "https://github.com/Dileep4463/Telephone-Directory",
    repo: "https://github.com/Dileep4463/Telephone-Directory",
  },
  {
    emoji: "🛡️",
    gradient: "linear-gradient(135deg, #2d1a3e, #1a0d2d)",
    title: "Malware Detection using ML",
    desc: "A machine learning-based malware detection system in Jupyter Notebook using labeled malware and benign datasets. Implemented Decision Tree, Random Forest, SVM and other classifiers. Performed data preprocessing, feature extraction, model training, and evaluation using Python data science libraries.",
    tags: ["Python", "ML", "scikit-learn", "Jupyter"],
    category: "python",
    demo: "https://github.com/Dileep4463/Malware-Detection-Using-Machine-Learning-Techniques",
    repo: "https://github.com/Dileep4463/Malware-Detection-Using-Machine-Learning-Techniques",
  },
  {
    emoji: "🌐",
    gradient: "linear-gradient(135deg, #1a3a1a, #0d2d12)",
    title: "Personal Portfolio Website",
    desc: "Designed and developed a responsive personal portfolio website using HTML5, CSS3, and JavaScript during the InternPe internship. Implemented responsive navigation with hamburger menus, media queries, smooth section navigation, and integrated GitHub & LinkedIn profile links.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "web",
    demo: "https://dileep4463.github.io/Portfolio2/",
    repo: "https://github.com/Dileep4463/Portfolio2",
  },
];

const EXPERIENCE = [
  {
    emoji: "💼",
    period: "Aug 2025 – Oct 2025",
    role: "Software Quality Engineering & Test Automation",
    company: "DML Logics",
    desc: "Applied software testing principles to improve code reliability and system quality. Designed and automated test scenarios using Java and Selenium WebDriver. Understood software development lifecycle, defect tracking, and quality workflows. Collaborated using JIRA in simulated Agile environments. Practiced regression testing and test design with a focus on improving system stability.",
    tags: ["Selenium WebDriver", "Java", "TestNG", "JIRA", "Agile Testing"],
  },
  {
    emoji: "💼",
    period: "Jun 2023 – Jul 2023",
    role: "Web Developer Intern",
    company: "InternPe Company",
    desc: "Designed and developed a responsive personal portfolio website using HTML5, CSS3, and JavaScript, showcasing skills, projects, education, and contact details in a structured layout. Implemented responsive navigation with desktop and hamburger menus, media queries, and smooth section navigation. Integrated external resources including GitHub repositories and LinkedIn profile.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    emoji: "🎓",
    period: "Dec 2021 – May 2025",
    role: "B.Tech – Computer Science & Engineering (86%)",
    company:
      "Madanapalle Institute of Technology & Science · Angallu, Andhra Pradesh",
    desc: "Pursued Bachelor's degree in Computer Science & Engineering with 86% aggregate. Focused on Java programming, data structures, algorithms, web technologies, database management, and software engineering fundamentals.",
    tags: ["Java", "Python", "DSA", "Web Tech", "MySQL"],
  },
  {
    emoji: "📚",
    period: "Jun 2019 – Apr 2021",
    role: "Intermediate / XII (61%)",
    company: "Sri Vignan Jr. College · O.D.Cheruvu, Andhra Pradesh",
    desc: "Completed Intermediate education in the Science stream, building a foundational knowledge base in Mathematics, Physics, and Chemistry.",
    tags: ["Science Stream", "Mathematics", "Physics"],
  },
  {
    emoji: "🏫",
    period: "Jun 2018 – Jul 2019",
    role: "SSC / X (95%)",
    company: "Z. P. High School · O.D.Cheruvu, Andhra Pradesh",
    desc: "Completed Secondary School Certificate with an outstanding 95% aggregate, demonstrating a strong academic foundation in core subjects.",
    tags: ["SSC", "Science", "Mathematics"],
  },
];

const CERTIFICATIONS = [
  {
    icon: "☕",
    gradient: "linear-gradient(135deg, #1e3a5f, #0a1628)",
    title: "Java Programming – OOP & DSA",
    issuer: "Academic · MITS",
    date: "2023",
    desc: "Mastered Java programming fundamentals, object-oriented programming principles, and data structures including doubly linked lists and stacks through hands-on project development (Telephone Directory application).",
    tags: ["Java", "OOP", "DSA", "Problem Solving"],
    verify: "#",
  },
  {
    icon: "🤖",
    gradient: "linear-gradient(135deg, #2d1a3e, #1a0d2d)",
    title: "Machine Learning with Python",
    issuer: "Academic Project · MITS",
    date: "Apr 2025",
    desc: "Implemented supervised learning algorithms including Decision Tree, Random Forest, and SVM for malware detection. Hands-on experience with scikit-learn, Pandas, NumPy, and Jupyter Notebook for a complete ML pipeline.",
    tags: ["Python", "ML", "scikit-learn", "Jupyter"],
    verify: "#",
  },
  {
    icon: "🔬",
    gradient: "linear-gradient(135deg, #1a3a1a, #0d2d12)",
    title: "Software Quality & Test Automation",
    issuer: "Madanapalle Institute of Technology & Science",
    date: "Oct 2025",
    desc: "Gained hands-on experience in software testing lifecycle, automated test design using Selenium WebDriver & TestNG, defect tracking with JIRA, and regression testing in Agile environments.",
    tags: ["Selenium WebDriver", "TestNG", "JIRA", "Agile"],
    verify: "#",
  },
  {
    icon: "🌐",
    gradient: "linear-gradient(135deg, #3a1a1a, #5e1b1b)",
    title: "Web Developer Internship",
    issuer: "InternPe Company",
    date: "Jul 2023",
    desc: "Completed a web development internship building a fully responsive personal portfolio website using HTML5, CSS3, and JavaScript with hamburger navigation, smooth scroll, and cross-device compatibility.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    verify: "#",
  },
  {
    icon: "🏆",
    gradient: "linear-gradient(135deg, #3a1a3a, #5e1b5e)",
    title: "B.Tech CSE – 86% Aggregate",
    issuer: "Madanapalle Institute of Technology & Science",
    date: "May 2025",
    desc: "Achieved 86% aggregate in B.Tech Computer Science & Engineering across all semesters, demonstrating strong academic performance in algorithms, databases, web technologies, and software engineering.",
    tags: ["B.Tech", "CSE", "86% CGPA"],
    verify: "#",
  },
  {
    icon: "📜",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d1b5e)",
    title: "SSC – 95% Outstanding Score",
    issuer: "Z. P. High School",
    date: "Jul 2019",
    desc: "Scored an outstanding 95% in the Secondary School Certificate examinations, showcasing exceptional academic discipline and a strong foundation in Mathematics, Science, and core subjects.",
    tags: ["SSC", "Academic Excellence", "95%"],
    verify: "#",
  },
];

/* ══════════════════════════════════════════════
   UTILITY
══════════════════════════════════════════════ */
function qs(sel, ctx = document) {
  return ctx.querySelector(sel);
}
function qsa(sel, ctx = document) {
  return [...ctx.querySelectorAll(sel)];
}
function on(el, ev, fn) {
  if (el) el.addEventListener(ev, fn);
}

/* ══════════════════════════════════════════════
   LOADER
══════════════════════════════════════════════ */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = qs("#loader");
    if (loader) loader.classList.add("hidden");
    document.body.style.overflow = "";
  }, 2200);
});
document.body.style.overflow = "hidden";

/* ══════════════════════════════════════════════
   CURSOR
══════════════════════════════════════════════ */
const cursor = qs("#cursor");
const follower = qs("#cursorFollower");
let mouseX = 0,
  mouseY = 0,
  followerX = 0,
  followerY = 0;

if (cursor && follower) {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animFollower);
  }
  animFollower();

  document
    .querySelectorAll(
      "a, button, .skill-card, .project-card, .filter-btn, .tab-btn",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    });
}

/* ══════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════ */
const navbar = qs("#navbar");
const hamburger = qs("#hamburger");
const navLinks = qs("#navLinks");

window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
  highlightNavLink();
});

on(hamburger, "click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks &&
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });

function highlightNavLink() {
  const sections = qsa("section[id]");
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  qsa(".nav-link").forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
}

/* ══════════════════════════════════════════════
   HERO CANVAS (Particle field)
══════════════════════════════════════════════ */
(function initCanvas() {
  const canvas = qs("#heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COLORS = ["#7c3aed", "#a78bfa", "#ec4899", "#22d3ee", "#10b981"];

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 100) * 0.08;
          ctx.strokeStyle = "#7c3aed";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    connect();
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ══════════════════════════════════════════════
   HERO ROLE ROTATOR
══════════════════════════════════════════════ */
(function initRotator() {
  const items = qsa(".role-item");
  if (!items.length) return;
  let idx = 0;

  setInterval(() => {
    items[idx].removeAttribute("data-active");
    items[idx].style.transform = "translateY(-100%)";
    items[idx].style.opacity = "0";
    idx = (idx + 1) % items.length;
    items[idx].style.transform = "translateY(100%)";
    items[idx].style.opacity = "0";
    setTimeout(() => {
      items[idx].setAttribute("data-active", "");
      items[idx].style.transform = "translateY(0)";
      items[idx].style.opacity = "1";
    }, 50);
  }, 2400);
})();

/* ══════════════════════════════════════════════
   STAT COUNTERS
══════════════════════════════════════════════ */
function animateCounter(el) {
  const target = +el.dataset.count;
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 20);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        qsa(
          "[data-count]",
          e.target.closest(".hero-stats") || document,
        ).forEach(animateCounter);
        statsObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 },
);

qsa("[data-count]").forEach((el) => statsObserver.observe(el));

/* ══════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);

qsa(".reveal-left, .reveal-right, .reveal-up").forEach((el) =>
  revealObserver.observe(el),
);

/* ══════════════════════════════════════════════
   SKILLS
══════════════════════════════════════════════ */
const skillsGrid = qs("#skillsGrid");
let activeTab = "frontend";

function renderSkills(tab) {
  if (!skillsGrid) return;
  const data = SKILLS[tab];
  skillsGrid.innerHTML = data
    .map(
      (s, i) => `
    <div class="skill-card reveal-up" style="animation-delay:${i * 0.06}s">
      <span class="skill-icon">${s.icon}</span>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar"><div class="skill-fill" data-level="${s.level}"></div></div>
    </div>
  `,
    )
    .join("");

  setTimeout(() => {
    qsa(".skill-fill", skillsGrid).forEach((el) => {
      el.style.width = el.dataset.level + "%";
    });
    qsa(".skill-card", skillsGrid).forEach((el) => revealObserver.observe(el));
  }, 50);
}

qsa(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    qsa(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTab = btn.dataset.tab;
    renderSkills(activeTab);
  });
});

renderSkills(activeTab);

/* ══════════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════════ */
const projectsGrid = qs("#projectsGrid");

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = PROJECTS.map(
    (p, i) => `
    <div class="project-card reveal-up" data-category="${p.category}" style="animation-delay:${i * 0.08}s">
      <div class="project-thumb">
        <div class="project-thumb-inner" style="background:${p.gradient}">${p.emoji}</div>
        <div class="project-overlay">
          <a href="${p.demo}" class="overlay-btn" id="proj-demo-${i}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
          <a href="${p.repo}" class="overlay-btn" id="proj-repo-${i}">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.47-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
      </div>
    </div>
  `,
  ).join("");

  qsa(".project-card", projectsGrid).forEach((el) =>
    revealObserver.observe(el),
  );
}

function filterProjects(cat) {
  qsa(".project-card").forEach((card) => {
    const match = cat === "all" || card.dataset.category === cat;
    card.classList.toggle("hidden", !match);
  });
}

qsa(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    qsa(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterProjects(btn.dataset.filter);
  });
});

renderProjects();

/* ══════════════════════════════════════════════
   EXPERIENCE TIMELINE
══════════════════════════════════════════════ */
const timeline = qs("#timeline");
if (timeline) {
  timeline.innerHTML = EXPERIENCE.map(
    (e, i) => `
    <div class="timeline-item reveal-up" style="animation-delay:${i * 0.1}s">
      <div class="timeline-dot">${e.emoji}</div>
      <div class="timeline-content">
        <p class="timeline-period">${e.period}</p>
        <h3 class="timeline-role">${e.role}</h3>
        <p class="timeline-company">${e.company}</p>
        <p class="timeline-desc">${e.desc}</p>
        <div class="timeline-tags">${e.tags.map((t) => `<span class="timeline-tag">${t}</span>`).join("")}</div>
      </div>
    </div>
  `,
  ).join("");

  qsa(".timeline-item").forEach((el) => revealObserver.observe(el));
}

/* ══════════════════════════════════════════════
   TESTIMONIALS SLIDER
══════════════════════════════════════════════ */
(function initTestimonials() {
  const slider = qs("#testimonialsSlider");
  const dotsContainer = qs("#sliderDots");
  if (!slider || !dotsContainer) return;

  slider.innerHTML = `<div class="testimonials-track" id="testimonialsTrack">
    ${TESTIMONIALS.map(
      (t) => `
      <div class="testimonial-card">
        <div class="testimonial-quote">"</div>
        <p class="testimonial-text">${t.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initial}</div>
          <div>
            <p class="author-name">${t.name}</p>
            <p class="author-role">${t.role}</p>
          </div>
        </div>
      </div>
    `,
    ).join("")}
  </div>`;

  dotsContainer.innerHTML = TESTIMONIALS.map(
    (_, i) =>
      `<div class="slider-dot ${i === 0 ? "active" : ""}" data-index="${i}"></div>`,
  ).join("");

  const track = qs("#testimonialsTrack");
  let current = 0;

  function goTo(idx) {
    current = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;
    qsa(".slider-dot").forEach((d, i) =>
      d.classList.toggle("active", i === idx),
    );
  }

  qsa(".slider-dot").forEach((dot) => {
    dot.addEventListener("click", () => goTo(+dot.dataset.index));
  });

  // Auto-advance
  setInterval(() => goTo((current + 1) % TESTIMONIALS.length), 5000);
})();

/* ══════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════ */
const contactForm = qs("#contactForm");
on(contactForm, "submit", (e) => {
  e.preventDefault();
  let valid = true;
  ["name", "email", "subject", "message"].forEach((id) => {
    const el = qs("#" + id);
    if (!el) return;
    el.classList.remove("error");
    if (
      !el.value.trim() ||
      (id === "email" && !/\S+@\S+\.\S+/.test(el.value))
    ) {
      el.classList.add("error");
      valid = false;
    }
  });
  if (!valid) return;

  const btn = qs("#submitBtn");
  const btnText = qs("#btnText");
  btn.disabled = true;
  btnText.textContent = "Sending...";

  setTimeout(() => {
    btn.disabled = false;
    btnText.textContent = "Send Message";
    contactForm.reset();
    const success = qs("#formSuccess");
    if (success) {
      success.classList.add("show");
      setTimeout(() => success.classList.remove("show"), 5000);
    }
  }, 1500);
});

/* ══════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════ */
on(qs("#backToTop"), "click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
