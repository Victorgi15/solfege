(() => {
  'use strict';

  const quarter = (...pitches) => pitches.map(value => typeof value === 'object' ? { ...value, duration: 1 } : ({ pitch: value, duration: 1 }));
  const half = (...pitches) => pitches.map(value => typeof value === 'object' ? { ...value, duration: 2 } : ({ pitch: value, duration: 2 }));
  const dottedHalf = value => [typeof value === 'object' ? { ...value, duration: 3, dotted: true } : ({ pitch: value, duration: 3, dotted: true })];
  const whole = value => [typeof value === 'object' ? { ...value, duration: 4 } : ({ pitch: value, duration: 4 })];
  const rest = duration => [{ rest: true, duration }];
  const join = (...parts) => parts.flat();

  const songs = [
    {
      id: 'ronde', title: 'Ronde', measure: '3/4', beats: 3, tempo: 84, image: 'Mes morceaux/09 - Ronde.png',
      bars: [
        { rh: quarter({ pitch: 60, finger: 1 }, 62, 64), lh: rest(3) },
        { rh: quarter(65, 64, 62), lh: rest(3) },
        { rh: rest(3), lh: quarter({ pitch: 60, finger: 1 }, 59, 57) },
        { rh: rest(3), lh: quarter(55, 57, 59) },
        { rh: quarter({ pitch: 60, finger: 1 }, 62, 64), lh: rest(3) },
        { rh: quarter(65, 64, 62), lh: rest(3) },
        { rh: dottedHalf(60), lh: rest(3) },
        { rh: rest(3), lh: dottedHalf({ pitch: 60, finger: 1 }) }
      ]
    },
    {
      id: 'la-fete', title: 'La fête', measure: '4/4', beats: 4, tempo: 88, image: 'Mes morceaux/10 - La fête.png',
      bars: [
        { rh: rest(4), lh: quarter({ pitch: 60, finger: 1 }, 59, 57, 55) },
        { rh: half({ pitch: 62, finger: 2 }, 62), lh: rest(4) },
        { rh: rest(4), lh: quarter({ pitch: 60, finger: 1 }, 59, 57, 55) },
        { rh: half({ pitch: 62, finger: 2 }, 62), lh: rest(4) },
        { rh: join(quarter({ pitch: 64, finger: 3 }, 64, 64), rest(1)), lh: join(rest(2), rest(1), quarter({ pitch: 60, finger: 1, centered: true })) },
        { rh: join(quarter({ pitch: 62, finger: 2 }, 62, 62), rest(1)), lh: join(rest(2), rest(1), quarter({ pitch: 59, finger: 2, centered: true })) },
        { rh: rest(4), lh: quarter({ pitch: 57, finger: 3 }, 59, 59, 57) },
        { rh: rest(4), lh: half({ pitch: 57, finger: 3 }, { pitch: 55, finger: 4 }) }
      ]
    },
    {
      id: 'air-ancien', title: 'Air ancien', measure: '4/4', beats: 4, tempo: 76, image: 'Mes morceaux/11 - Air ancien.png',
      bars: [
        { rh: quarter({ pitch: 64, finger: 3 }, 64, 64, 64), lh: rest(4) },
        { rh: join(quarter({ pitch: 62, finger: 2 }, { pitch: 60, finger: 2 }), rest(2)), lh: join(rest(2), half({ pitch: 59, finger: 2 })) },
        { rh: rest(4), lh: quarter({ pitch: 57, finger: 3 }, 59, 60, 59) },
        { rh: half({ pitch: 62, finger: 2 }, 62), lh: rest(4) },
        { rh: quarter({ pitch: 64, finger: 3 }, 64, 64, 64), lh: rest(4) },
        { rh: join(quarter({ pitch: 62, finger: 2 }, { pitch: 60, finger: 2 }), rest(2)), lh: join(rest(2), half({ pitch: 59, finger: 2 })) },
        { rh: rest(4), lh: quarter({ pitch: 57, finger: 3 }, 59, 60, 59) },
        { rh: rest(4), lh: whole({ pitch: 55, finger: 4 }) }
      ]
    },
    {
      id: 'vif', title: 'Vif', measure: '4/4', beats: 4, tempo: 108, image: 'Mes morceaux/18 - Vif.png', clefs: { rh: 'bass', lh: 'bass' },
      bars: [
        { rh: join(quarter(60, 60), half(55)), lh: rest(4) },
        { rh: join(quarter(60, 60), half(55)), lh: rest(4) },
        { rh: quarter(60, 60, 59, 57), lh: rest(4) },
        { rh: join(quarter(55, 55), rest(2)), lh: rest(4) },
        { rh: rest(4), lh: quarter(55, 53, 52, 50) },
        { rh: join(rest(1), half(55), rest(1)), lh: join(quarter(48, 52), rest(2)) },
        { rh: rest(4), lh: quarter(53, 53, 52, 50) },
        { rh: join(half(60, 60)), lh: join(half(48), rest(2)) }
      ]
    },
    {
      id: 'pas-vite', title: 'Pas vite', measure: '4/4', beats: 4, tempo: 84, image: 'Mes morceaux/19 - Pas vite.png',
      bars: [
        { rh: quarter(69, 72, 71, 69), lh: rest(4) },
        { rh: join(quarter(71), rest(1), rest(2)), lh: join(rest(1), quarter(43, 43, 43)) },
        { rh: quarter(69, 72, 71, 69), lh: rest(4) },
        { rh: join(quarter(71), rest(1), rest(2)), lh: join(rest(1), quarter(43, 43, 43)) },
        { rh: rest(4), lh: quarter(41, 47, 47, 45) },
        { rh: rest(4), lh: quarter(43, 43, 43, 43) },
        { rh: rest(4), lh: quarter(41, 47, 47, 45) },
        { rh: rest(4), lh: whole(43) }
      ]
    },
    {
      id: 'avec-douceur', title: 'Avec douceur', measure: '4/4', beats: 4, tempo: 92, image: 'Mes morceaux/20 - Avec douceur.png', clefs: { rh: 'bass', lh: 'bass' },
      bars: [
        { rh: rest(4), lh: quarter(50, 52, 53, 55) },
        { rh: join(quarter(59, 64), half(59)), lh: rest(4) },
        { rh: rest(4), lh: quarter(50, 52, 50, 48) },
        { rh: rest(4), lh: half(50, 50) },
        { rh: rest(4), lh: quarter(50, 52, 53, 55) },
        { rh: join(quarter(59, 64), half(59)), lh: rest(4) },
        { rh: quarter(62, 62, 60, 59), lh: rest(4) },
        { rh: half(64, 64), lh: rest(4) }
      ]
    }
  ];

  const noteNames = ['Do', 'Ré♭', 'Ré', 'Mi♭', 'Mi', 'Fa', 'Sol♭', 'Sol', 'La♭', 'La', 'Si♭', 'Si'];
  const pitchName = midi => `${noteNames[midi % 12]}${Math.floor(midi / 12) - 1}`;
  const diatonicStep = midi => {
    const letterByPitch = [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
    return (Math.floor(midi / 12) - 1) * 7 + letterByPitch[midi % 12];
  };
  const svg = document.getElementById('scoreSheet');
  const scoreImage = document.getElementById('scoreImage');
  const scoreScroll = document.getElementById('scoreScroll');
  const scoreViewToggle = document.getElementById('scoreViewToggle');
  const status = document.getElementById('playStatus');
  const tempoInput = document.getElementById('tempoSlider');
  const tempoOutput = document.getElementById('tempoOutput');
  const playButton = document.getElementById('playToggle');
  const rewindButton = document.getElementById('rewindToStart');
  const metronomeButton = document.getElementById('metronomeToggle');
  let selectedSong = songs[0];
  let rawView = false;
  let events = [];
  let playbackTimer = null;
  let countingIn = false;
  let countInPending = true;
  let countInRemaining = 0;
  let playbackStart = 0;
  let playbackBeat = 0;
  let lastMetronomeBeat = -1;
  let metronomeOn = true;
  let audioContext = null;

  function listEvents(song) {
    const output = [];
    song.bars.forEach((bar, measure) => {
      for (const hand of ['rh', 'lh']) {
        let offset = 0;
        for (const item of bar[hand]) {
          if (!item.rest) output.push({ ...item, hand, measure, beat: measure * song.beats + offset });
          offset += item.duration;
        }
      }
    });
    return output;
  }

  function renderRest(x, y, duration) {
    if (duration >= 2) {
      const restY = duration >= 4 ? y + 4 : y - 2;
      return `<rect class="rest-mark" x="${x - 6}" y="${restY}" width="12" height="5" rx="1"/>`;
    }
    return `<path class="rest-mark" d="M ${x + 2} ${y - 12} l -7 9 7 2 -6 9 8 -8 -6 -2 5 -10" fill="none" stroke-width="1.6"/>`;
  }

  function renderNote(event, x, top, hand, index, clefs) {
    const isTreble = clefs[hand] === 'treble';
    const bottom = top + (hand === 'rh' ? 40 : 120);
    const basePitch = isTreble ? 64 : 43;
    const pitchOffset = diatonicStep(event.pitch) - diatonicStep(basePitch);
    const y = bottom - pitchOffset * 5;
    const open = event.duration >= 2;
    const stemDown = pitchOffset >= 4;
    const stemX = x + (stemDown ? -6 : 6);
    const stemY = y + (stemDown ? 25 : -25);
    const firstLedgerAbove = 10;
    let ledgerLines = '';
    if (pitchOffset <= -2) {
      for (let step = -2; step >= pitchOffset; step -= 2) {
        const ledgerY = bottom - step * 5;
        ledgerLines += `<line class="staff-line" x1="${x - 10}" x2="${x + 10}" y1="${ledgerY}" y2="${ledgerY}"/>`;
      }
    }
    if (pitchOffset >= firstLedgerAbove) {
      for (let step = firstLedgerAbove; step <= pitchOffset; step += 2) {
        const ledgerY = bottom - step * 5;
        ledgerLines += `<line class="staff-line" x1="${x - 10}" x2="${x + 10}" y1="${ledgerY}" y2="${ledgerY}"/>`;
      }
    }
    const fingering = event.finger ? `<text class="fingering" x="${x}" y="${y + (isTreble ? 18 : -11)}" text-anchor="middle" font-size="11">${event.finger}</text>` : '';
    const stem = event.duration >= 4 ? '' : `<line class="note-stem" x1="${stemX}" y1="${y}" x2="${stemX}" y2="${stemY}"/>`;
    const dot = event.dotted ? `<circle cx="${x + 12}" cy="${y - 2}" r="1.8" fill="#252635"/>` : '';
    return `<g class="score-event" data-event-index="${index}" aria-label="${pitchName(event.pitch)}"><title>${pitchName(event.pitch)} — ${isTreble ? 'main droite' : 'main gauche'}</title>${ledgerLines}${fingering}<ellipse class="note-head${open ? ' open' : ''}" cx="${x}" cy="${y}" rx="6.5" ry="4.6" transform="rotate(-18 ${x} ${y})"/>${stem}${dot}</g>`;
  }

  function renderScore(song) {
    scoreScroll.dataset.view = 'interactive';
    svg.hidden = false;
    svg.setAttribute('aria-hidden', 'false');
    document.getElementById('scoreImage').hidden = true;
    scoreImage.setAttribute('aria-hidden', 'true');
    events = listEvents(song);
    const compact = window.matchMedia('(max-width: 600px)').matches;
    const measuresPerSystem = compact ? 1 : 4;
    const systems = Math.ceil(song.bars.length / measuresPerSystem);
    const systemHeight = 180;
    const width = compact ? 390 : 980;
    const startX = compact ? 48 : 92;
    const measureWidth = compact ? 310 : 216;
    const parts = [];
    const positions = [];
    let eventIndex = 0;
    const clefs = song.clefs || { rh: 'treble', lh: 'bass' };

    for (let system = 0; system < systems; system++) {
      const top = 36 + system * systemHeight;
      const startMeasure = system * measuresPerSystem;
      const endMeasure = Math.min(startMeasure + measuresPerSystem, song.bars.length);
      const count = endMeasure - startMeasure;
      const lastX = startX + count * measureWidth;
      positions[system] = { top, startX, measureWidth };
      for (const yTop of [top, top + 80]) {
        for (let line = 0; line < 5; line++) {
          const y = yTop + line * 10;
          parts.push(`<line class="staff-line" x1="${startX}" x2="${lastX}" y1="${y}" y2="${y}"/>`);
        }
      }
      parts.push(`<text x="24" y="${top + 42}" font-size="45">${clefs.rh === 'treble' ? '𝄞' : '𝄢'}</text><text x="24" y="${top + 121}" font-size="40">${clefs.lh === 'treble' ? '𝄞' : '𝄢'}</text>`);
      if (system === 0) parts.push(`<text x="65" y="${top + 19}" font-size="16">${song.measure.split('/')[0]}</text><text x="65" y="${top + 37}" font-size="16">${song.measure.split('/')[1]}</text>`);
      for (let bar = startMeasure; bar < endMeasure; bar++) {
        const localBar = bar - startMeasure;
        const x = startX + localBar * measureWidth;
        const beatWidth = measureWidth / song.beats;
        parts.push(`<line class="bar-line" x1="${x}" x2="${x}" y1="${top}" y2="${top + 120}"/>`);
        for (const hand of ['rh', 'lh']) {
          const handNotes = song.bars[bar][hand];
          let offset = 0;
          for (const item of handNotes) {
            const eventX = x + 11 + (offset + (item.rest || item.centered ? item.duration / 2 : 0)) * beatWidth;
            const staffTop = hand === 'rh' ? top : top;
            if (item.rest) {
              parts.push(renderRest(eventX, staffTop + (hand === 'rh' ? 20 : 100), item.duration));
            } else {
              parts.push(renderNote(item, eventX, top, hand, eventIndex++, clefs));
            }
            offset += item.duration;
          }
        }
      }
      parts.push(`<line class="bar-line end" x1="${lastX}" x2="${lastX}" y1="${top}" y2="${top + 120}"/><line class="bar-line end" x1="${lastX + 5}" x2="${lastX + 5}" y1="${top}" y2="${top + 120}"/>`);
    }
    const height = 52 + systems * systemHeight;
    parts.push(`<line class="playhead" id="scorePlayhead" x1="0" x2="0" y1="0" y2="0" style="display:none"/>`);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('height', height);
    svg.setAttribute('aria-label', `Partition de ${song.title}, ${song.measure}`);
    svg.innerHTML = parts.join('');
    song._positions = positions;
    song._measuresPerSystem = measuresPerSystem;
  }

  function stopPlayback(reset = false) {
    const cancelledCountIn = countingIn;
    if (playbackTimer) clearInterval(playbackTimer);
    playbackTimer = null;
    countingIn = false;
    playButton.textContent = 'Lire';
    status.classList.remove('playing');
    status.classList.remove('count-in');
    if (reset) {
      playbackBeat = 0;
      countInPending = true;
      document.querySelectorAll('.score-event.active').forEach(node => node.classList.remove('active'));
      const playhead = document.getElementById('scorePlayhead');
      if (playhead) playhead.style.display = 'none';
      status.textContent = 'Lecture arrêtée';
    } else if (cancelledCountIn) {
      status.textContent = 'Décompte annulé';
    }
  }

  function metronomeClick(strong) {
    try {
      audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === 'suspended') audioContext.resume();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = strong ? 1120 : 820;
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.09, audioContext.currentTime + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.055);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.06);
    } catch (error) {
      // Audio is optional; the visual playhead continues without it.
    }
  }

  function tick() {
    const bpm = Number(tempoInput.value);
    const beat = (performance.now() - playbackStart) * bpm / 60000;
    playbackBeat = beat;
    const totalBeats = selectedSong.bars.length * selectedSong.beats;
    if (beat >= totalBeats) {
      stopPlayback(true);
      return;
    }

    const measure = Math.floor(beat / selectedSong.beats);
    const beatInMeasure = beat % selectedSong.beats;
    const wholeBeat = Math.floor(beat);
    if (wholeBeat !== lastMetronomeBeat) {
      if (metronomeOn) metronomeClick(wholeBeat % selectedSong.beats === 0);
      lastMetronomeBeat = wholeBeat;
    }

    const activeEvents = events.filter(event => beat >= event.beat && beat < event.beat + event.duration);
    const activeIndexes = new Set(activeEvents.map(event => events.indexOf(event)));
    svg.querySelectorAll('.score-event').forEach(node => node.classList.toggle('active', activeIndexes.has(Number(node.dataset.eventIndex))));
    const system = Math.floor(measure / selectedSong._measuresPerSystem);
    const position = selectedSong._positions[system];
    const beatWidth = position.measureWidth / selectedSong.beats;
    const localBar = measure % selectedSong._measuresPerSystem;
    const x = position.startX + localBar * position.measureWidth + 11 + beatInMeasure * beatWidth;
    const playhead = document.getElementById('scorePlayhead');
    playhead.setAttribute('x1', x);
    playhead.setAttribute('x2', x);
    playhead.setAttribute('y1', position.top - 8);
    playhead.setAttribute('y2', position.top + 128);
    playhead.style.display = '';

    const noteText = activeEvents.map(event => `${pitchName(event.pitch)} (${event.hand === 'rh' ? 'main droite' : 'main gauche'})`).join(' · ');
    const nextStatus = `Mesure ${measure + 1} · temps ${Math.floor(beatInMeasure) + 1}${noteText ? ` · ${noteText}` : ''}`;
    if (status.textContent !== nextStatus) status.textContent = nextStatus;
  }

  function returnToBeginning() {
    stopPlayback(true);
    const position = selectedSong._positions[0];
    const playhead = document.getElementById('scorePlayhead');
    const x = position.startX + 11;
    playhead.setAttribute('x1', x);
    playhead.setAttribute('x2', x);
    playhead.setAttribute('y1', position.top - 8);
    playhead.setAttribute('y2', position.top + 128);
    playhead.style.display = '';
    status.textContent = 'En pause · Mesure 1 · temps 1';
  }

  function startPlayback() {
    const totalBeats = selectedSong.bars.length * selectedSong.beats;
    if (playbackBeat >= totalBeats) {
      playbackBeat = 0;
      countInPending = true;
    }
    if (countInPending && playbackBeat === 0) {
      countingIn = true;
      countInRemaining = 3;
      status.classList.add('playing');
      status.classList.add('count-in');
      status.textContent = String(countInRemaining);
      playButton.textContent = 'Annuler';
      if (metronomeOn) metronomeClick(true);
      playbackTimer = setInterval(() => {
        countInRemaining -= 1;
        if (countInRemaining > 0) {
          status.textContent = String(countInRemaining);
          if (metronomeOn) metronomeClick(false);
          return;
        }
        clearInterval(playbackTimer);
        playbackTimer = null;
        countingIn = false;
        countInPending = false;
        beginPlayback();
      }, 1000);
      return;
    }
    beginPlayback();
  }

  function beginPlayback() {
    status.classList.remove('count-in');
    playbackStart = performance.now() - playbackBeat * 60000 / Number(tempoInput.value);
    lastMetronomeBeat = Math.floor(playbackBeat) - 1;
    status.classList.add('playing');
    playButton.textContent = 'Pause';
    playbackTimer = setInterval(tick, 16);
    tick();
  }

  function selectSong(song) {
    stopPlayback(true);
    selectedSong = song;
    document.querySelectorAll('.piece-choice').forEach(button => button.classList.toggle('active', button.dataset.song === song.id));
    document.getElementById('pieceTitle').textContent = song.title;
    document.getElementById('pieceMeta').textContent = `${song.measure} · ${song.bars.length} mesures`;
    tempoInput.value = song.tempo;
    tempoOutput.value = `${song.tempo} BPM`;
    showRawScore(false);
  }

  function showRawScore(showRaw) {
    rawView = showRaw;
    scoreScroll.dataset.view = rawView ? 'original' : 'interactive';
    if (rawView) {
      if (playbackTimer) stopPlayback(false);
      scoreImage.src = encodeURI(selectedSong.image);
      scoreImage.alt = `Partition originale de ${selectedSong.title}`;
      scoreImage.hidden = false;
      scoreImage.setAttribute('aria-hidden', 'false');
      svg.hidden = true;
      svg.setAttribute('aria-hidden', 'true');
    } else {
      scoreImage.hidden = true;
      scoreImage.setAttribute('aria-hidden', 'true');
      svg.hidden = false;
      svg.setAttribute('aria-hidden', 'false');
      renderScore(selectedSong);
    }
    const nextViewLabel = rawView ? 'Voir la vue interactive' : 'Voir la partition originale';
    scoreViewToggle.textContent = nextViewLabel;
    scoreViewToggle.setAttribute('aria-label', nextViewLabel);
    scoreViewToggle.setAttribute('aria-pressed', String(!rawView));
    scoreViewToggle.classList.toggle('selected', !rawView);
  }

  songs.forEach(song => {
    const button = document.createElement('button');
    button.className = 'piece-choice';
    button.dataset.song = song.id;
    button.innerHTML = `<strong>${song.title}</strong><span>${song.measure} · ${song.bars.length} mesures</span>`;
    button.addEventListener('click', () => selectSong(song));
    document.getElementById('pieceList').appendChild(button);
  });

  scoreViewToggle.addEventListener('click', () => showRawScore(!rawView));

  document.querySelectorAll('.page-tab').forEach(button => {
    button.addEventListener('click', () => {
      const showSongs = button.dataset.page === 'songs';
      document.getElementById('practicePage').hidden = showSongs;
      document.getElementById('songsPage').hidden = !showSongs;
      document.querySelectorAll('.page-tab').forEach(tab => tab.classList.toggle('active', tab === button));
      if (!showSongs) stopPlayback(false);
    });
  });

  playButton.addEventListener('click', () => {
    if (playbackTimer) stopPlayback(false);
    else startPlayback();
  });
  rewindButton.addEventListener('click', returnToBeginning);
  tempoInput.addEventListener('input', () => {
    tempoOutput.value = `${tempoInput.value} BPM`;
    if (playbackTimer) playbackStart = performance.now() - playbackBeat * 60000 / Number(tempoInput.value);
  });
  metronomeButton.addEventListener('click', () => {
    metronomeOn = !metronomeOn;
    metronomeButton.setAttribute('aria-pressed', String(metronomeOn));
    metronomeButton.textContent = metronomeOn ? 'Métronome actif' : 'Métronome inactif';
  });

  let scoreResizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(scoreResizeTimer);
    scoreResizeTimer = setTimeout(() => { if (!rawView) renderScore(selectedSong); }, 120);
  });

  selectSong(songs[0]);
})();
