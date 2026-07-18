# Concours FOOTER — brief partagé (Périclès Gestion)

Tu dessines UNE variante du **footer** de la home. L'utilisateur les regardera côte à côte dans un carrousel et choisira à l'œil. Ton job : proposer une composition de footer DISTINCTE et premium, fidèle à l'ADN de ta référence assignée.

## Lire AVANT (obligatoire, ne rien inventer de mémoire)
1. `C:/Users/Neon/pericles-mockups/_pipeline/tokens.md` — DNA visuel complet (palette, typo, doctrine couleur, alternance des fonds).
2. `C:/Users/Neon/pericles-mockups/v2-final/index.html` — le site réel : lis le `<head>` (imports Google Fonts + `:root`), la section `#contact` (ce qui précède le footer, pour la transition), et le footer actuel.
3. Ta référence ADN : `C:/Users/Neon/pericles-mockups/mockups-v3/<TA_REF>/index.html` — observe SON footer / bas de page (rythme, hiérarchie, façon d'organiser marque / navigation / contact / mentions). Tu t'en inspires, tu ne le copies pas.

## Tokens imposés (aucune couleur brute hors tokens)
`--ink #001931` · `--ink-2 #15324d` · `--gold #9E835A` · `--gold-d #7f6740` · `--body #4F5E6B` · `--cream #F7F3EB` · `--taupe #E7DFD2`. Serif titres = **Newsreader** (poids 400, jamais bold). Corps/labels = **Hanken Grotesk**. Labels/eyebrow = uppercase, .74rem, poids 600, letter-spacing .14em, couleur or.

## Doctrine couleur (récente, groundée — la respecter)
- **L'or ne se pose JAMAIS en aplat.** Seulement en trait / texte / filet (~5-10% de la surface). Pas de bloc doré plein.
- Texte sur fond sombre = **échelle d'opacités** : lecture primaire `rgba(255,255,255,.85)`, secondaire/labels `.72`, notes discrètes `.5`. Jamais blanc pur en aplat de texte.
- Filets sur sombre = blanc **8-12%** (`rgba(255,255,255,.12)`).
- Le footer est **sombre (ink)**. Un seul geste signature or admis : le filet/arc de **frontière** en haut du footer (la transition depuis le contact clair). Le reste de l'or = liens/labels en texte, soulignements de hover en trait.

## CONTENU — VERBATIM, source-locké (ne change AUCUN mot, n'invente rien)
- Marque : **Périclès** (gras) **Gestion** (italique).
- Description : « Prise en charge et pilotage des fonctions de gestion des groupes d'établissements et de leurs partenaires internationaux, en France et à l'international. »
- Bloc navigation, label « Le site » : liens **Domaines** (`#domaines`), **Approche** (`#approche`), **Contact** (`#contact`).
- Bloc contact, label « Écrire » : **contact@periclesgestion.com** (`mailto:`) + note « Un seul interlocuteur vous répond, par écrit. »
- Barre légale : « © 2026 Périclès Gestion. Tous droits réservés. » + liens **Mentions légales** (`#`) et **Haut de page** (`#top`).
- **INTERDIT** : adresse postale (aucune — inventer une adresse = faute), téléphone, réseaux sociaux, nom de client/école (ninja), nom de staff, chiffre ou promesse inventés (right speech). Accents FR corrects partout, jamais de tiret long (—).

## Ce que tu produis
Écris UN fichier standalone : `C:/Users/Neon/pericles-mockups/_pipeline/propositions/footer-<TA_REF>.html`
- HTML complet : `<!doctype html>` + `<head>` avec les **mêmes imports Google Fonts que le site** + un `<style>` qui redéclare le `:root` (recopie les tokens du site) + un base minimal.
- `<body>` : une **fine bande de fin du contact** (fond blanc, juste un rappel « Adresser une demande » ou l'assurance, pour que la TRANSITION vers le footer sombre se lise) PUIS ton **footer** complet. Tout le CSS du footer est dans le `<style>` de ce fichier (autonome, aucune dépendance).
- Design le footer UNIQUEMENT ; contenu verbatim ci-dessus ; responsive propre (empilement sous ~820px) ; `prefers-reduced-motion` respecté si tu animes un filet.
- Ne touche à AUCUN autre fichier. Pas de `git`. Pas de placeholder Lorem.

## Rends (ta réponse finale = données brutes, pas un message)
Une seule ligne : le chemin du fichier écrit + 6-10 mots sur le parti pris de composition de TON footer (ce qui le distingue).
