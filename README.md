
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# [DDA](https://marsgotbars.github.io/fix-the-flow-interactive-website/)
<!-- Geef je project een titel en schrijf in één zin wat het is -->
De nieuwe Dutch Digital Agencies website.

**design**

<img width="789" alt="Screenshot 2024-12-18 at 12 03 50" src="https://github.com/user-attachments/assets/ebc25a45-4faa-4d41-9e62-5f203bbb4dd9" />

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Origineel bedoelt als de DDA vacature website, nu de nieuwe website die alle publicaties, vacatures en events bevat van de leden van het DDA.

### Gemaakte paginas
#### [Home pagina](https://marsgotbars.github.io/fix-the-flow-interactive-website/)
<img width="1454" alt="Screenshot 2024-12-18 at 11 21 14" src="https://github.com/user-attachments/assets/a3247748-108a-4d66-bd40-74e3c3702e12" />


#### [Publicaties pagina](https://marsgotbars.github.io/fix-the-flow-interactive-website/publicaties/)
<img width="1445" alt="Screenshot 2024-12-18 at 11 24 02" src="https://github.com/user-attachments/assets/2c269b50-fd92-41ab-843c-503d06fa51ac" />
<hr/>

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### HTML & CSS
Is gebouwd met accessibility voorop. Zo is het menu knopje een link die door linkt naar het footer menu, in het geval dat javascript uit staat. Hierbij is er ook gebruik gemaakt van passende elementen zoals `detail` elementen die gebruikt worden voor dropdown-selects

### JS & QoL (Quality of Life)

#### Scrolling
De website bevat een sticky header die smaller wordt als je _niet_ meer bovenaan de site zit, hiervoor heb ik gebruik gemaakt van de `intersectionObserver API`. Zie onderstaande voorbeeld;

https://github.com/user-attachments/assets/92fbca1e-5a8e-4ce9-b923-1e77b6da2608

#### QoL
Hiernaast heb ik een kleine QoL feature toegevoegd aan detail elementen en aan het burger menu dat opent op medium & small screens. Zie onderstaande voorbeeld;

https://github.com/user-attachments/assets/f8a4df32-5c9a-4897-8f71-dfd5eee5aa49

Dit werkt voor beide de detail elementen en het burger menu.

#### Publicaties weergeven/hiden
De publicaties gelijdelijk 'inladen' door op de button te klikken. Het hiden is een bij-effect van hoe ik het heb geschreven en is niet benodigd in het eindproduct.

https://github.com/user-attachments/assets/098fdd0f-974b-4c4c-8fc8-91c02221a1df

## Bronnen
### intersectionObserver API
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS-tricks](https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/)
### Design
- [Figma](https://www.figma.com/design/fA4tDC72hSePfg9ifoiYBS/DDA-design-editable?node-id=1-115&t=dys4RpCVGzozRHqs-1)
### Live
- [DDA](https://marsgotbars.github.io/fix-the-flow-interactive-website/)
- 
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

