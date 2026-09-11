# Aplared Silk Road

### The road to happiness leads through Aplared

Appen är en e-handelsapp byggt i typescript både i frontend (React byggd på Vite) och backend (Hono), som använder sig av Shadcn som designsystem, React Hook Form för formulärhantering, Zod för validering, React Hot Toast för notifikationer och React Spinners för laddningseffekter. Den persisterar datan i en Postgre databas som driftas på Neon. Länkar till respektive finns nedan.

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [Hono](https://hono.dev)
- [Shadcn](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [React Hot Toast](https://react-hot-toast.com)
- [React Spinner](https://www.davidhu.io/react-spinners)
- [Zod](https://react-hook-form.com)
- [Neon](https://neon.com)

Appen representerar en enkel version av ett e-handelssystem där man kan administrera produkter (full CRUD), see en produktlista och produktdetaljsida, lägga till och ta bort produkter i en kundvagn och sedan lägga en order via en checkout som bekräftas med en bekräftelsesida. 

För att starta projektet så klonar man ner [aplaredsilkroad](https://github.com/therealdanmalmx/aplaredSilkRoad) till sin egen dator, öppnar två flikar **VSCode** (web och api), kör `npm install` i bägge mapparna och sedan `npm run dev` i båda. MAn behäver även lägga till en `.env` fil där anslutningssträngen till databased läggs. Av säkerhetsskäl dela den inte här, utan ges på begäran. 

## Krav för Godkänt

- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!
- [x] Ett designsystem/komponentbibliotek används nästintill helt uteslutande för att bygga sidan (ex: MUI, ChakraUI, Mantine, etc).

**Home**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [x] Startsidan ska lista samtliga produkter.
- [x] Det ska gå att lägga till produkter i kundvagnen (header + toast + ls).
- [x] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [x] Detaljsidan ska visa all info om en produkt.
- [x] Det ska gå att lägga till produkten i kundvagnen (header + toast + ls).
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [x] Det ska gå att se det totala priset i kundvagnen.
- [x] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris + ls).
- [ ] Det ska gå att ange leveransuppgifter i ett formulär.
- [ ] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [ ] Formulären vid utcheckningen ska gå att automatiskt fyllas i.
- [ ] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter

**Admin**

- [x] Det finns en admin-sida för produkthantering
- [x] Det ska gå att se alla produkter på admin sidan
- [x] Det går att lägga till produkter via admin sidan
- [x] Det går att ta bort produkter via admin sidan
- [x] Det går att redigera produkter via admin sidan
- [x] Samtliga fält för adminsidans formulär ska ha valideringsregler
