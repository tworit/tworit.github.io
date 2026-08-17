---
layout: default
title: Dr. Tworit Dash | Radar researcher
---
<div id="top" class="hero shell">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot"></span> Postdoctoral researcher · TU Delft</p>
    <h1>I decode weather<br>with <span>radar.</span></h1>
    <p class="lede">I build signal-processing methods for fast-scanning and phased-array radars—turning short, noisy measurements into useful pictures of precipitation and wind.</p>
    <div class="actions"><a class="button primary" href="#publications">Explore my work <span aria-hidden="true">↓</span></a><a class="button secondary" href="{{ '/Tworit_Kumar_Dash_Resume.pdf' | relative_url }}">Download CV <span aria-hidden="true">↗</span></a></div>
    <div class="socials" aria-label="Profile links"><a href="https://orcid.org/0000-0003-3127-8841">ORCID</a><a href="https://research.tudelft.nl/en/persons/tk-dash/">TU Delft</a><a href="https://github.com/tworitdash">GitHub</a></div>
  </div>
  <div class="radar-card" aria-hidden="true"><div class="radar"><span class="ring ring-one"></span><span class="ring ring-two"></span><span class="ring ring-three"></span><span class="sweep"></span><span class="echo echo-one"></span><span class="echo echo-two"></span><span class="echo echo-three"></span><span class="crosshair horizontal"></span><span class="crosshair vertical"></span></div><div class="telemetry"><span>SCAN_042</span><span>Δt 1.2 s</span><span class="live">LIVE</span></div></div>
</div>

<section id="research" class="section shell">
  <div class="section-heading"><p class="kicker">01 / Research</p><h2>Signals in. Insight out.</h2></div>
  <div class="research-grid">
    <article><span class="glyph">⌁</span><h3>Radar signal processing</h3><p>Doppler spectrum modelling, parameter estimation, counter-aliasing, and robust processing for short dwell times.</p></article>
    <article><span class="glyph">◉</span><h3>Atmospheric sensing</h3><p>Retrieving precipitation, wind, and microphysical information from fast-scanning weather radar measurements.</p></article>
    <article><span class="glyph">⌬</span><h3>Phased arrays</h3><p>Beamforming and elevation-Doppler processing for next-generation atmospheric research radars.</p></article>
  </div>
</section>

<section id="publications" class="section publications-section"><div class="shell">
  <div class="section-heading split"><div><p class="kicker">02 / Publications</p><h2>Research log</h2></div><p class="section-note">Peer-reviewed papers, conference contributions, theses, and preprints. Updated August 2026.</p></div>
  <div class="filterbar" role="group" aria-label="Filter publications"><button class="filter active" data-filter="all" aria-pressed="true">All <span>{{ site.data.publications | size }}</span></button><button class="filter" data-filter="journal" aria-pressed="false">Journals</button><button class="filter" data-filter="conference" aria-pressed="false">Conferences</button><button class="filter" data-filter="preprint" aria-pressed="false">Preprints</button><button class="filter" data-filter="thesis" aria-pressed="false">Theses</button></div>
  <div class="publication-list">{% assign grouped = site.data.publications | group_by: 'year' %}{% for year in grouped %}<div class="year-group" data-year-group><div class="year"><span>{{ year.name }}</span></div><div>{% for paper in year.items %}<article class="publication" data-type="{{ paper.type }}"><div class="pub-meta"><span class="tag {{ paper.type }}">{{ paper.type }}</span><span>{{ paper.venue }}</span></div><h3><a href="{{ paper.url }}">{{ paper.title }}</a></h3><p>{{ paper.authors }}</p><a class="paper-link" href="{{ paper.url }}">{% if paper.link_label %}{{ paper.link_label }}{% else %}View paper{% endif %} <span aria-hidden="true">↗</span></a></article>{% endfor %}</div></div>{% endfor %}</div>
</div></section>

<section id="software" class="section shell">
  <div class="section-heading split"><div><p class="kicker">03 / Open work</p><h2>Tools & data</h2></div><p class="section-note">Reproducible software and datasets for radar processing and electromagnetic modelling.</p></div>
  <div class="project-grid">{% for project in site.data.projects %}<a class="project" href="{{ project.url }}"><div><span class="project-kind">{{ project.kind }}</span><span aria-hidden="true">↗</span></div><h3>{{ project.name }}</h3><p>{{ project.description }}</p><code>{{ project.code }}</code></a>{% endfor %}</div>
</section>

<section class="contact section"><div class="shell contact-inner"><p class="kicker">04 / Contact</p><h2>Let’s find the signal<br>in the noise.</h2><p>Interested in radar, remote sensing, or a research collaboration?</p><a class="button primary" href="mailto:T.K.Dash@tudelft.nl">T.K.Dash@tudelft.nl <span aria-hidden="true">↗</span></a></div></section>
