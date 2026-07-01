# BRIEF.md — Périclès Gestion

> Pipeline `/design-site` en mode **assisté** (human-on-the-loop). Ce fichier + `tokens.md` = la seule vérité. Lire avant de produire, écrire après, jamais la mémoire de conversation.

## Projet
- **Client** : Périclès Gestion — société de gestion (SAS FR). Opère les fonctions **financières, sociales et de conformité** d'un groupe d'établissements, et lui délivre les **prestations techniques, digitales et de services** dont il a besoin, en France comme à l'étranger, depuis « **un seul point de responsabilité** ».
- **Registre** : magazine de luxe institutionnel sobre.
- **Métier (VERROUILLÉ)** : société de gestion **OPÉRATIONNELLE** d'un groupe — elle opère les fonctions finance / paie / social / conformité / systèmes-IT et délivre les prestations. **PAS** gestion de portefeuille / d'actifs (AMF), **PAS** holding, **PAS** family office. Les réfs Wendel / Pictet / Kering / Hermès servent au **style visuel uniquement**, jamais à l'activité ni à l'architecture.
- **CTA primaire (unique)** : « **Adresser une demande** ».
- **Contraintes** : ninja (aucune école/client cité) · aucun nom de staff public · right speech (pas de faux comité/partenariat/rentrée) · accents FR.

## Discovery (à grounder/compléter par /site-architect)
- **But du site** : présenter Périclès et sa promesse de responsabilité unique, et capter une prise de contact qualifiée.
- **Audience** : dirigeants / directions de groupes d'établissements.
- **Positionnement** : le tiers de confiance qui tient l'ensemble des fonctions de gestion et en répond ; le client garde l'arbitrage, Périclès répond de la tenue.
- **Voix** : sobre, institutionnelle, responsable, sans esbroufe.

## Roadmap (scope phasé)
- **Phase 1 — MAINTENANT : monopage** (la home). Ne construire que la home ; c'est le périmètre courant.
- **Phase 2 — rentrée (plus tard)** : éclater en **pages séparées** (ex. Approche, Contact, une page par domaine) quand le temps le permet. L'architecture de la home doit rester compatible avec cette évolution.

## Décisions figées
- **Hero + nav** : VALIDÉS, **on n'y touche pas** (gate direction faite). Réglés au pixel — voir `tokens.md` (serif 400 « carved » -.022em, deck muted 72%, labels .14em). Ils sont la référence DNA.
- **Intro (`#perimetre`)** : refondue sobre (bloc aligné, hiérarchie typo), validée.
- **Domaines (`#domaines`)** : refondue (rail éditorial sticky à gauche + liste numérotée à droite, index or compacts), validée.
- **Citation (`.quote-block`)** : validée, gardée (image N&B bibliothèque + citation serif).
- **Treemap (`#viz`)** : PROBLÈME — répète les 5 mêmes domaines que `#domaines` (redondance). À trancher par l'architecture : transformer en section non-redondante (preuve / « comment ça marche » / chiffres) ou couper.
- Restent à traiter : `#reperes` (stats), `#approche`, `#contact`, footer (dont **copyright / mentions légales**).

## Sitemap + ordre des sections + intention  ← /site-architect écrit ici
_(à remplir : structure groundée sur de vrais sites de sociétés de gestion / holdings / family offices premium ; pour la home monopage, l'ordre des sections + l'intention « one job » de chacune + où vit le CTA)_

## Critères d'acceptation projet (Given/When/Then)  ← /site-architect écrit ici
_(dérivés du brief : registre respecté · ninja · CTA « Adresser une demande » présent et bien placé · faits interdits absents · voix tenue · un seul job par section. ~80% viennent de la constitution universelle, cf. verification.md ; ~20% projet ici.)_

## Copy (source-locked)  ← passe copy (étape 3)
_(les textes du site sont des placeholders provisoires ; à figer avec le client, chaque fait tracé sinon `[à fournir]`. Le hero copy se fige EN DERNIER.)_

## Fichiers
- Site : `v2-final/index.html` (self-contained, servi via GitHub Pages)
- Tokens / DNA : `_pipeline/tokens.md`
- Restore point : `_pipeline/backup-index-2026-07-01.html`
- Repo : `quantum-nebula-dev/site-mockups-eval` (public, noindex). URL : https://quantum-nebula-dev.github.io/site-mockups-eval/v2-final/
