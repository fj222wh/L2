Läs kapitel 2 i Clean Code. Skapa en tabell över fem namn på identifierare (ex. namn på klasser, metoder/funktioner och variabler) som finns i ditt publika interface hos modulen. Det publika interfacet är alltså den kod som andra programmerare ska använda. Utgå ifrån kapitel 2s titlar och ange de viktigaste “reglerna” som applicerats eller skulle kunna appliceras på just ditt namn. Försök variera vilka regler du analyserar mellan namnen så att inte alla har samma regel-titlar applicerade. Visa upp att ni förstår flera regler och inte bara ett par.

Ange även en kort reflektion kring innehållet i kapitel 2. Ni kanske upptäcker en brist hos er tidigare namngivning, ni kanske inte håller med någon av “reglerna” från kursboken. Jag ser hellre att ni hittar och reflekterar över era brister än att ni döljer dem.

Exempel

Namn	Förklaring	Reflektion och regler från Clean Code
Tokenizer2000	Klassnamn på huvudklassen i modulen	Avoid Disinformation: 2000 betyder inget speciellt och tillför därför inget till namnet. Don’t Be Cute: Namnet kan verka sött men är vilseledande. De som inte är millennium-romantiker kan missa det roliga. Bara “Tokenizer” är ett tydligare namn. Jag väljer dock att behålla Tokenizer2000 eftersom användare redan använder min modul
boolean TokenMatch.isBetter(other)	Metodnamn på metod som avgör om en tokenmatchning är bättre än en annan baserat på maximal munch.	Method Names: Is hintar att returvärdet är boolskt. Argumentet och metodnamnet är tänkt att läsas som “is this better (than) other”. Use Problem Domain names: Better är oklart i kontexten och borde bytas ut mot namnet “Maximal munch” som problemdomänen använder MEN detta är inte säkert att programmeraren som skall läsa är insatt i detta därför bör vi istället använda “Solution Domain”. Use Solution Domain names: hasMoreMatchedCharacters är ett tydligare namn och kräver inte att läsaren vet om Maximal munch.
Funktioner (kapitel 3)
Läs kapitel 3. Skapa en tabell över dina fem längsta metoder/funktioner. Utgå ifrån kapitel 3s titlar och ange de viktigaste reglerna (som följs/bryts). Föreslå förändringar.

Skriv även en kort reflektion kring innehållet i kapitel 3. Ni kanske upptäcker en brist hos er tidigare skrivning av funktionerna, ni kanske inte håller med någon av “reglerna” från kursboken. Jag ser hellre att ni hittar och reflekterar över era brister än att ni döljer dem.

Metodnamn	Länk eller kod	Antal rader (ej ws)	Reflektion
boolean TokenMatch.isBetter(other)	
Metod längd exempel
4	Do one thing: Metoden gör bara en sak (jämför längden på matchad text med längden på other). Function Argument: Metoden har bara ett argument (monadic). Eftersom jag har skrivit i javascript vore det bra att typen på argumentet other framgår via exempelvis en metodkommentar. Common Monadic Form: Vi ställer en fråga om argumentet, är this bättre än other, och metoden gör endast då en “query” (Comman Query Separation) och ändrar inte värdet på objektet eller argumentet.
Reflektion
Skriv en kortare reflektion (halv sida 12pt) där du beskriver dina erfarenheter från din egen kodkvalitet. Använd begrepp från boken.

Totalt är det 5st reflektioner som ska skrivas:

Tabellreflektion för namnginving
Kapitelreflektion kap 2
Tabellreflektion för funktioner/metoder
Kapitelreflektion kap 3
Reflektion över egen kodkvalitet


Jag tycker att det är svårt att veta hur objekten och klasserna ska vara ihopkopplade

## Regler jag följt
Don't be cute
Namnge utifrån vad det är beskrivande

Varit lite svårt med avvägning mellan läsbarhet och tydlig namn


## ProductCatalog
T.ex. visste jag inte får prodctcatalog även skapa produkter eller kan de läggas till separat? SOC? Eller ska saker höra ihop?

        // TODO: Add an ID to the product. Fix to be able to add a unique id for each product? Should it be in the Products or should we give the ID here? Check if it's a Product, else return.
        // Should the ProductCatalog create the products in the catalog? Not sure!

1. Tried to follow the rules when naming variables and functions from the beginning but had to change along the way as well


![name](/documentation/img/1.png)
I changed the name to display productCatalog instead to make it more understandable in the store class

I changed this to find OrderItem instead of findPRoduct in the orderClass
![name change](/documentation/img/2.png)

Changed to orderItems in Cart instead of products since we created a object for displaying the orderItems in the order class
![ge](/documentation/img/1.png)

I have to change from products..since its more of orderItem rather than products in the order class
![change name](/documentation/img/4.png)
