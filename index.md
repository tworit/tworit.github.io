---
layout: default
title: Dr. Tworit Dash | Model-Based Inference Researcher
---
<div id="top" class="hero shell">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot"></span> Model-Based Inference Researcher · TU Delft</p>
    <p class="hero-name">Tworit Dash</p>
    <h1>I find structure<br>in <span>measurements.</span></h1>
    <p class="lede">I combine physical models, spectral estimation, and information theory to understand what data contains, what it loses, and why—across signals and electromagnetics.</p>
    <div class="actions"><a class="button primary" href="#publications">Explore my work <span aria-hidden="true">↓</span></a><a class="button secondary" href="{{ '/Tworit_Kumar_Dash_Resume.pdf' | relative_url }}">Download CV <span aria-hidden="true">↗</span></a></div>
    <div class="socials" aria-label="Profile links"><a href="https://orcid.org/0000-0003-3127-8841">ORCID</a><a href="https://research.tudelft.nl/en/persons/tk-dash/">TU Delft</a><a href="https://github.com/tworitdash">GitHub</a></div>
  </div>
  <div class="inference-ecosystem">
    <div class="inference-card" aria-label="A shared model-based inference core">
      <div class="inference-head"><span>INVERSE_PROBLEM</span><span>θ̂ = arg max ℒ(θ|y)</span></div>
      <svg class="inference-map" viewBox="0 0 520 385" role="img" aria-label="Measurements pass through physical and statistical models to reveal information geometry and an estimate">
        <defs><linearGradient id="trace" x1="0" x2="1"><stop stop-color="#9a6547"/><stop offset="1" stop-color="#c9875f"/></linearGradient><radialGradient id="likelihood"><stop stop-color="#c9875f" stop-opacity=".22"/><stop offset="1" stop-color="#9a6547" stop-opacity="0"/></radialGradient></defs>
        <g class="grid-lines"><path d="M40 55H480M40 125H480M40 195H480M40 265H480M40 335H480"/><path d="M80 30V370M160 30V370M240 30V370M320 30V370M400 30V370"/></g>
        <text x="42" y="23">MEASURED SPECTRUM · y(f)</text>
        <path class="spectrum-shadow" d="M42 115 C70 112 78 105 93 108 S118 122 134 110 S157 84 171 109 S199 123 212 101 S232 61 252 107 S278 124 291 105 S309 79 323 105 S351 117 367 102 S391 93 405 108 S442 113 478 106"/>
        <path class="spectrum" d="M42 115 C70 112 78 105 93 108 S118 122 134 110 S157 84 171 109 S199 123 212 101 S232 61 252 107 S278 124 291 105 S309 79 323 105 S351 117 367 102 S391 93 405 108 S442 113 478 106"/>
        <g class="flow"><path d="M260 144V182"/><path d="M254 174L260 182 266 174"/></g>
        <text x="42" y="190">MODEL · p(y|θ)</text><text class="equation" x="42" y="220">physics + statistics</text>
        <g class="model-nodes"><circle cx="218" cy="210" r="5"/><circle cx="260" cy="210" r="5"/><circle cx="302" cy="210" r="5"/><path d="M223 210H255M265 210H297"/></g>
        <g class="flow"><path d="M260 235V273"/><path d="M254 265L260 273 266 265"/></g>
        <text x="42" y="286">INFORMATION GEOMETRY · ℒ(θ)</text>
        <g class="contours" transform="translate(335 326) rotate(-18)"><ellipse rx="100" ry="42"/><ellipse rx="72" ry="29"/><ellipse rx="43" ry="16"/><circle r="4"/></g>
        <path class="bound" d="M74 342 C118 294 164 300 203 328 S272 365 315 332"/><circle class="estimate" cx="203" cy="328" r="5"/><text class="estimate-label" x="211" y="322">θ̂</text>
      </svg>
      <div class="inference-foot"><span>PHYSICAL MODELS</span><span>INFORMATION</span><span class="accent">INFERENCE</span></div>
    </div>
    <div class="external-branches" aria-label="Application branches">
      <span class="branch-trunk" aria-hidden="true"></span>
      <article class="branch-card radar-branch">
        <svg viewBox="0 0 100 64" role="img" aria-label="Radar beams sampling weather"><path d="M50 56V31M45 56H55M50 31L16 8M50 31L84 8M50 31V5"/><path class="branch-fill" d="M15 8Q27 23 39 25M85 8Q73 23 61 25"/><circle cx="50" cy="31" r="4"/></svg>
        <div><span>01 · Weather sensing</span><h3>Radar & atmospheric retrievals</h3></div>
      </article>
      <article class="branch-card spectra-branch">
        <svg viewBox="0 0 100 64" role="img" aria-label="A spectrum and information bound"><path d="M7 51H94M9 49C21 47 24 39 31 45S43 52 49 30 58 10 64 38 76 47 92 43"/><path class="branch-dash" d="M64 9V52"/></svg>
        <div><span>02 · Information</span><h3>Spectra, aliasing & bounds</h3></div>
      </article>
      <article class="branch-card antenna-branch">
        <svg viewBox="0 0 100 64" role="img" aria-label="Antenna array and spherical waves"><path d="M10 49H90M22 43V55M39 43V55M56 43V55M73 43V55"/><path class="branch-fill" d="M48 38Q57 23 67 38M40 38Q57 8 76 38"/></svg>
        <div><span>03 · Electromagnetics</span><h3>Antenna & field measurements</h3></div>
      </article>
    </div>
  </div></div>

