/*
Here's a breakdown of your pattern:

---

### Track 1 — Bass

```js
$: note("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>")
.sound("gm_acoustic_bass")
```

**`$:`** — starts an independent track (like a separate lane in a DAW)

**`note(...)`** — takes MIDI note numbers as input (60 = middle C)

**`< >`** — angle brackets mean "play one item per cycle" — so across 4 cycles it steps through each bracketed group one at a time

**`[36 48]`** — square brackets group notes to play within the same cycle slot. So `36` and `48` are played as a pair

**`*4`** — repeats that pair 4 times within its cycle slot, creating a fast repeating pulse

**`.sound("gm_acoustic_bass")`** — sets the instrument using a General MIDI soundfont

---

### Track 2 — Drums

```js
$: sound("<hh>*8, [- cr - cr], [bd - bd -]")
```

**`<hh>*8`** — hi-hat playing 8 times per cycle

**`,`** — the comma layers multiple patterns on the same track simultaneously

**`[- cr - cr]`** — a 4-step pattern; `-` is a rest, `cr` is crash. Crash lands on beats 2 and 4

**`[bd - bd -]`** — kick drum on beats 1 and 3, rests on 2 and 4

---

The comma layering in track 2 is one of Strudel's most useful features — it lets you build up a full drum kit in a single line. Want to dig into any part further?
*/
$: note("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>")
.sound("gm_acoustic_bass")

$: sound("<hh>*8, [- cr - cr], [bd - bd -]")
