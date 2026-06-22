# Scoring des 5 maquettes — Périclès Gestion (Wave 5, pipeline V3)

> Registre demandé par le client : **magazine de luxe**. Un immense hero qui remplit l'écran (grande photo cinématique façon Wendel, OU énorme titre serif façon Pictet), beaucoup d'air, presque rien d'autre avant de scroller, clair/lumineux, serif éditoriale, accent rare et juste. Registre rejeté : rapport annuel / tableau de bord (donut charts, grilles de cartes, listes de communiqués).
>
> Barème : 5 axes × 20 points = 100.
> A. Fidélité au registre voulu (immense hero + air + clair + sobre ; magazine, pas dashboard).
> B. Raffinement esthétique et typographique.
> C. Clarté, lisibilité, hiérarchie.
> D. Respect de la copy imposée + garde-fous (anonymat, mots interdits, ton institutionnel retenu).
> E. Qualité technique (structure, responsive 375px, accessibilité, finition).

---

## 1. Wendel — 79/100

| Axe | Note | Justification courte |
|---|---|---|
| A. Registre | 15/20 | Hero plein écran `100svh`, photo N&B cinématique, gradient profond, serif blanc : excellent above-the-fold magazine. MAIS section **treemap** (5 tuiles colorées ink/or/taupe/crème) + band sombre **4 chiffres en grille** = exactement le registre « tableau de bord » que le client rejette. |
| B. Raffinement | 17/20 | Newsreader + Hanken Grotesk, palette bleu nuit + or bronze très tenue, eyebrow filet, échelle h1 jusqu'à 4.4rem. Cohérent et soigné. L'or est tenu en accent rare. |
| C. Clarté | 17/20 | Hiérarchie nette, given→new respecté, liste de domaines éditoriale lisible, contraste correct. |
| D. Copy & garde-fous | 17/20 | Copy imposée respectée mot pour mot, anonymat tenu (aucun nom de personne), ton institutionnel retenu. Le treemap force un libellé « data » sans inventer de faux chiffres. |
| E. Technique | 13/20 | Skip link, focus-visible, reduced-motion, burger ARIA, compteurs : solide. MAIS hero `align-items:flex-end` colle le titre en bas, et le treemap ajoute du poids visuel/technique non demandé. Photos picsum (placeholder), pas Unsplash institutionnel. |

**2 forces**
- Above-the-fold magazine quasi parfait : photo cinématique + serif blanc + air, c'est la réf Wendel littérale.
- Système de couleur le plus tenu et le plus « société de gestion anonyme » des cinq.

**2 faiblesses concrètes**
- La section treemap (5 tuiles colorées) est le geste le plus proche du « dashboard » rejeté : à supprimer ou convertir en liste.
- Band des 4 chiffres en grille = même reproche, registre rapport annuel.

---

## 2. Pictet — 68/100

| Axe | Note | Justification courte |
|---|---|---|
| A. Registre | 11/20 | Hero **typographique** sur blanc (bonne piste Pictet), mais hero court (`padding`, pas `100svh`) et surtout **bandeau photo immédiat sous le hero** → l'écran ne se remplit pas d'un seul geste. Pire : section repères en **liste de stats** + section périmètre en **sélecteur à onglets (tabs)** = registre tableau de bord interactif, frontalement rejeté. |
| B. Raffinement | 15/20 | Newsreader 300 + terracotta rare, ivoire/blanc lumineux, échelle h1 jusqu'à 5rem : c'est beau et clair. Mais hero en grille 2 colonnes (titre / sous-titre+CTA) dilue l'effet « énorme titre serif » qui faisait Pictet. |
| C. Clarté | 16/20 | Très lisible, contraste excellent, hiérarchie soignée, accessibilité des tabs exemplaire. |
| D. Copy & garde-fous | 16/20 | Copy respectée, anonymat tenu. Le sélecteur invente des sous-listes (« comptabilité, trésorerie… ») cohérentes mais ajoute du contenu non demandé. |
| E. Technique | 10/20 | La plus complète techniquement (tabs ARIA roving tabindex, counters padding, classe `.js`). MAIS cette richesse sert un registre interactif/dashboard non voulu : la qualité technique joue contre la fidélité. Note E pondérée à la baisse car la finition est mise au service du mauvais registre. |

**2 forces**
- Hero typographique clair sur blanc : la meilleure incarnation de la piste « énorme serif Pictet » côté lumière et calme.
- Accessibilité et finition JS de très haut niveau (tabs clavier, statuts aria-live).

