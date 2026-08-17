---
layout: default
title: Writing Archive | Tworit Dash
permalink: /archive/
---
<section class="archive-page shell">
  <p class="kicker">Complete archive · 2014–2019</p>
  <h1>Before the lab.</h1>
  <p class="intro">All 22 posts from my original Jekyll and Octopress blog, preserved with their original dates and voice. Together they trace a path through Ruby, open-source software, hardware, signals, mathematics, travel, and personal reflection.</p>
  <div class="archive-summary"><span><strong>{{ site.posts | size }}</strong> posts</span><span><strong>6</strong> years</span><span><strong>1</strong> continuous thread of curiosity</span></div>
  <div class="archive-list">
    {% for post in site.posts %}<a href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y' }}</time><strong>{{ post.title }}</strong><span>{{ post.archive_topic | default: 'Original blog' }} →</span></a>{% endfor %}
  </div>
</section>