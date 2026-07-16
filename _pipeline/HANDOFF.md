# HANDOFF — Refonte design site Périclès (pipeline design-site assisté)

> Document auto-suffisant. Une session FRAÎCHE lit ceci + `_pipeline/BRIEF.md` + `_pipeline/tokens.md`, vérifie l'état git, et continue. Ne rien re-faire de déjà poussé (idempotence).

## BOTTOM LINE
**⚠️ PIVOT « 180 » 2026-07-04 (décision user) : RETOUR AU PROCÉDÉ BLUEPRINT.** L'ère « orchestration + vérification » sur le design est ABANDONNÉE : tout ce qu'elle a produit a été rejeté par l'user (les 4 sections du run auto, la marqueterie, 5 des 6 concepts parallèles). Règles EN VIGUEUR :
1. **/design-section RESTAURÉ à sa version d'origine** (état git du 01/07 18:56, repo `~/.claude`) : designer + critique séparé + rubric + les 2 gates user. Briefs = les prompts-types ORIGINAUX, sans AUCUNE injection (pas d'étalon, pas d'album, pas de juge GPT, pas de plancher déterministe, pas de caps). Seul changement : modèle JAMAIS hardcodé — spawner le plus capable de l'abonnement au moment T.
2. **Création/refonte = procédé blueprint** (PLAYBOOK-SITE-DEPUIS-5-REFS) : réfs réelles REGARDÉES en pixels → ADN/tokens → UN auteur plein contexte qui construit dans l'élan → **l'œil du USER est le SEUL juge**, section par section, en page live.
3. **Recherche en ligne / études par sujet : UNIQUEMENT à la demande de l'user** (jamais automatique).
4. `/design-site` en cours de réécriture = automatisation littérale du blueprint + greffe sitemap (contenu seulement, zéro consigne visuelle). Aucun juge IA nulle part dans le flux ; QA technique = scripts.
**État des sections v2-final** : hero + nav + intro `#perimetre` + domaines (verrouillé, d11c49d) + citation `.quote-block` = **AIMÉS, ne pas toucher** ; `#viz` = treemap d'origine PARQUÉE (93bb850), refonte à refaire AU PROCÉDÉ BLUEPRINT ; `#reperes` + `#approche` = rejetés (« cheap »), à refaire ; `#contact` + footer = passables, retravail optionnel ; nav = directive user (structure variante C + police de l'ancienne), gate user ; puis copy AVEC l'user → QA technique → ship (œil user + checklist, PAS de panel de juges).
**Reprise par une session fraîche** : lire CE fichier + `_pipeline/BRIEF.md` + `_pipeline/tokens.md`, REGARDER les captures de réfs (`Facturation/Prestataires/Pericles/Site/per-site/` + reference-screenshots) et le site actuel, puis continuer à l'item courant avec /design-section restauré.
**Variantes archivées pour comparaison finale par l'USER** (il choisira lui-même à la fin) dans `variantes/` (servi en ligne, PAS d'underscore) : `A-avant-pipeline.html` · `B-pipeline-opus.html` (= add8b08) · `C-elevation-fable.html` (= 291d67d) · la version live `v2-final/` = **D-from-scratch** en construction. NE PAS supprimer ces fichiers.

## FAIT (vérifié — preuve = commit + verdict Vérificateur)
- **Architecture** groundée (7 concurrents réels du bon métier) + **sitemap 9 sections VALIDÉ par l'user** (gate structure). `_pipeline/BRIEF.md` + `_pipeline/tokens.md` posés. Restore point : `_pipeline/backup-index-2026-07-01.html`.
- **Modèle (`#viz`)** : treemap redondant → schéma « un seul point de responsabilité » (dispersé→point unique→rendu FR/étranger). Vérificateur Opus frais = **auto** (7/7 déterministes, juge 0.82-0.86, conf 0.88). Commit `cb25649`.
- **Repères (`#reperes`)** : chiffres-clés sous filet or. Vérificateur = **fix** (chiffre dépassait le hero sur mobile) → corrigé `.stat__n` clamp min 2.6→2.2rem (mesuré 35.2px < hero 36.8px à 390). Commit `364fa45`.
- **Approche (`#approche`)** : index éditorial de 4 principes (plus de doublon avec la citation). Vérificateur = **fix** (eyebrow or `--gold-d` sur taupe = 4.06:1 < AA) → corrigé `class bg-taupe`→`bg-cream` (mesuré 4.84:1 AA). Commit `0fae53d`.
- **Décision juge (loggée)** : panel cross-famille = **GPT-5.5** (`openai/gpt-5.5`) via OpenRouter, **clé dans `C:\Users\Neon\.claude\skills\council\.env`** (variable `OPENROUTER_API_KEY` ; l'ancien `.env` C:\Paulin n'existe plus). **`reasoning.effort=high`** (testé A/B vs `max` = verdict identique). Panel = **ship + fort-enjeu seulement** ; juge primaire courant = **Opus frais isolé**. Consigné dans `~/.claude/skills/design-site/references/verification.md` + `docs/CHANGELOG.md`.