**2 faiblesses concrètes**
- Le sélecteur à onglets « France / International / Siège » EST le geste dashboard interactif rejeté : à retirer.
- Hero qui ne remplit pas l'écran (bandeau photo visible immédiatement + grille 2 colonnes) : il manque le « immense hero, presque rien d'autre avant de scroller ».

---

## 3. Brunello — 84/100

| Axe | Note | Justification courte |
|---|---|---|
| A. Registre | 17/20 | Hero `100svh` plein écran, photo N&B + Ken Burns, serif Cormorant Garamond 300, gradient profond, scroll-cue : magazine de luxe pur. Air généreux. Seul accroc : la **band de 3 chiffres** (stats) reste un geste rapport annuel, mais discret (3 chiffres mono, pas une grille de cartes). |
| B. Raffinement | 18/20 | Cormorant Garamond + General Sans, palette ivoire/sable/anthracite très chaude, citation full-bleed N&B au centre du parcours : c'est le plus « maison » et le plus éditorial. Poids 300 sur les titres = élégance. |
| C. Clarté | 17/20 | Hiérarchie claire, domaines en liste 3 colonnes lisible, citation full-bleed comme respiration. Cormorant en petit corps serait risqué mais ici réservé aux titres. |
| D. Copy & garde-fous | 16/20 | Copy respectée, anonymat tenu (cite « Périclès Gestion », pas de personne). La citation inventée « Répondre de l'exécution, c'est tenir l'ensemble » n'est pas dans la copy imposée — léger ajout éditorial à valider. |
| E. Technique | 16/20 | Skip, focus-visible, reduced-motion, menu mobile plein écran soigné, counters. Solide. Images Unsplash institutionnelles (mieux que picsum). Cormorant Garamond dépend du chargement webfont (fallback Georgia acceptable). |

**2 forces**
- Le rendu le plus « magazine de luxe / maison établie » : hero cinématique + citation full-bleed + palette chaude ivoire.
- Cohérence éditoriale d'ensemble la plus aboutie, accent (anthracite/ink) tenu et rare.

**2 faiblesses concrètes**
- La band de 3 chiffres (1 / 5 / 2) reste un réflexe rapport annuel : pourrait être fondue dans la prose ou retirée.
- Citation « cite » inventée hors copy imposée : à supprimer ou faire valider (garde-fou contenu).

---

## 4. Kering — 83/100

| Axe | Note | Justification courte |
|---|---|---|
| A. Registre | 18/20 | Hero `100svh`, photo cinématique + Ken Burns, Fraunces jusqu'à **7rem** (le plus grand titre serif des cinq), gradient double, scroll-cue : l'above-the-fold magazine le plus spectaculaire. Bandeau photo architecture en milieu de page = respiration éditoriale, pas dashboard. Seul accroc : la section « Repères » à 3 chiffres (1/5/2) sur fond noir. |
| B. Raffinement | 18/20 | Fraunces (serif à optical-sizing) + Archivo, palette crème/rosé + or bronze + noir d'ancrage : très luxe, très chaud. Le grand titre serif 7rem est le geste le plus audacieux et le plus réussi côté impact. |
| C. Clarté | 16/20 | Lisible et hiérarchisé. Le titre 7rem peut wrapper agressivement sur certaines largeurs ; la densité reste maîtrisée. |
| D. Copy & garde-fous | 16/20 | Copy respectée, anonymat tenu. Eyebrow « Société de gestion » + band « maison de gestion établie » : cohérent avec le ton institutionnel retenu. Ajoute « Obligation de résultat » en méta (pas dans la copy imposée mais fidèle au fond). |
| E. Technique | 15/20 | Skip, focus-visible, reduced-motion (Ken Burns + cue désactivés), menu mobile drawer latéral soigné. Bon. Le `kenburns` scale 1.06→1.14 est plus marqué que chez les autres (léger risque de lourdeur perçue). Images Unsplash. |

**2 forces**
- Le hero le plus impactant : Fraunces 7rem + photo cinématique = magazine de luxe maximal, exactement le brief.
- Palette crème/or la plus chaleureuse et la plus « maison de luxe » tout en restant institutionnelle.

**2 faiblesses concrètes**
- Titre 7rem : superbe en desktop large, mais à surveiller en wrap sur largeurs intermédiaires (équilibre des lignes).
- Section « Repères » 3 chiffres sur noir = reste un geste rapport annuel résiduel.

---

## 5. Hermès — 71/100

