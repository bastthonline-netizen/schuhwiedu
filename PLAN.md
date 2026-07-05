# Plan: Neues Design für schuhwiedu-Website

## Ziel
Die bestehende Website optisch komplett neu gestalten — hochwertiger, sportlicher und moderner. Inhalte bleiben, Struktur wird aufgeräumt. Referenz-Niveau: Apple / Stripe / Premium-Sportmarken.

---

## Analyse der aktuellen Website

### Was funktioniert (bleibt)
- Texte sind authentisch, direkt, kundenorientiert
- Markenname **SCHUHWIEDU** mit Gold-Akzent ist stark
- Klare USP: Videolaufanalyse, 20 Jahre Erfahrung, Oberaudorf
- Alle wichtigen Sections sind da (Methode, Sortiment, Team, Lauftreff, Jubiläum)
- Mobile-Menu vorhanden
- Lightbox für Fotos funktioniert

### Design-Probleme (was dein Freund vermutlich kritisiert)

**1. Emoji-Overload**
🏅 🎥 👟 🌲 📞 — überall Emojis. Wirkt wie Canva-Template, nicht wie Fachgeschäft.
→ Emojis raus, durch saubere SVG-Icons oder reduziert ersetzen.

**2. Farbpalette zu "waldig"**
Dunkelgrün + Creme + Gold wirkt eher Reformhaus / Kräuterladen.
Ein **Lauf-/Bergschuh-Shop** braucht sportlicheren Look: mehr Kontrast, mehr Energie, klarere Akzente.

**3. Hero-Section schwach**
- Rechte Seite (`hero-right`) wirkt leer
- Kein starkes Hero-Bild (Läufer / Alpen / Produkt)
- Badge "🏅 Videolaufbandanalyse inklusive" zu klein und mittig
- H1 typografisch nicht beeindruckend genug

**4. USP-Bar direkt nach Hero**
4 gleich große Boxen mit Emoji + Text — überfrachtet, zerstört den Flow nach dem Hero.

**5. Typografie zu zurückhaltend**
Fraunces + DM Sans sind gut, aber werden zu klein/zahm eingesetzt. Hero-Headline sollte **dominieren**.

**6. Logo zu klein**
Base64-JPEG, pixelig, winzig. Ein Logo sollte Marke tragen.

**7. Whitespace-Problem**
Zwischen den Sections zu wenig Luft, innerhalb zu viel Fülle. Genau umgekehrt vom Apple/Stripe-Ideal.

**8. Visuelle Hierarchie unklar**
Alle Sections sehen gleich wichtig aus. Es fehlt visuelle Führung: Was ist die **eine** Aktion, die der Nutzer tun soll? (→ Beratung buchen)

**9. Performance-Problem**
Alle Bilder als Base64 im HTML (4,3 Mio. Tokens groß!). Seite lädt langsam, SEO-Killer.

**10. Sections-Overkill**
13 Sections, viele Info-Blöcke. Könnte für Besucher überfordernd sein.

---

## Design-Richtung (final nach Basti-Feedback)

**"Alpine Handwerk"** — Patagonia-Ästhetik, aber angepasst auf **Ladengeschäft** statt Online-Shop.

### Leitprinzipien
- **Farben vom Logo behalten:** Grün + Gold + warme Neutrals
- **Patagonia-Einfluss:** Große Outdoor-Bilder, echte Menschen, Storytelling, warm & authentisch
- **Aber WICHTIG — anders als Patagonia:**
  - Kein Online-Shop-Vibe (keine Produkt-Preise, keine "In den Warenkorb"-Buttons)
  - Fokus auf **"Komm in unseren Laden"** statt "Kauf online"
  - Produkte zeigen wir als **Beispiele unseres Sortiments**, nicht als Shop-Items
  - Haupt-CTA: **"Beratungstermin vereinbaren"** / **"Anrufen"** / **"Besuchen"**
- **Lokaler Fokus:** Oberaudorf, Inntal, Berge immer spürbar
- **Team & Gesichter** stark einsetzen → Vertrauen aufbauen
- **Öffnungszeiten + Adresse + Anfahrt** prominent, überall erreichbar

### Typografie
- Fraunces (Serif) für Headlines — bleibt (passt zu 20 Jahre Tradition + Handwerk)
- Inter oder DM Sans für Body — clean, gut lesbar
- Klare Größenhierarchie: H1 dominant, viel Whitespace

