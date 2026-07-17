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
- **2026-07-16 — reprise post-pivot blueprint** : hero **VERROUILLÉ** (validé user) ; nav gardée (aimée). **Mode ÉLAN** (la session principale construit, l'œil du user = seul juge, aucun juge IA). Chantier courant : la home section par section à partir de `#perimetre` ; puis passe copy avec le user ; puis finition/QA. Monopage phase 1 (multipages à la rentrée).
- **2026-07-16 — protocole « 3 voix » par section** (décision user) : pour chaque section, comparateur = ① version existante du fichier · ② version élan du lead (optionnelle, biaisée-informée assumée) · ③ **designer AVEUGLE** (sous-agent frais : one-job + tokens épurés + capture du hero SEULEMENT, interdiction de lire le repo). L'œil du user tranche. Préflight OBLIGATOIRE par section : lire l'existant + ses commentaires de lock avant d'écrire.
- **2026-07-16 — intro (`#perimetre`) VALIDÉE** : proposition C (standfirst ample + italique or, filet or médian, réponse | pivot en vis-à-vis).
- **2026-07-16 — domaines (`#domaines`) VALIDÉS** : version existante du 03/07 re-choisie face à 2 alternatives from scratch (élan + aveugle) — rail sticky + liste numérotée grands index or, inchangée.
- **2026-07-16 — modèle (`#viz`) VALIDÉ** : mosaïque existante gardée + **photos duotone** dans les tuiles (photo N&B teintée dans la couleur de chaque tuile, voiles haut/bas pour la lisibilité). MAIS redondance actée : #domaines et la mosaïque listent les 5 mêmes domaines → **décision user : la mosaïque photos devient LA section domaines ; le design rail sticky + liste indexée est RÉAFFECTÉ à `#approche` (4 principes)**. Titres/leads à ajuster à la passe copy.
- **2026-07-17 — réaffectation EXÉCUTÉE** (ordre user) : l'ancien rail `#domaines` supprimé ; la mosaïque photos porte `id="domaines"` (eyebrow « Domaines », nav ok) ; `#approche` reconstruite sur le design rail sticky + liste indexée (classes `.dom*` réutilisées, 4 principes 01-04, ancien CSS charte retiré) ; overlay tuile 02 passé d'or (158,131,90) à **bronze sobre** (109,90,62 + assises brunes) — « trop jaune » corrigé. La home = hero → intro → domaines(mosaïque) → citation → repères → approche(rail) → contact. À montrer au user en live pour validation.
- **Hero + nav** : VALIDÉS, **on n'y touche pas** (gate direction faite). Réglés au pixel — voir `tokens.md` (serif 400 « carved » -.022em, deck muted 72%, labels .14em). Ils sont la référence DNA.
- **Intro (`#perimetre`)** : refondue sobre (bloc aligné, hiérarchie typo), validée.
- **Domaines (`#domaines`)** : refondue (rail éditorial sticky à gauche + liste numérotée à droite, index or compacts), validée.
- **Citation (`.quote-block`)** : VALIDÉE 17/07 — retour à la V0 ORIGINALE (buste + bibliothèque, citation serif italique 300, cite or), puis passage de la photo EN COULEUR (grayscale retiré, saturate .85, voile ink allégé .38-.5) à la demande du user.
- **Repères (`#reperes`)** : VALIDÉS 17/07 — retour à la V0 PREMIER JET (bande sombre bg-ink « Une responsabilité, nettement délimitée. », 4 compteurs 1/5/FR·INT/100%) choisie face à 6 alternatives (existante taupe, 2 élan, 3 répertoire). Enseignement : le user privilégie systématiquement les sections du premier jet (concours mockups-v3).
- **Fonds réglés 17/07 (surcharge corrigée)** : intro CRÈME · domaines(mosaïque) BLANC · citation couleur · repères INK · approche BLANC (rail sticky) · contact INK.
- **Protocole 17/07 — MINI-CONCOURS par section** (préféré par le user après échec du mode répertoire, retiré des skills) : 5 designers, un par réf du concours d'origine (chacun lit SA direction `mockups-v3/<ref>/index.html` comme ADN), contenu source-locked verbatim, tokens v2-final imposés, l'œil du user tranche. Premier verdict : **contact = direction WENDEL** (titre serif gauche / champs soulignés qui se dorent au focus, bouton pilule or) installée le 17/07 avec le SCROLLCUE du hero réutilisé en tête de section (transition approche→contact). Le comparateur des 6 versions reste dans _pipeline/propositions/.
- **Treemap (`#viz`)** : PROBLÈME — répète les 5 mêmes domaines que `#domaines` (redondance). À trancher par l'architecture : transformer en section non-redondante (preuve / « comment ça marche » / chiffres) ou couper.
- Restent à traiter : `#reperes` (stats), `#approche`, `#contact`, footer (dont **copyright / mentions légales**).

## Grounding : concurrents réels (IA commune)
Recherche 2026-07-01 (subagent recentré sur le BON métier = gestion opérationnelle / services support à des groupes ; Exa + captures dans `refs/`).
- **Jumeau structurel** (pôle de gestion mutualisé d'UN groupe = modèle exact de Périclès) : **RT Office** (RT Global Solution, FR).
- **Prestataires de gestion opérationnelle à des groupes/établissements** : **EXEIGUARD** (FR, fonctions support mutualisées), **Supporting Education Group** (UK, services aux écoles — proche BISP), **DSS** (US, back-office éducation), **MedxMSO / PHXmso** (MSO santé), **Peak Dental Services** (DSO).
- **Réfs de STYLE uniquement** (registre luxe, jamais le métier) : Wendel, Pictet.
- **IA commune du métier** : Hero « focus on your mission » + CTA · grille de fonctions/domaines · pourquoi-nous/principes · repères chiffrés · Contact · Footer. Courant aussi : le CONSTAT/problème après le hero · LE MODÈLE / « comment ça marche » (PHXmso « How We Operate », 4 étapes) · qui-l'on-sert.
- **Interdit pour Périclès** (présent chez TOUS les analogues, incompatible ninja/registre) : témoignages nominatifs, logos/compteurs de clients, grilles de prix/offres, section clients nominative. → couper systématiquement.

## Séquençage + plan d'assets de la home (étape 1 /design-page — à valider user avant code)
Reconstruction FROM SCRATCH en mode élan, section par section. Rythme des fonds : sombre (hero) → blanc → crème → blanc → sombre (image) → taupe → crème → ink → ink. UN climax visuel : le schéma du modèle.
1. **Intro / périmètre** — forme : TYPOGRAPHIQUE assumée (le texte est l'asset ; ouverture éditoriale, zéro décor). Fond blanc, densité faible (respiration post-hero).
2. **Domaines (5)** — forme : LISTE ÉDITORIALE indexée (typographique structurée). Fond crème, densité moyenne.
3. **Le modèle** — forme : SCHÉMA DESSINÉ = **le climax de la page** (la relation dispersé → un point → rendu ; micro-labels 2-4 mots, 1 annotation max — l'ancre dessine, elle ne parle pas). Fond blanc. **Asset risqué → boucle isolée** : fabriqué/réglé seul, montré au user, PUIS intégré.
4. **Citation / manifeste** — forme : IMAGE PLEIN CADRE (photo N&B noble + voile ink + une phrase). 2e temps fort (photo ≠ schéma). **Choix d'image montré au user.**
5. **Repères** — forme : BANDE DE GROS CHIFFRES SERIF (4 attributs non-nominatifs, [N] pour l'inconnu). Fond taupe, densité faible.
6. **Approche** — forme : TYPOGRAPHIQUE (4 principes en liste éditoriale sobre — pas de cases-texte). Fond crème.
7. **Contact** — forme : FORMULAIRE ÉDITORIAL (champs-filets, pas de boîtes) + CTA « Adresser une demande ». Fond ink (clôture, bookend du hero).
8. **Footer** — forme : typographique minimal (PERICLES GESTION, mentions légales placeholders, copyright — virer les coordonnées inventées). Ink, continuité du contact.

## Sitemap home Périclès (monopage — ordonné · one-job · source · CTA) — VALIDÉ 2026-07-01
1. **Hero** — Périclès opère les fonctions de gestion d'un groupe pour qu'il se concentre sur sa mission (« un seul point de responsabilité ») + amorcer l'action. *MedxMSO/PHXmso/DSS/SEG (hero « focus on your mission »).* **CTA : oui** (« Adresser une demande », primaire). — FIGÉ, ne pas retoucher.
2. **Intro / le périmètre** (`#perimetre`) — dire ce qu'est Périclès + le constat (fonctions dispersées → consolidées) ; décrire le TYPE de groupe servi sans le nommer. *EXEIGUARD (mission), DSS, PHXmso (le problème).* CTA non. — validée.
3. **Domaines (5)** (`#domaines`) — l'étendue des fonctions opérées, une carte par domaine. *Universel (MedxMSO 6, EXEIGUARD 4, Peak 6, SEG 4, RT Office = pôles).* CTA non. — validée.
4. **Le modèle — « un seul point de responsabilité »** [EX-`#viz`, TRANSFORMÉ] — MONTRER le mécanisme par un schéma/process de consolidation (fonctions éparses d'un groupe → point unique → prestations rendues, FR + étranger), sans re-lister les 5 domaines. *PHXmso « How We Operate » (process 4 étapes) + motif « we run everything else » chez tous.* CTA soft possible.
5. **Citation / manifeste** (`.quote-block`) — temps éditorial, une phrase qui incarne la posture (responsabilité, durée, discrétion). *Apport registre luxe (réf STYLE Wendel/Pictet), pas métier.* CTA non. — validée, gardée.
6. **Repères / chiffres** (`#reperes`) — preuve NON-nominative (années, fonctions couvertes, juridictions FR+étranger, continuité). *MedxMSO/DSS/Peak/SEG chiffrent tous, MAIS adapté ninja : attributs de Périclès, jamais des clients.* CTA non.
7. **Approche / principes** (`#approche`) — comment Périclès opère (3-4 principes : responsabilité unique / interlocuteur intégré, confidentialité, rigueur, proximité dirigeant). *EXEIGUARD « Pourquoi choisir » (4, dont interlocuteur unique), SEG (3), MedxMSO.* CTA non.
8. **Contact** (`#contact`) — convertir en cadre confidentiel. *SEG « Get in touch » / DSS « Let's connect » / MedxMSO.* **CTA : oui** (« Adresser une demande » répété).
9. **Footer** — mentions légales, raison sociale PERICLES GESTION, copyright. *Universel.* CTA non. — À CRÉER.

**Décision treemap `#viz`** : TRANSFORMER (pas couper) en section 4 « Le modèle ». Le treemap re-liste les 5 domaines (doublon) ; on le remplace par la PREUVE du différenciateur (schéma « comment ça marche » façon PHXmso « How We Operate »).

**CTA répété** : hero + contact (min. 2), soft après le modèle. **Footer légal** : à combler (absent, universel).

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