| Axe | Note | Justification courte |
|---|---|---|
| A. Registre | 11/20 | Registre **Pictet typographique** bien tenu (EB Garamond, ivoire lumineux, mono Overpass pour les data-labels), MAIS hero **en grille 2 colonnes avec image à droite dès le pli** → l'écran ne se remplit pas d'un grand geste unique. Surtout : **band de 4 stats**, **grille resp 3 cellules** (Opérer/Mobiliser/Délivrer), **liste portée mono** = accumulation de gestes « tableau de bord / fiche technique » que le client rejette. C'est la maquette la plus « rapport annuel structuré ». |
| B. Raffinement | 16/20 | EB Garamond + Hanken + Overpass Mono : le système typo le plus distinctif (le mono signe une identité « finance/data » assumée). Terracotta rare et juste. Très soigné, mais le parti mono pousse vers le registre fiche/document, pas magazine. |
| C. Clarté | 17/20 | Excellente hiérarchie, numérotation de sections `[ 01 ]`, rails terracotta au hover, lisibilité forte. |
| D. Copy & garde-fous | 16/20 | Copy respectée, anonymat tenu. Invente « 3 campus » en stat (chiffre non demandé, à surveiller : un faux chiffre sur un site anonyme = risque). |
| E. Technique | 16/20 | Skip, focus-visible, reduced-motion, menu mobile, counters mono, responsive 375 soigné (grilles → 1 colonne, dom-row reflow). Très propre. Images picsum (placeholder). |

**2 forces**
- Système typographique le plus identitaire (mono Overpass pour les labels = signature distinctive et chic).
- Finition technique et responsive les plus rigoureux de l'ensemble.

**2 faiblesses concrètes**
- Accumulation de modules structurés (4 stats + grille 3 cellules + liste mono) = exactement le registre « rapport annuel / fiche technique » rejeté ; hero qui ne remplit pas l'écran.
- Stat inventée « 3 campus » : chiffre non fourni par la copy, à retirer (cohérence anonymat/factualité).

---

## Classement

**Brunello (84) > Kering (83) > Wendel (79) > Hermès (71) > Pictet (68)**

Brunello et Kering sont au coude-à-coude et se détachent nettement : ce sont les deux seuls à livrer un hero plein écran qui remplit vraiment l'écran d'un seul geste cinématique, avec un parcours globalement éditorial plutôt que tabulaire. Wendel a le meilleur above-the-fold mais se sabote avec son treemap. Hermès et Pictet sont les plus aboutis techniquement mais accumulent le plus de modules « dashboard » que le client rejette explicitement.

## Recommandation

**Privilégier Kering**, de très peu devant Brunello.

Les deux sont d'excellents départs. Kering l'emporte parce que son hero (Fraunces 7rem sur photo cinématique crème/or) délivre l'effet « magazine de luxe, immense hero, presque rien d'autre avant de scroller » avec le plus d'impact, tout en restant institutionnel et anonyme. Son parcours est le plus proche du « beaucoup d'air, peu de modules ». Brunello est le second choix naturel : palette ivoire plus douce et citation full-bleed superbe, mais Cormorant Garamond 300 est un cran plus fragile que Fraunces (dépendance webfont, lisibilité en petites tailles), et il garde la band de 3 chiffres.

**Greffes recommandées sur la base Kering :**
- **Citation full-bleed N&B de Brunello** (section `quote-block`, photo + blockquote serif centrée) : c'est la plus belle respiration éditoriale du lot, plus « magazine » que la section approche actuelle de Kering. La préférer à la section « Repères » à 3 chiffres.
- **Palette ivoire/sable chaude de Brunello** en option, si le crème/rosé de Kering paraît trop coloré au client (le rosé `#F1E4DB` est le point le plus discutable de Kering).
- **Images Unsplash institutionnelles** de Brunello/Kering (pas les picsum de Wendel/Hermès).
- **Supprimer partout les bandes de chiffres** (Repères 1/5/2) : c'est le dernier résidu « rapport annuel » commun à Kering et Brunello. Les fondre dans la prose ou les retirer pour rester pleinement dans le registre magazine.
- De Hermès, ne **PAS** greffer les modules structurés (stats, grille 3 cellules, liste mono) : ils tirent vers le registre rejeté. Le seul élément réutilisable serait le label mono discret en eyebrow, si le client veut une touche « data » — mais c'est optionnel et secondaire.

**Garde-fou à appliquer avant livraison (toutes maquettes) :** retirer les chiffres/citations inventés hors copy imposée (« 3 campus » Hermès, citation « cite » Brunello, sous-listes du sélecteur Pictet) pour préserver l'anonymat et la factualité.