### Farben (final)
- **Haupt:** Warmes Off-White (#faf8f3) als Background
- **Text:** Tiefes Waldgrün/Fast-Schwarz (#1e2416)
- **Akzent 1:** Euer Logo-Grün (#3a5c1a) — für Buttons, Highlights
- **Akzent 2:** Gold (#c9a84c) — sehr reduziert, nur für besondere Highlights
- **Details:** Feine Holz-/Naturtöne

### Keine Emojis
Statt 🏅🎥👟🌲 → feine, handgemachte SVG-Icons oder gar keine.

---

## Button-Design (Priorität)

3 klar unterscheidbare Button-Typen. Konsistent auf der ganzen Seite.

### 1. Primär-Button — Haupt-CTA ("Beratungstermin vereinbaren")
- **Background:** Waldgrün (#3a5c1a)
- **Text:** Weiß, bold, 14-15px, leichtes Letter-Spacing
- **Padding:** 14px 28px (großzügig, nicht gedrungen)
- **Border-Radius:** 6px (leicht gerundet, nicht zu rund — hochwertiger Look)
- **Icon:** Pfeil → rechts vom Text, animiert bei Hover
- **Hover:** dunkleres Grün (#243312) + 1px nach oben + Pfeil rutscht 4px nach rechts
- **Transition:** 0.2s ease-out (nicht zu schnell, nicht zu langsam)
- **Shadow:** sehr subtil (0 2px 8px rgba(0,0,0,0.08)), stärker bei Hover
- **Keine großen Glows oder Neon-Effekte**

### 2. Sekundär-Button — Outlined ("Mehr erfahren")
- **Background:** transparent
- **Border:** 1.5px solid Waldgrün
- **Text:** Waldgrün
- **Padding:** 14px 28px (gleich wie Primär)
- **Border-Radius:** 6px
- **Hover:** Background füllt sich mit Waldgrün, Text wird weiß

### 3. Ghost-Button / Text-Link — ("Wie es funktioniert →")
- **Kein Background, kein Border**
- **Text:** Waldgrün, medium weight, Underline-Unter-Hover
- **Pfeil:** rutscht 4px nach rechts bei Hover

### Spezial: "Anrufen"-Button im Header (immer sichtbar)
- Gold (#c9a84c) gefüllt, dunkler Text
- Telefon-Icon (SVG) + Nummer
- Hover: dunkleres Gold + leichter Lift

### Mobile
- Alle Buttons min. 48px hoch (Touch-Target)
- Full-width bei wichtigen CTAs
- Nicht mehr als 2 Buttons nebeneinander

### Typografie auf Buttons
- **UPPERCASE** mit Letter-Spacing (1-1.5px) — für starken, sportlichen Look
- Bold (600-700)
- Nie Italic, nie Schatten am Text

---

## Geplante Schritte (sobald Richtung klar)

### Phase 1: Grundlagen aufräumen
- [ ] Bilder aus Base64 extrahieren → `/images/` Ordner
- [ ] CSS in `style.css` auslagern
- [ ] JS in `script.js` auslagern
- [ ] Fonts sauber einbinden (Google Fonts)

### Phase 2: Design System aufbauen
- [ ] Neue Farbpalette definieren (3 Farben max)
- [ ] Typografie-Skala (H1-H4, Body, Small)
- [ ] Button-System (Primär, Sekundär, Ghost)
- [ ] Icon-Set (statt Emojis)
- [ ] Spacing-System (8px-Grid)

### Phase 3: One-Pager mit 6 fokussierten Sections

**Von 13 → 6 Sections verkürzt. Impressum + Datenschutz als Unterseiten.**

1. **Hero** — großes Bild (Laden oder Laufanalyse), klare H1, CTA "Beratungstermin"
2. **Unsere Methode** — 4 Schritte (Fußanalyse → Videolaufband → Geländetest → Beratung), mit echten Bildern statt Icons
3. **Sortiment** — Tabs (Laufschuhe / Bergschuhe / Bekleidung / Zubehör), ohne Preise, als Vitrine
4. **Über uns + Team** — Geschichte (20 Jahre), Fotos vom Team, Laden, Oberaudorf-Atmosphäre
5. **Community** — Lauftreff + Reviews zusammen (Stimmen aus der Region)
6. **Besuch uns** — Große Section: Adresse, Öffnungszeiten, Anfahrt, Telefon, Kontaktformular

**Header:** Sticky, reduziert, Haupt-CTA "Anrufen" immer sichtbar
**Footer:** Impressum-Link, Datenschutz-Link, Social, Öffnungszeiten

### Phase 4: Mobile-Optimierung
- [ ] Jede Section auf Mobile testen
- [ ] Touch-Targets prüfen (min. 44px)
- [ ] Ladezeit messen

---

## Was NICHT gemacht wird
- Texte werden **nicht** geändert (das war nicht Bastis Wunsch)
- Markenname, Logo-Grundidee bleibt
- Inhaltliche Sections bleiben bestehen (nichts wird gelöscht)
- Kein Framework (React/Vue) — bleibt HTML/CSS/JS

---

## Klärungen mit Basti (erledigt)

1. ✅ Richtung: Patagonia-Stil, ABER angepasst auf Ladengeschäft (keinen Online-Shop-Vibe)
2. ✅ Referenzen: Patagonia, Arc'teryx (aber Patagonia näher dran)
3. ✅ Bilder: erstmal aus Word-Datei, später in besserer Qualität
4. ✅ Logo bleibt wie es ist
5. ✅ Farben: freie Hand, aber Logo-Farben als Leitlinie
6. ✅ Zeit: viel Zeit vorhanden → wir machen's richtig

## Noch offen (vor Coding)

- [ ] Basti lädt Bilder in `C:\Users\Micha\DT-Webstudio\schuhwiedu\images\` ab
- [ ] Basti bestätigt Plan
- [ ] Dann: Phase 1 starten (Base64-Bilder extrahieren, CSS/JS auslagern)

---

## Status
Erstellt: 2026-04-21
Zuletzt aktualisiert: 2026-04-21
Nächster Schritt: Basti beantwortet die 6 Fragen → Ich verfeinere Plan → Dann Code