<section id="research" class="section shell">
  <div class="section-heading split"><div><p class="kicker">01 / Research</p><h2>Understanding before optimizing.</h2></div><p class="section-note">I look beyond a working technique to ask what makes it work, where information is lost, and which limits no algorithm can overcome.</p></div>
  <div class="research-grid">
    <article><span class="glyph">∫</span><h3>Model-based inference</h3><p>Turning physical structure into interpretable inverse problems—and exposing identifiability, ambiguity, and fundamental limits.</p></article>
    <article><span class="glyph">ℐ</span><h3>Spectra & information</h3><p>Studying spectral estimation, aliasing, likelihood geometry, and Cramér–Rao bounds to understand what measurements truly support.</p></article>
    <article><span class="glyph">Ψ</span><h3>Signals meet fields</h3><p>Connecting statistical signal processing with electromagnetics, from Doppler radar to antenna arrays and spherical-wave measurements.</p></article>
  </div>
</section>

<section id="publications" class="section publications-section"><div class="shell">
  <div class="section-heading split"><div><p class="kicker">02 / Publications</p><h2>Research log</h2></div><p class="section-note">Peer-reviewed papers, conference contributions, theses, and preprints. Updated August 2026.</p></div>
  <div class="filterbar" role="group" aria-label="Filter publications"><button class="filter active" data-filter="all" aria-pressed="true">All <span>{{ site.data.publications | size }}</span></button><button class="filter" data-filter="journal" aria-pressed="false">Journals</button><button class="filter" data-filter="conference" aria-pressed="false">Conferences</button><button class="filter" data-filter="preprint" aria-pressed="false">Preprints</button><button class="filter" data-filter="thesis" aria-pressed="false">Theses</button></div>
  <div class="publication-list">{% assign grouped = site.data.publications | group_by: 'year' %}{% for year in grouped %}<div class="year-group" data-year-group><div class="year"><span>{{ year.name }}</span></div><div>{% for paper in year.items %}<article class="publication" data-type="{{ paper.type }}"><div class="pub-meta"><span class="tag {{ paper.type }}">{{ paper.type }}</span><span>{{ paper.venue }}</span><span>{{ paper.published }}</span></div><h3><button class="paper-title" type="button" data-paper-open>{{ paper.title }}</button></h3><p>{{ paper.authors }}</p><div class="paper-actions"><button class="paper-link paper-note-link" type="button" data-paper-open>Key ideas <span aria-hidden="true">＋</span></button><a class="paper-link" href="{{ paper.url }}">{% if paper.link_label %}{{ paper.link_label }}{% else %}Publisher{% endif %} <span aria-hidden="true">↗</span></a></div><div class="paper-detail" hidden><p class="dialog-domain">{{ paper.domain }}</p><h2>{{ paper.title }}</h2><p class="dialog-citation">{{ paper.authors }} · {{ paper.venue }} · {{ paper.published }}{% if paper.volume_year %}<br>{{ paper.volume_year }}{% endif %}</p><p class="dialog-summary">{{ paper.summary }}</p><h3>Key messages</h3><ul>{% for point in paper.key_points %}<li>{{ point }}</li>{% endfor %}</ul><a class="button dialog-doi" href="{{ paper.url }}">Open native record <span aria-hidden="true">↗</span></a></div></article>{% endfor %}</div></div>{% endfor %}</div>
