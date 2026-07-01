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

## Grounding : concurrents réels (IA commune)
Recherche 2026-07-01 (subagent, Exa + captures dans `refs/`).
- **Jumeaux métier** (services de gestion opérés pour des groupes, « point unique ») : TMF Group, Vistra, Ocorian.
- **Jumeaux registre premium sobre** (style visuel) : Wendel, Pictet.
- **Pattern « un seul point de responsabilité »** : NESS Family Office, Arx Family Office → utilisés UNIQUEMENT pour le pattern de communication « one hub », **pas** comme métier (Périclès n'est pas un family office).
- **IA commune (7/7)** : Hero + CTA · grille de domaines/services · Contact · Footer légal. **Très courant** : bloc chiffré « in numbers », principes/pourquoi-nous. **Courant chez les services** : bloc « point unique » qui MONTRE le mécanisme. **Écartés** (ninja / monopage) : insights-news, clients nominatifs, FAQ (→ phase 2).

## Sitemap home Périclès (monopage — ordonné · one-job · source · CTA)
1. **Hero** — poser le positionnement (opérateur unique des fonctions d'un groupe, « un seul point de responsabilité ») + amorcer l'action. *Wendel/TMF/NESS.* **CTA : oui** (« Adresser une demande », primaire). — FIGÉ, ne pas retoucher.
2. **Intro / le périmètre** (`#perimetre`) — dire ce qu'est Périclès + le problème résolu (fonctions dispersées → consolidées) ; décrire le TYPE de groupe servi sans le nommer. *TMF/Ocorian.* CTA non. — validée.
3. **Domaines (5)** (`#domaines`) — montrer l'étendue des fonctions opérées, une carte par domaine. *Universel.* CTA non. — validée.
4. **Le modèle — « un seul point de responsabilité »** [EX-`#viz`, TRANSFORMÉ] — MONTRER le mécanisme par un schéma de consolidation (fonctions éparses d'un groupe → point unique → prestations rendues, FR + étranger), sans re-lister les 5 domaines. *Arx (one hub) / TMF (single point) / Redwood (one system).* CTA soft possible.
5. **Citation / manifeste** (`.quote-block`) — temps éditorial, une phrase qui incarne la posture (responsabilité, durée, discrétion). *Wendel/Arx.* CTA non. — validée, gardée.
6. **Repères / chiffres** (`#reperes`) — preuve NON-nominative (années, fonctions couvertes, juridictions FR+étranger, continuité). *Wendel/TMF/Ocorian « in numbers ».* CTA non.
7. **Approche / principes** (`#approche`) — comment Périclès opère (3-4 principes : responsabilité unique, confidentialité, rigueur, proximité dirigeant). *NESS (4)/Arx (3)/Pictet.* CTA non.
8. **Contact** (`#contact`) — convertir en cadre confidentiel. *Ocorian/NESS/Vistra/TMF.* **CTA : oui** (« Adresser une demande » répété).
9. **Footer** — mentions légales, raison sociale PERICLES GESTION, copyright. *Universel.* CTA non. — À CRÉER.

**Décision treemap `#viz`** : TRANSFORMER (pas couper) en section 4 « Le modèle ». Le treemap actuel re-liste les 5 domaines (doublon pur) ; on le remplace par la PREUVE visuelle du différenciateur (« un seul point de responsabilité »), affirmé partout mais montré nulle part.

**CTA répété** : hero + contact (min. 2), soft après le modèle. **Footer légal** : à combler (absent aujourd'hui, universel chez les 7).

## Critères d'acceptation projet (Given/When/Then)
1. **Registre** — hero + intro perçus « magazine de luxe institutionnel » (ample, serif, air, sobriété), sans dashboard ni gadget.
2. **CTA unique** — le seul CTA est « Adresser une demande », présent au hero ET au contact, sans CTA concurrent (pas de devis/abonnement/téléchargement).
3. **Ninja** — aucun nom de client, école, établissement ni partenaire ; preuves non-nominatives seulement.
4. **One-job par section** — une seule intention nommable ; la section 4 MONTRE le modèle et ne re-liste PAS les 5 domaines (zéro doublon).
5. **Preuve non-nominative** — les chiffres comptent des attributs de Périclès (années, disciplines, juridictions FR+étranger, continuité), jamais des clients.
6. **Modèle montré** — un schéma montre la consolidation (dispersé → point unique → rendu, FR + étranger).
7. **Footer conforme** — raison sociale PERICLES GESTION + mentions légales + copyright ; aucun matricule/ID interne.
8. **Above-the-fold** — le 1er écran donne déjà le positionnement + le CTA.

## Copy (source-locked)  ← passe copy (étape 3)
_(les textes du site sont des placeholders provisoires ; à figer avec le client, chaque fait tracé sinon `[à fournir]`. Le hero copy se fige EN DERNIER.)_

## Fichiers
- Site : `v2-final/index.html` (self-contained, servi via GitHub Pages)
- Tokens / DNA : `_pipeline/tokens.md`
- Restore point : `_pipeline/backup-index-2026-07-01.html`
- Repo : `quantum-nebula-dev/site-mockups-eval` (public, noindex). URL : https://quantum-nebula-dev.github.io/site-mockups-eval/v2-final/
