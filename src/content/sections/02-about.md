---
order: 2
title: About
id: about
---

<div class="section-head">
  <span class="eyebrow">Entry 02 — About</span>
  <h2>The short of it.</h2>
</div>

<div class="about-grid">

<div class="prose-editorial">

<div class="about-collapsible" id="about-text">

<p>I'm Ryan Kerwick — a computer science student at CU Boulder with a deep fascination for the things that happen two layers below the operating system. I'm drawn to problems where the abstraction gets thin: where a stray noise pulse, a misaligned timer interrupt, or a single unchecked pointer can quietly undo an entire system.</p>

<p>I started programming the way anyone does who asks <em>"but how does the computer actually know?"</em> — and never really stopped asking. That curiosity pushed me through C, assembly, and the strange middle-earth of bare-metal firmware. It eventually landed me at Tensentric, where I wrote safety-critical firmware for an underwater blood-pressure monitor in a regulated, ISO 13485 environment. The work carried real consequences — each line of code had to answer to a risk document — and I loved every minute of it.</p>

<p>My current focus is a blend of <em>embedded systems</em>, systems engineering, applied AI, and the quieter corners of cybersecurity. I want to build things that feel elegant in software and tangible in hardware — instruments, tools, and interfaces that do something genuinely real in the physical world.</p>

<p>When I'm not at a keyboard I'm usually in the gym, in the kitchen running an experiment I probably shouldn't, or hunched over a breadboard arguing with a logic analyzer. The discipline of physical training, it turns out, translates cleanly into the patience that firmware debugging demands.</p>

<p>My goal: graduate into a role where I can write firmware or systems software with real-world consequences — ideally for teams that care deeply about correctness, documentation, and durability. Until then, I'm shipping what I can, and keeping the field notes.</p>

</div>

<button class="about-toggle" aria-expanded="false" aria-controls="about-text">
  <span class="icon" aria-hidden="true"></span>
  <span class="label">Read more</span>
</button>

</div>

<aside class="about-aside">

<figure class="artifact">
  <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch of a microcontroller schematic">
    <g fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <rect x="70" y="45" width="80" height="60" rx="2" />
      <text x="110" y="80" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle" fill="currentColor" stroke="none">MCU</text>
      <g stroke-width="1">
        <line x1="70" y1="55" x2="45" y2="55" /><circle cx="43" cy="55" r="1.5" fill="currentColor"/>
        <line x1="70" y1="70" x2="45" y2="70" /><circle cx="43" cy="70" r="1.5" fill="currentColor"/>
        <line x1="70" y1="85" x2="45" y2="85" /><circle cx="43" cy="85" r="1.5" fill="currentColor"/>
        <line x1="70" y1="100" x2="45" y2="100" /><circle cx="43" cy="100" r="1.5" fill="currentColor"/>
        <line x1="150" y1="55" x2="175" y2="55" /><circle cx="177" cy="55" r="1.5" fill="currentColor"/>
        <line x1="150" y1="70" x2="175" y2="70" /><circle cx="177" cy="70" r="1.5" fill="currentColor"/>
        <line x1="150" y1="85" x2="175" y2="85" /><circle cx="177" cy="85" r="1.5" fill="currentColor"/>
        <line x1="150" y1="100" x2="175" y2="100" /><circle cx="177" cy="100" r="1.5" fill="currentColor"/>
      </g>
      <g stroke="#c8553d" stroke-dasharray="3 3">
        <path d="M 30 20 L 30 130 L 195 130" />
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="6" fill="currentColor" stroke="none">
        <text x="18" y="18">V+</text>
        <text x="190" y="140">GND</text>
        <text x="56" y="40" fill="#c8553d">UART</text>
        <text x="155" y="40" fill="#c8553d">I²C</text>
      </g>
      <g stroke-width="0.75">
        <path d="M 28 137 L 32 137 M 26 140 L 34 140 M 28 143 L 32 143" />
      </g>
    </g>
  </svg>
  <figcaption class="caption">Fig. A — a controller, in mood</figcaption>
</figure>

<figure class="artifact">
  <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch of an oscilloscope waveform trace">
    <g fill="none" stroke="currentColor">
      <g stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55">
        <line x1="15" y1="30"  x2="205" y2="30"  />
        <line x1="15" y1="55"  x2="205" y2="55"  />
        <line x1="15" y1="80"  x2="205" y2="80"  />
        <line x1="15" y1="105" x2="205" y2="105" />
        <line x1="15" y1="130" x2="205" y2="130" />
        <line x1="40"  y1="15" x2="40"  y2="135" />
        <line x1="80"  y1="15" x2="80"  y2="135" />
        <line x1="120" y1="15" x2="120" y2="135" />
        <line x1="160" y1="15" x2="160" y2="135" />
        <line x1="200" y1="15" x2="200" y2="135" />
      </g>
      <path d="M 15 80 L 30 80 L 30 40 L 55 40 L 55 115 L 80 115 L 80 40 L 100 40 L 100 115 L 125 115 L 125 40 L 150 40 L 150 115 L 170 115 L 170 80 L 205 80"
            stroke="#c8553d" stroke-width="1.6" stroke-linejoin="round"/>
      <g font-family="JetBrains Mono, monospace" font-size="6" fill="currentColor" stroke="none">
        <text x="15" y="13">CH1 · 3.3V</text>
        <text x="162" y="13">500 ns/div</text>
      </g>
    </g>
  </svg>
  <figcaption class="caption">Fig. B — signal, in the wild</figcaption>
</figure>

<div class="marginalia">
  <strong>Current obsessions</strong>
  bare-metal C · ISO 13485 · signal integrity · Linux-from-scratch experiments · espresso extraction curves · squat depth.
</div>

</aside>

</div>
