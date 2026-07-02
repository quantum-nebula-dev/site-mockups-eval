# HANDOFF — Refonte design site Périclès (pipeline design-site assisté)

> Document auto-suffisant. Une session FRAÎCHE lit ceci + `_pipeline/BRIEF.md` + `_pipeline/tokens.md`, vérifie l'état git, et continue. Ne rien re-faire de déjà poussé (idempotence).

## BOTTOM LINE
**DÉCISION user 2026-07-02 : re-passe INTÉGRALE sur Fable 5.** TOUTES les sections sauf hero + nav sont refaites par des designers + Vérificateurs **Fable** (spawn SANS param model → hérite de la session). Les versions Opus déjà poussées (modèle, repères, approche, contact = `add8b08`) servent de **baseline à dépasser**, pas d'acquis. Ordre de la file : **intro → domaines → citation → modèle → repères → approche → contact → footer (à créer)**, puis cohérence globale, passe copy (avec l'user), ship (panel GPT-5.5).

## FAIT (vérifié — preuve = commit + verdict Vérificateur)
- **Architecture** groundée (7 concurrents réels du bon métier) + **sitemap 9 sections VALIDÉ par l'user** (gate structure). `_pipeline/BRIEF.md` + `_pipeline/tokens.md` posés. Restore point : `_pipeline/backup-index-2026-07-01.html`.
- **Modèle (`#viz`)** : treemap redondant → schéma « un seul point de responsabilité » (dispersé→point unique→rendu FR/étranger). Vérificateur Opus frais = **auto** (7/7 déterministes, juge 0.82-0.86, conf 0.88). Commit `cb25649`.
- **Repères (`#reperes`)** : chiffres-clés sous filet or. Vérificateur = **fix** (chiffre dépassait le hero sur mobile) → corrigé `.stat__n` clamp min 2.6→2.2rem (mesuré 35.2px < hero 36.8px à 390). Commit `364fa45`.
- **Approche (`#approche`)** : index éditorial de 4 principes (plus de doublon avec la citation). Vérificateur = **fix** (eyebrow or `--gold-d` sur taupe = 4.06:1 < AA) → corrigé `class bg-taupe`→`bg-cream` (mesuré 4.84:1 AA). Commit `0fae53d`.
- **Décision juge (loggée)** : panel cross-famille = **GPT-5.5** (`openai/gpt-5.5`) via OpenRouter, **clé dans `C:\Users\Neon\.claude\skills\council\.env`** (variable `OPENROUTER_API_KEY` ; l'ancien `.env` C:\Paulin n'existe plus). **`reasoning.effort=high`** (testé A/B vs `max` = verdict identique). Panel = **ship + fort-enjeu seulement** ; juge primaire courant = **Opus frais isolé**. Consigné dans `~/.claude/skills/design-site/references/verification.md` + `docs/CHANGELOG.md`.

## EN COURS (à la coupure)
- **`designer-contact`** (subagent Opus, background, team `session-df848a9f`) : refond `#contact`. À la reprise : récupérer son livrable (SendMessage) ou vérifier si `#contact` a changé dans le fichier ; s'il n'a rien rendu, relancer un designer contact.

## BACKLOG ACTIONNABLE (re-passe Fable — complet, dans l'ordre de la page)
Pour CHAQUE section : designer **Fable** (spawn sans param model ; brief = baseline actuelle à DÉPASSER, carte blanche, contraintes DNA) → Vérificateur **Fable frais** séparé (shot.js desktop + 390 → déterministes + rubric → verdict auto/fix/flag) → fix cap 2-3 → push.
1. **Intro (`#perimetre`)** — baseline sobre correcte mais « sage ». Slops déjà REJETÉS par l'user (ne pas re-proposer) : lettrine dorée, diagonale zigzag.
2. **Domaines (`#domaines`)** — baseline : rail sticky + liste numérotée (l'user l'aimait ; à dépasser, pas à casser pour casser).
3. **Citation (`.quote-block`)** — baseline : image N&B bibliothèque + citation centrée (l'user l'aimait beaucoup).
4. **Modèle (`#viz`)** — baseline : schéma fan-in/fan-out. **Défaut connu (GPT-5.5)** : « pas assez propriétaire, pourrait appartenir à n'importe quelle maison premium » → viser une signature possédable.
5. **Repères (`#reperes`)** — baseline : chiffres sous filet or continu.
6. **Approche (`#approche`)** — baseline : index éditorial 4 principes.
7. **Contact (`#contact`)** — baseline : ink + champs-filets (verdict auto 0.87).
8. **Footer** — À CRÉER : raison sociale **PERICLES GESTION**, mentions légales, copyright, aucun matricule/ID ; **virer l'email + adresse Haussmann INVENTÉS** encore présents (~l.811).
9. **Cohérence globale** — rescreenshot page entière : échelle titres (hero le plus grand), `scroll-margin-top` header sur les ancres, fonds/boutons/tokens.
10. **Passe COPY (AVEC l'user, gate)** — textes réels source-locked : repères (chiffres non-nominatifs), approche (4 principes), contact (canal), footer (SIREN, siège…), modèle ; hero copy en DERNIER ; nuancer le principe-1 (répète « un seul point de responsabilité »).
11. **Ship (gate user)** — panel **GPT-5.5 effort=high** (OpenRouter, clé `~/.claude/skills/council/.env`) en consensus avec le juge primaire ; deploy GitHub Pages.

## ÉTAT / DÉCISIONS (non-dérivables du code)
- **Métier VERROUILLÉ** : société de gestion **OPÉRATIONNELLE** d'un groupe (opère finance/paie/social/conformité/IT + prestations). PAS asset management, PAS holding, PAS family office. Réfs Wendel/Pictet = style visuel seulement.
- **Mode assisté** : designer Opus (créateur) ≠ Vérificateur Opus frais (juge, adversarial). Verdict auto (≥0.85 + tous déterministes verts) / fix (cap 2-3) / flag (escalade user). User gate = **direction + ship + flags** uniquement.
- **Hero + nav = FIGÉS**, ne jamais toucher.
- Textes = **placeholders** jusqu'à la passe copy (source-locked, aucun fait inventé).
- Repo `~/pericles-mockups` (= GitHub `quantum-nebula-dev/site-mockups-eval`), **push à chaque section**. URL : https://quantum-nebula-dev.github.io/site-mockups-eval/v2-final/ .
- Screenshots : **playwright headless** via `~/.claude/skills/design-section/scripts/shot.js` (jamais l'extension Chrome, non connectée dans un subagent).

## COMMANDE DE REPRISE (exacte)
1. `git -C C:/Users/Neon/pericles-mockups log --oneline -8` → voir quelles sections sont poussées (idempotence : ne pas refaire).
2. Lire `_pipeline/BRIEF.md` (sitemap + critères) et `_pipeline/tokens.md` (DNA).
3. Reprendre le BACKLOG à l'item courant. Pour CHAQUE section restante : spawn **designer Opus** (contraintes : lire tokens.md, garder le DNA, RETENUE = 1 geste signature, échelle typo = titre h2 sous le hero + labels .14em, tokens-only, anti-slop 0 tiret long, placeholders sans fait inventé, ne toucher QUE la section, PAS de push) → **Vérificateur Opus frais** (shot.js desktop + mobile 390 → déterministes overflow/contraste AA/h2/tokens/anti-slop/ninja + rubric → verdict JSON auto/fix/flag) → appliquer fix si besoin (cap 2-3) → `git add v2-final/index.html && git commit && git push`.
4. Ne PAS lancer la passe copy ni le ship sans l'user (gates).
