# tokens.md — DNA visuel de Périclès Gestion

> Source de vérité du design (préflight anti-dérive). Toute étape du pipeline lit ce fichier + le site `v2-final/index.html` AVANT de produire. On ne réécrit jamais un token de mémoire. Le `:root` du fichier reste la référence exécutable ; ce document en est la doctrine.

Registre : **magazine de luxe institutionnel sobre** (réfs validées : Wendel, Pictet, Brunello, Kering, Hermès). Hero + nav = **figés, ne pas retoucher** (ils portent le DNA).

## Palette (n'utiliser AUCUNE valeur de couleur brute hors de ces tokens)
| Token | Valeur | Usage |
|---|---|---|
| `--ink` | `#001931` | bleu nuit profond — titres, fonds sombres |
| `--ink-2` | `#15324d` | bleu nuit clair |
| `--gold` | `#9E835A` | or / bronze sourd — accents, filets, index, hover |
| `--gold-d` | `#7f6740` | or assombri — petit texte or sur clair (eyebrow) |
| `--body` | `#4F5E6B` | gris-bleu — corps |
| `--cream` | `#F7F3EB` | crème chaude — fonds clairs |
| `--taupe` / `--taupe-2` | `#E7DFD2` / `#D6CAB4` | taupe |
| `--white` | `#FFFFFF` | |
| `--line` / `--line-2` | `rgba(0,25,49,.12)` / `rgba(255,255,255,.16)` | filets sur clair / sur sombre |

Accent unique = **l'or**. Interdits : couleur criarde, gradient violet, décoration arc-en-ciel. **WCAG AA** (≥ 4.5:1) sur tout texte.

## Typographie
- Serif titres : **Newsreader** (`--serif`). Corps + labels : **Hanken Grotesk** (`--grot`). Jamais Inter/Roboto par défaut.
- Échelle (tokens) : `h1 clamp(2.3rem,5.4vw,4.4rem)` · `h2 clamp(1.9rem,3.6vw,3rem)` · `h3 clamp(1.25rem,2vw,1.6rem)` · `p clamp(1rem,1.05vw,1.1rem)`.
- **Discipline d'échelle inter-sections** : le hero (H1) est TOUJOURS le plus grand ET le plus fort de la page. Un titre de section = niveau `h2` ; jamais une taille de titre inventée en local, jamais plus lourd que le hero.
- **Doctrine serif de luxe** (recherche Kinfolk / Tana / Descript) : grands titres serif en **poids 400** (jamais bold). Le luxe vient du **tracking serré** — hero `-0.022em`, effet « carved » — pas de la graisse (un serif gras à grande taille fait « pâté »). Cohérence de poids DANS un titre (un segment italique reste au même poids que le reste).
- **Labels / eyebrow** : uppercase, `.74rem`, poids 600, **letter-spacing `.14em`** (fourchette 0.1-0.15em ; au-delà = « overboard »), couleur or, précédés d'un filet or.
- **Deck / sous-titre de hero** : `18px`, poids 400, couleur **muted ~72% opacity** (recule derrière le titre), line-height ~1.55, max-width ~52ch. Explique/amplifie le titre, ne le répète pas.
- Corps : Hanken Grotesk 400, line-height 1.6, mesure 55-75ch.
- Nav : `.92rem`, poids 500. CTA : poids 600, tracking `+.01em`.

## Spacing & layout
- `--maxw:1180px` (hero `1200px`) · gouttière `--gut:clamp(20px,5vw,72px)`.
- Section : `padding-block:clamp(70px,9vw,140px)`.
- **Rythme des fonds** alternés (crème / blanc / ink bleu nuit / image N&B) pour cadencer la page clair-sombre.

## Formes & motion
- Boutons : **pill** (`border-radius:1000px`). CTA primaire unique = « **Adresser une demande** ». `.btn-ghost` bordure 1.5px.
- Filets **hairline** (1px, `--line`). Cartes : rayon doux.
- Header : fixe, verre dépoli au scroll (`.hdr.is-solid`).
- Motion : sobre. `.reveal` (fade léger). Signature d'interaction = **filet or qui se dessine** (« ligne active »). `prefers-reduced-motion` respecté.
- Images : **N&B** (grayscale + léger contraste), voile bleu nuit, HD (≥ 2000px). Photo réelle pour la preuve ; pas de stock-photo hero générique ; IA générative off.

## Anti-slop (détail : rubric de `/design-section`)
Bannir : hero centré, 3-card row, cards génériques, grilles uniformes sans rythme, **tiret long (—)**, lettrine/drop-cap plaquée, diagonale zigzag, effets décoratifs cumulés ou qui compensent une structure faible. Viser : composition asymétrique avec rythme, hiérarchie typo franche, **UN geste signature (retenue)**, « looks designed, not generated » (portfolio test), polish (alignement, mobile, edge cases).

## Contraintes projet (ninja + voix)
- **Ninja** : aucune école ni client cité.
- Aucun nom de staff en public (signatures email uniquement).
- **Right speech** : pas de faux « comité / partenariat / rentrée / engagement » ; on ne promet que le vrai.
- Accents FR corrects partout. Textes = **placeholders** jusqu'à la passe copy (source-locked).

## Alternance des fonds (doctrine gravée 18/07/2026, reconstituée de la V0)
Trois règles (détail : skill `/design-page`, étape 0) :
1. **Sombres = ponctuation** (hero, citation/image plein cadre, bande de chiffres ink, footer) : espacés, JAMAIS deux adjacents. Page ouvre et ferme sombre.
2. **Clairs alternent blanc pur ↔ chaud** (crème/taupe) : jamais deux chauds collés, jamais file de blancs.
3. **Section avant le footer = CLAIRE** (contact) : clôture claire → sombre nette.

Séquence de référence (mockups-v3, 9 temps) :
hero(ink) · intro(BLANC) · domaines(CRÈME) · citation(image sombre) · viz(BLANC) · repères(INK) · approche(TAUPE) · contact(BLANC) · footer(INK).

État v2-final 18/07 (8 temps après fusion viz→domaines + réordre) :
hero(ink) · intro(blanc) · domaines-mosaïque(crème) · citation-buste(image sombre) · **approche(BLANC)** · repères(INK) · contact(à trancher, viser CLAIR) · footer(INK).
Note : l'approche a été remontée avant les repères (18/07) pour éviter citation-sombre + repères-sombre collés → donne après le buste : clair · sombre · [contact clair] · footer.
Classes : `.bg-cream{background:var(--cream)}` · `.bg-taupe{background:var(--taupe)}` · `.bg-ink{background:var(--ink);color:rgba(255,255,255,.78)}` · pas de classe = blanc.