</div></section>

<dialog class="paper-dialog" id="paper-dialog">
  <button class="dialog-close" type="button" aria-label="Close paper details">×</button>
  <div class="dialog-content"></div>
</dialog>
<section id="software" class="section shell">
  <div class="section-heading split"><div><p class="kicker">03 / Open work</p><h2>Tools & data</h2></div><p class="section-note">Reproducible implementations of the models behind my work—from spectral inference to electromagnetic field analysis.</p></div>
  <div class="project-grid">{% for project in site.data.projects %}<a class="project" href="{{ project.url }}"><div><span class="project-kind">{{ project.kind }}</span><span aria-hidden="true">↗</span></div><h3>{{ project.name }}</h3><p>{{ project.description }}</p><code>{{ project.code }}</code></a>{% endfor %}</div>
</section>

<section id="archive" class="section archive-section"><div class="shell">
  <div class="section-heading split"><div><p class="kicker">04 / From the archive</p><h2>The same questions,<br>before the lab.</h2></div><p class="section-note">Selected writing from 2014–2019: Ruby conferences, robots, hand-built Fourier transforms, and an early encounter with inverse problems.</p></div>
  <div class="archive-grid">
    <a class="archive-feature" href="{{ '/archive/ruby-chronicles/' | relative_url }}"><span class="archive-date">2014 · Field note</span><h3>Ruby Chronicles:<br>The Eurucamp Story</h3><p>My first international conference, my first technical talk, a robot in my luggage—and many other firsts.</p><span class="read-more">Read the story ↗</span></a>
    <div class="archive-stack">
      <a href="{{ '/archive/svd-image-compression/' | relative_url }}"><span>2019 · Linear algebra</span><strong>Image compression with singular-value decomposition</strong><em>Inverse problems in the making →</em></a>
      <a href="{{ '/archive/atom-bot/' | relative_url }}"><span>2014 · Hardware</span><strong>Our Atom Bot</strong><em>Ruby, Raspberry Pi, Arduino, and a websocket →</em></a>
      <a href="{{ '/archive/dft-python/' | relative_url }}"><span>2014 · Signals</span><strong>DFT using basic Python and NumPy</strong><em>Understanding the transform by rebuilding it →</em></a>
    </div>
  </div>
  <div class="beyond-strip"><p class="kicker">Beyond research</p><p>Conference speaker · hardware tinkerer · Ruby instructor · sketcher · cyclist · lifelong learner</p><a href="{{ '/archive/' | relative_url }}">Explore the archive <span aria-hidden="true">→</span></a></div>
</div></section>

<section class="contact section"><div class="shell contact-inner"><p class="kicker">05 / Contact</p><h2>Let’s find the signal<br>in the noise.</h2><p>Interested in inverse problems, spectral inference, electromagnetics, or a research collaboration?</p><a class="button primary" href="mailto:T.K.Dash@tudelft.nl">T.K.Dash@tudelft.nl <span aria-hidden="true">↗</span></a></div></section>