## EN COURS (à la coupure)
- **`designer-contact`** (subagent Opus, background, team `session-df848a9f`) : refond `#contact`. À la reprise : récupérer son livrable (SendMessage) ou vérifier si `#contact` a changé dans le fichier ; s'il n'a rien rendu, relancer un designer contact.

## BACKLOG ACTIONNABLE (re-passe Fable — complet, dans l'ordre de la page)
Pour CHAQUE section : suivre les règles du BOTTOM LINE (procédé blueprint + /design-section restauré : direction user → designer plein contexte → critique séparé → l'ŒIL DU USER tranche en page live). Aucun juge IA, aucun verdict machine.
1. **Intro (`#perimetre`)** — baseline sobre correcte mais « sage ». Slops déjà REJETÉS par l'user (ne pas re-proposer) : lettrine dorée, diagonale zigzag.
2. **NAV / header (`.hdr`)** — AJOUT user 2026-07-02 : Fable PROPOSE une nouvelle nav. ⚠️ Baseline AIMÉE par l'user (logo serif + italique or, liens or-underline, CTA pill « Adresser une demande », verre dépoli au scroll) → mandat = élévation, PAS table rase ; le HERO reste intouchable (la nav doit dialoguer avec lui) ; **GATE USER OBLIGATOIRE avant adoption** (nouveau/goût, jamais auto). Préserver : CTA unique, états transparent→is-solid, burger mobile, a11y focus.
   **Directive user 2026-07-03 : « je préfère la nouvelle nav mais avec la police de l'ancienne. »** « La nouvelle » = IDENTIFIÉE : la nav de la **variante C** (confirmé par l'user sur ses traits : « une animation quand elle revient » = la ligne or dégradée `.hdr::after` qui s'anime scaleX 0→1 au passage is-solid ; « plus aérée » = padding 18px au repos vs 11px sur l'ancienne, se resserrant à 11px au scroll — vérifié dans le code). À exécuter : fusion = comportement/aération de C (ligne or animée + padding 18→11 + verre dépoli) + POLICE/logo de l'ancienne (A/v2-final) ; montrer la fusion EN PAGE LIVE (pas en image) ; gate user avant adoption.
3. **Domaines (`#domaines`)** — ✅ RÉSOLU 2026-07-03 : crash-test mené (2 candidates : registre threadé puis rail + « 5 fantôme ») → verdict user : « je préfère celle-ci [l'originale], elle est plus classe ; le 5 fait gadget » → **version ORIGINALE (rail sticky) RESTAURÉE dans v2-final, VERROUILLÉE** (baseline `_verify/baselines/domaines/`, commit d11c49d). Ne plus y toucher sans direction user explicite.
3. **Citation (`.quote-block`)** — baseline : image N&B bibliothèque + citation centrée (l'user l'aimait beaucoup).
4. **Modèle (`#viz`)** — baseline : schéma fan-in/fan-out. **Défaut connu (GPT-5.5)** : « pas assez propriétaire, pourrait appartenir à n'importe quelle maison premium » → viser une signature possédable.
5. **Repères (`#reperes`)** — baseline : chiffres sous filet or continu.
6. **Approche (`#approche`)** — baseline : index éditorial 4 principes.
7. **Contact (`#contact`)** — baseline : ink + champs-filets (verdict auto 0.87).
8. **Footer** — À CRÉER : raison sociale **PERICLES GESTION**, mentions légales, copyright, aucun matricule/ID ; **virer l'email + adresse Haussmann INVENTÉS** encore présents (~l.811).
9. **Cohérence globale** — rescreenshot page entière : échelle titres (hero le plus grand), `scroll-margin-top` header sur les ancres, fonds/boutons/tokens.
10. **Passe COPY (AVEC l'user, gate)** — textes réels source-locked : repères (chiffres non-nominatifs), approche (4 principes), contact (canal), footer (SIREN, siège…), modèle ; hero copy en DERNIER ; nuancer le principe-1 (répète « un seul point de responsabilité ») ; « obligation de résultat » répété 3× dans #domaines (right speech, varier) ; le h2 du modèle répète la formule du hero (fil rouge à arbitrer).
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
3. Reprendre le BACKLOG à l'item courant, avec **/design-section restauré tel quel** (sa boucle : direction user → designer [prompt-type original, modèle le plus capable du moment] → critique séparé [rubric] → montrer au user en page live, son « ok » = section faite) → `git add v2-final/index.html && git commit && git push`. Regarder les captures de réfs AVANT de designer (pixels, pas descriptions).
4. Ne PAS lancer la passe copy ni le ship sans l'user (gates).
