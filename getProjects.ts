import { readdirSync, writeFileSync } from 'fs';

export type Project = {
  name: string;
  images?: { url: string; alt: string }[];
  text?: string;
  cols?: string;
};

const getProjects = () => {
  const readDir = (url: string, imageAlt: string) =>
    readdirSync(url)
      .filter((filename: string) => filename !== '.DS_Store')
      .sort((a, b) => {
        return +a.replace(/\D+/g, '') - +b.replace(/\D+/g, '');
      })
      .map((filename: string, i: number) => ({
        url: `${url.replace('./public', '')}/${filename}`,
        alt: `${imageAlt} ${i + 1}`,
      }));
  const projects: Project[] = [
    {
      name: 'Komposition mit Kreisen',
      images: readDir(
        './public/images/komposition-mit-kreisen',
        'Komposition mit Kreisen Versuch'
      ),
      text: `
      <h3>Projektbeschrieb</h3>
      <p>Bei diesem Projekt musste man ein Begriffspaar wählen und dazu zwei Frames in einem bestimmten
      Seitenverhältnis <small class="tabular-nums">[1:1 | 16:9 | 4:3]</small> mit Kreisen gestalten<br>
      Ich habe mich für das Begriffspaar <em>Nah und Fern</em> entschieden</p>

      <h3>Vorgehensweise</h3>
      <p>In ersten Entwürfen, habe ich nur mit der Distanz zwischen den Punkten gearbeitet. In weiteren Entwürfen
      habe ich auch noch mit der Grösse der Punkte herumexperimentiert. Meistens habe ich nach der
      Platzierung der Punkte versucht, eine Version die noch mehr Kontrast hat, zu machen.
      </p>
      `,
    },
    {
      name: 'Figur / Grund',
      images: readDir('./public/images/figur-grund', 'Figur / Grund Versuch'),
      cols: 'grid-cols-2 md:grid-cols-4',
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Bei diesem Projekt musste man die Balance zwischen Figur und Grund finden.</p>

        <h3>Vorgehensweise</h3>
        <p>Zuerst habe ich mich für eine Schriftart entschieden. Hier habe ich die Didot verwendet.
        <br>Danach suchte ich mir geeignete Zeichen aus.
        Diese habe ich danach in Pfade umgewandelt, damit ich sie beliebig skalieren kann.
        <br>Nun musste ich die skalierten Zeichen nur noch so optimal platzieren, damit man die Figur nicht mehr
        vom Hintergrund unterscheiden kann.
        </p>
      `,
    },
    {
      name: 'Form - Schriftvergleich',
      images: [
        {
          url: '/images/form-schriftvergleich/plakat.jpg',
          alt: 'Form - Schriftvergleich',
        },
      ],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Notizen Input Wahrnehmung',
      text: `
      <h3>Visuelle Wahrnehmung</h3>
      <p>Der Mensch versucht immer etwas symmetrisches oder bekanntes zu sehen. So reagiert er zum Beispiel schneller auf ein Bild oder Objekt welches Gesichts ähnliche Formen enthält. Weiter braucht es Begrenzungen, um eine Form als solche zu erkennen. Im Beispiel mit dem “WIN” Schriftzug wird erst klar was da steht, wenn man links und rechts die Begrenzung sieht.
      Die sechs wesentlichen Faktoren für die Zusammenhangsbildung in der Wahrnehmung zeigen auf, wie der Mensch oder besser gesagt das Gehirn versucht Sinn aus einer Abbildung zu machen. Dabei spielt Erfahrung eine extrem grosse Rolle.
      Diese Erfahrung hilft uns dabei auch ganz vereinfachte Formen zu erkennen (zum Beispiel die Katze bei dem Punkt der “Formkonstanz”).
      Die Raumillusion hilft uns die Tiefe eines Bildes zu verstehen. Dazu gehört die Perspektive, Schärfentiefe und Grösse der Objekte auf dem Bild.
      Alle bildinformationen welche vom Auge erfasst werden, müssen im Gehirn verarbeitet werden. Das Visuelle Licht wird auf der Retina in Nervensignale umgewandelt, welche vom Gehirn interpretiert werden können.
      Spannend wird es, wenn einem Bild Informationen weggenommen werden. Dabei versucht das Gehirn das Fehlende rein zu interpretieren. Im Beispiel mit den verkehrten Buchstaben, würde man zuerst gar nicht bemerken, dass der Text komplett falsch geschrieben ist.
      Beim zweiten Beispiel mit der halbierten Text Zeile kann man auch noch ziemlich gut entziffern, was ursprünglich geschrieben wurde. Das geht aber nur gut, wenn man die Obere hälfte der Zeile hat. Auch funktioniert das Beispiel mit Serifen besser.
      Damit ein Text lesbarer wird, muss die verwendete Schriftart ausbalanciert werden. Bei Serifenschriften ist es wichtig, eine grössere Laufweite zu verwenden als bei serifenlosen Schriften.</p>

      `,
    },
    {
      name: 'SKETCH 1 «Hand 3d»',
      images: [
        {
          url: '/images/sketch-1-hand-3d/Sketch_Hand_3d.jpg',
          alt: 'SKETCH 1 «Hand 3d»',
        },
      ],
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Bei diesem Projekt musste man versucheb, seine eigene Hand drei dimensional abzuzeichnen.</p>

        <h3>Vorgehensweise</h3>
        <p>Nach einem Input von Anja, konnten wir mit dem Zeichnen beginnen.<br>
        In einem ersten Schritt, haben wir die Konturen der Hand nachgezeichnet.
        Danach konnten wir eine Linie zeichnen, welche uns später bei der Schattierung geholfen hat.<br>
        Schlussendlich ergab sich ein, so einigermassen als Hand erkennbarer, Sketch.
        </p>
      `,
    },
    {
      name: 'Farbenlehre',
      images: readDir('./public/images/farbenlehre', 'Farbenlehre Versuch'),
      cols: 'md:grid-cols-2',
      text: `
        <h3>Projektbeschrieb</h3>
        <p>In diesem Projekt mussten wir eine einzige Farbe auf verschiedenen Hintergründen, unterschiedlich wirken lassen. In einem zweiten Schritt
        mussten wir zwei Farben auf zwei verschiedenen Hintergründen gleich wirken lassen.</p>

        <h3>Vorgehensweise</h3>
        <p>Zuerst habe ich die Vordergrundsfarbe gewählt, die ich später auf den Hintergründen platzieren möchte. Danach habe ich das ganze so
        auf einem Artboard platziert, dass ich zwei hälften mit unterschiedlicher Hintergrundsfarben habe. Auf diesen beiden Hälften
        habe ich dann jeweils die Vordergrundsfarbe als kleines Quadrat platziert. Nun musste ich nur noch mit den Hintergrundsfarben
        rumprobieren, bis die Vordergrundsfarbe unterschiedlich aussieht.<br>
        Auch für den zweiten Auftrag habe ich hier wieder die beiden hälften mit je einem farbigen Quadrat eingerichtet. Von hier aus musste ich nun einfach rumpröbeln,
        bis die beiden Vordergrundsfarben gleich wirkten.</p>
      `,
    },
    {
      name: 'Farbe (mood)',
      images: readDir('./public/images/farbe-mood', 'Farbe (mood) Versuch'),
      text: `
      <h3>Projektbeschrieb</h3>
      <p>Dieses Projekt ist ähnlich wie das «Farbenlehre» Projekt. Hier mussten wir aber vier Farben wählen und damit vier verschiedene Stimmungen kreieren.</p>

      <h3>Vorgehensweise</h3>
      <p>Zuerst habe ich ein Layout mit vier Rechtecken gemacht und diese dann eingefärbt. Danach habe ich 3 Kopien davon gemacht und die Farben gewechselt,
      damit eine neue Stimmung entsteht. Für weitere entwürfe habe ich dasselbe gemacht, einfach das Layout zu beginn angepasst.</p>
      `,
    },
    {
      name: 'Vorstellen Grundlage-Bücher',
      images: readDir(
        './public/images/vorstellen-grundlage-buecher',
        'Methodik der Form- und Bildgestaltung Folie'
      ),
      cols: 'md:grid-cols-2',
      text: `
      <h3>Projektbeschrieb</h3>
      <p>Wir mussten in zweier Gruppen eines von verschiedenen Grundlage Büchern vorstellen. Unser Buch war «Methodik der Form- und Bildgestaltung» von Armin Hofmann</p>
      `,
    },
    {
      name: 'Komposition mit Name in Farbe',
      images: readDir(
        './public/images/komposition-mit-name-in-farbe',
        'Komposition mit Name in Farbe Versuch'
      ),
      cols: 'md:grid-cols-3',
      text: `
      <h3>Projektbeschrieb</h3>
      <p>In diesem Projekt ging es darum, ein Plakat zu gestalten, worauf sein Name erkennbar sein soll. Dabei durfte man die Anordnung der Buchstaben nicht in Leserichtung
      machen, sondern musste die Hierarchie auf eine andere Art erreichen.</p>

      <h3>Vorgehensweise</h3>
      <p>In meinen ersten Versuchen, habe ich versucht mit der Grösse der einzelnen Buchstaben die Hierarchie herzustellen. Das ist mir aber nicht so gut gelungen.
      In weiteren Versuchen habe ich die Hierarchie mit Farbe und Position der Buchstaben versucht hinzubringen. Das hat in meinen Augen wesentlich besser Funktioniert.</p>
      `,
    },
    {
      name: 'SKETCH 2 «Raum Perspektive»',
      images: readDir(
        './public/images/sketch-2-raum-perspektive',
        'SKETCH 2 «Raum Perspektive» Versuch'
      ),
      cols: 'md:grid-cols-2',
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Bei diesem Projekt ging es darum, einen Raum mit korrekter Perspektive abzuzeichnen.</p>

        <h3>Vorgehensweise</h3>
        <p>Nach einem kurzen Input konnten wir beginnen den Raum mit einem Bleistift optisch zu vermessen. Mithilfe dieser Masse,
        konnte man nun ein Abbild des Raumes zeichen, welches korrekte Proportionen hat, und die Perspektive stimmt.</p>
        `,
    },
    {
      name: 'Vorträge VisDes',
      text: `
      <div class="space-y-12">
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Josef Müller Brockmann (Nicola)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Josef Müller Brockmann (1914 - 1996)</li>
          <li>
            Designs sind rein Zeittechnisch nicht modern, sehen aber trotzdem eher
            modern aus.
          </li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>
            Interessanter Lebenslauf. Gestaltung mit PowerPoint unterstützt das
            Gesprochene sehr gut.
          </li>
          <li>
            1950 Wechsel von Illustrativ zu Konstruktiv. Etwas später wurde er zum
            vollzeit Grafiker.
          </li>
          <li>Geometrisch geprägte Arbeiten.</li>
          <li>Input zu gewähltem Plakat, welches sehr konstruktiv gestaltet ist.</li>
          <li>1957-1960 war er Fachlehrer an der Kunstgewerbeschule Zürich.</li>
          <li>Vorstellung weiterer Plakate → bekannt für seine Plakate.</li>
          <li>Massgebende Mitarbeit am SBB Logo.</li>
          <li>Er hat von Hand gearbeitet.</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Nicht vorhanden</li>
        </ul>
        <h3>Generell</h3>
        <ul>
          <li>Relativ oft das Füllwort "Ähm" verwendet</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          David Carson (Sophit)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Typisch mit "Ich begrüsse euch ..."</li>
          <li>David Carson in Texas geboren</li>
          <li>Ist Profi Surfer</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Hat Studium abgebrochen</li>
          <li>Arbeitete für ein Skater Magazin</li>
          <li>Später für das Ray Gun Magazin</li>
          <li>Hatte schon mit Pepsi, Nike, MTV, Toyota, ... zu tun</li>
          <li>
            Auch bekannt unter dem Namen The Father of grunge (frech, wild, chaotisch)
          </li>
          <li>
            Missachtet alle typografischen & gestalterischen Regeln (macht alles nach
            Gefühl)
          </li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Bild von Carson vor seinem Desktop</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Otto Aicher (Fabian)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Ging etwas schnell los</li>
          <li>Piktogramme als Einstieg passend</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Weigerte sich in die Hitler Jugend zu gehen, kam dann in den Knast</li>
          <li>Bildhauer Studium</li>
          <li>Mitgründer Volkshochschule Ulm</li>
          <li>Mitgründer der Hochschule für Gestaltung Ulm</li>
          <li>Gestaltungsrichtlinien für die Olympiade 1972</li>
          <li>Bekannt für seine Piktogramme</li>
          <li>
            Wollte für die Olympiade leichte helle farben (nicht rot und gold wegen
            NS)
          </li>
          <li>
            Sportler rücken auf seinen Plakaten im vergleich zu denen vom 2.WK in den
            Vordergrund
          </li>
          <li>1. Maskottchen einer Sportveranstaltung (Hund)</li>
          <li>Rotis Schriftart</li>
          <li>Prägte den Begriff Corporate Design</li>
          <li>Logo für Lufthansa</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Piktogramme als Ausstieg passend.</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Paula Scher (Adrian)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Warm up, Bewegungen</li>
          <li>Intro Video über Typografie</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Biografie als Bild sehr interessant</li>
          <li>Grossstadt (Philly) hat sie geprägt</li>
          <li>Sie hat nicht so in die Highschool gepasst</li>
          <li>Layout Artist bei Buchverlag</li>
          <li>Danach bei CBS Atlantic Records (Coverart)</li>
          <li>Eigene Firma ging bergab</li>
          <li>Später ist sie dem Pentagram beigetreten</li>
          <li>Vor allem Environmental Design</li>
          <li>Hat viele Preise gewonnen</li>
          <li>Ihre Arbeiten sind sehr dynamisch (vor allem mit Typografie)</li>
          <li>Windows Logo</li>
          <li>Citibank Logo</li>
          <li>Wahlzettel Flop</li>
          <li>Identity vom Public Theatre</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Vorstellung von verschiedenen Arbeiten in Form eines Videos</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Adrian Frutiger (Alain)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>2 Truths 1 Lie</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Schriftsetzerlehre</li>
          <li>Studium an der Kunstgewerbeschule Zürich</li>
          <li>Mitarbeiter einer Pariser Schriftgiesserei</li>
          <li>Eigenes Grafikatelier</li>
          <li>Französischlehrer</li>
          <li>Schriften</li>
          <ul class="ml-6">
            <li>Frutiger</li>
            <li>Avenir</li>
            <li>Univers</li>
            <li>Didot</li>
            <li>OCR-B</li>
          </ul>
          <li>Schrift Quiz</li>
          <li>Analyse (Löffel)</li>
          <li>Alle Schriften von Hand (auch wenn sie geometrisch aussehen)</li>
          <li>Heute noch omnipräsent</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Auflösung 2 Truths 1 Lie</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Stefan Sagmeister (Lina)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Infos zu Poster</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Biografie</li>
          <li>Coverart Lou Reed</li>
          <li>Grusskarte Studioeröffnung</li>
          <li>Style=Fart</li>
          <li>Beauty Ausstellung Wien</li>
          <li>The Happy Film</li>
          <li>The Happy Show</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Bogen zurück zu Beginn (Poster)</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Johnson Kingston (Mara)
        </summary>
        <h3>Einleitung</h3>
        <li>Rätsel mit Namens Spiel (Fussballspieler Name)</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Johnson Kingston ist ein Deckname für 2 Personen (Ivan Weiss, Michael Kryenbühl)</li>
          <li>Grafikdesign an Fachhochschule Luzern</li>
          <li>2 Swiss Design Awards</li>
          <li>Weltweit bekannt</li>
          <li>Seit 2019 ein Trio</li>
          <li>Projekte bewegen sich an Schnittstelle Gestaltung Technologie</li>
          <li>B-Sides Webseite (User beeinflusst das Erscheinungsbild)</li>
          <li>This ain't no book (Digitale und Print-Version)</li>
          <ul class="ml-6">
            <li>Recherche steht im Fokus</li>
          </ul>
          <li>Sind auch am Weltformat</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Zitat</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Joost Grootens (Silvan)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Zitat "I swear I use no art at all"</li>
          <li>Aufforderung dazu Gedanken zu machen</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Biografie</li>
          <ul class="ml-6">
            <li>Amsterdam</li>
            <li>Wollte Maler werden</li>
            <li>Kunstschule (später abgebrochen)</li>
            <li>Studium in Architekturdesign</li>
            <li>Buchdesign (selbst beigebracht)</li>
            <li>Dozent</li>
          </ul>
          <li>Er und sein Studio diverse Auszeichnungen</li>
          <li>Monographie (2010)</li>
          <ul class="ml-6">
            <li>Sammlung Werke der letzten Dekade</li>
          </ul>
          <li>Eigene Schriftfamilie mit Piktogrammen (2015)</li>
          <li>Hauptmerkmal des Studios sind Atlasse</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Zitat</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Studio Feixen (Dario)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Intro Video</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Plakate für Südpol</li>
          <li>
            Was ist das Studio Feixen
            <ul>
          </li>
          <li>Visuelle Design Agentur</li>
          <li>Grafikdesign</li>
          <li>Schriftgestaltung</li>
          <li>Animationen</li>
          <li>Modedesign</li>
        </ul>
        <li>Wollen Herausforderung</li>
        <li>2 Personen</li>
        <li>Weltweite Ausstellungen</li>
        <li>
          Kunden
          <ul>
        </li>
        <li>20 Minuten</li>
        <li>Luzerner Theater</li>
        <li>Südpol</li>
        <li>Nike</li>
        <li>Wired</li>
        <li>Hermes</li>
        </ul>
        <li>2017 Samsung Kampagne in 20 Minuten (neues Layout in wenigen Wochen)</li>
        <li>Luzerner Theater CI Gestaltung</li>
        <li>Shanghai Tower Gestaltung</li>
        <li>Nike Max Day (30 Jahre Air Max)</li>
        <li>Schrift Studio Feixen</li>
        <li>Schrift Noi</li>
        <li>Spiel mit Raum (strukturiert chaotisch)</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Bedankung</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Dia Studio (Yada)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Video Intro</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Design Agentur</li>
          <li>Aussenstellen Genf, NY</li>
          <li>ca. 10 Member</li>
          <li>Webdesign Webdev</li>
          <li>Typeface Design</li>
          <li>Spezialisieren in in kinetic designs</li>
          <li>A-Trak (Kinetic Graphics)</li>
          <li>Squarespace</li>
          <ul class="ml-6">
            <li>Refining Brand</li>
            <li>Rebrand (2018)</li>
            <li>Add in kinetic elements to logo</li>
          </ul>
          <li>Schrift Klim's Söhne (2019)</li>
          <ul class="ml-6">
            <li>Promotion videos analog</li>
          </ul>
          <li>Adidas Skateboarding</li>
          <ul class="ml-6">
            <li>Shoes Promotion (2018)</li>
            <li>Adidas London (kinetic identity system for shops)</li>
          </ul>
          <li>Greg Sorensen</li>
          <ul class="ml-6">
            <li>Prints</li>
          </ul>
          <li>MoMA it wasn't written</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Fazit</li>
          <ul class="ml-6">
            <li>Schwarz Weiss</li>
          </ul>
          <li>Fragen ans Publikum</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Irma Boom (Annina)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Video Intro</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Typografin</li>
          <li>Gestalterin</li>
          <li>über 300 Bücher designt</li>
          <li>Auszeichnungen</li>
          <li>Jüngste Person mit Gutenberg Preis</li>
          <li>The Architecture of the Book</li>
          <ul class="ml-6">
            <li>Schaut Design nicht als Werke an sondern als Objekte</li>
            <li>Vorstellung ihrer Arbeiten</li>
          </ul>
          <li>Mutilatis</li>
          <ul class="ml-6">
            <li>Papier</li>
            <li>Löcher</li>
          </ul>
          <li>Kochbuch (Zusammenarbeit mit Rijks Museum)</li>
          <li>Dick Bruna (Auch mit Museum Rijks)</li>
          <li>Preis für bestes Schweizer Plakat des Jahres (2009) (Sparschäler)</li>
          <li>Buch wiederspiegelt Thema</li>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Casey Reas (Seraina)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>1972 Troy Ohio</li>
          <li>Bachelor Architecture Art Planning</li>
          <li>Master Media Arts and Planning</li>
          <li>Professor</li>
          <li>Bekannt für Processing</li>
          <ul class="ml-6">
            <li>Programmiersprache für Designer & Künstler</li>
          </ul>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>REAS</li>
          <li>Installationen</li>
          <ul class="ml-6">
            <li>Generative Collage</li>
          </ul>
          <li>Compressed Cinema</li>
          <ul class="ml-6">
            <li>Audio und Visuals</li>
            <li>GANs</li>
            <li>Effekt auf Betrachter</li>
          </ul>
          <li>Ausstellung in der Bitforms Gallery</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Fazit</li>
          <ul class="ml-6">
            <li>Werke sehen cool aus</li>
            <li>Er spielt interessant mit den digitalen Möglichkeiten die es gibt</li>
          </ul>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          Wolfgang Weingart (Moritz)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Rätsel</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Experimente mit Buchstaben M</li>
          <ul class="ml-6">
            <li>M auf Würfel (im Raum)</li>
          </ul>
          <li>Arbeitet und Experimentiert viel mit Typographie</li>
          <li>Designer</li>
          <li>Typograf</li>
          <li>Lehrer</li>
          <li>Biografie</li>
          <li>Erster Mac wurde ihm geschenkt</li>
          <ul class="ml-6">
            <li>hat danach viel mit dem Mac experimentiert</li>
          </ul>
          <li>Arbeitet viel mit</li>
          <ul class="ml-6">
            <li>Gliederung</li>
            <li>Vereinfachung</li>
          </ul>
          <li>Weitere Arbeiten Richtung Collage</li>
          <li>Diverse Auszeichnungen</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Analyse</li>
          <ul class="ml-6">
            <li>Hat Schweizer Typografie beeinflusst (wenn nicht revolutioniert)</li>
            <li>Experimentellen Gestaltungsansatz</li>
          </ul>
        </ul>
      </details>
      <details>
        <summary class="text-2xl xl:text-3xl focus:outline-none">
          April Greiman (Nicole)
        </summary>
        <h3>Einleitung</h3>
        <ul>
          <li>Bildvergleich</li>
        </ul>
        <h3>Hauptteil</h3>
        <ul>
          <li>Inspiriert von Jayme Odgers</li>
          <li>Grafikdesignerin</li>
          <li>Architektur, Textilien, usw.</li>
          <li>Biografie</li>
          <ul class="ml-6">
            <li>Long Island, NY (1948)</li>
            <li>Kansas City Institute</li>
            <li>Schule für Gestaltung Basel</li>
          </ul>
          <li>Inspiration von New Wave (Swiss Punk)</li>
          <li>Erfolgreiche Arbeiten</li>
          <li>Eine der ersten Designerinnen die den Computer als Designwerkzeug sah</li>
          <li>Cal-Arts-Plakat mit Jayme Odgers</li>
          <li>Grafikdesign ist laut ihr Visuelle Kommunikation</li>
          <li>Summer Olympics LA 1984</li>
          <li>Does this make sense?</li>
          <ul class="ml-6">
            <li>eine der berühmtesten Arbeiten</li>
            <li>Plakat in einem Magazin</li>
          </ul>
          <li>Eigenes Design Studio (Made in Space)</li>
        </ul>
        <h3>Abschluss</h3>
        <ul>
          <li>Verweis auf Webseiten</li>
          <li>Analyse</li>
          <ul class="ml-6">
            <li>Einflussreich auf die New Wave Bewegung</li>
            <li>Pionierin Computer Design</li>
            <li>Verspielt, freiheitsliebend, neugierig</li>
            <li>Arbeitet mit Grafikfehlern</li>
          </ul>
        </ul>
      </details>
      </div>
      `,
    },
    {
      name: 'Notizen Bildbetrachtung, Bildanalyse, Semiotik',
      text: `

      `,
    },
    {
      name: 'Plakatvergleich',
      images: readDir(
        './public/images/plakatvergleich',
        'Plakatvergleich Seite'
      ),
      cols: 'md:grid-cols-2',
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Nach unserem Ausflug an die Weltformat Ausstellung, mussten wir zwei der dort ausgestellten Plakate auswählen und vergleichen</p>

        <h3>Vorgehensweise</h3>
        <p>Wir konnten nach vorgegebenen Kriterien die Plakate vergleichen.</p>
      `,
    },
    {
      name: 'SKETCH 3 «Kopf»',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Bildcollage «match cut»',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    { name: 'Notizen Input Entwurfsprozesse', text: '' },
    {
      name: 'Bild im Raster',
      images: readDir(
        './public/images/bild-im-raster',
        'Plakatvergleich Seite'
      ),
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Bei diesem Projekt, mussten wir ein bereits bestehendes Bild in viele kleine Bilder aufteilen, und in einem vorgegebenen Raster platzieren.</p>

        <h3>Vorgehensweise</h3>
        <p>Hier habe ich einfach mal drauf los probiert. Manchmal sah die Anordnung gut aus, manchmal weniger. Das schwierigste an der Übung war, den Weissraum passend
        einzusetzen.</p>
      `,
    },
    {
      name: 'CD Vergleich Vortrag',
      images: readDir(
        './public/images/cd-vergleich-vortrag',
        'Airbnb vs. Booking.com Folie'
      ),
      cols: 'md:grid-cols-2',
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Wie beim Grundlagen Buch Vortrag, mussten wir auch hier in zweier Teams zwei Corporate Designs vergleichen. Unser Vortrag hat die zwei CDs von Airbnb und Booking.com verglichen.</p>
      `,
    },
    {
      name: 'Bildwelten «Arbeit»',
      images: readDir('./public/images/bildwelten-arbeit', 'Bildwelten Arbeit'),
      cols: 'md:grid-cols-2',
      text: `
      <h3>Projektbeschrieb</h3>
      <p>Basierend auf den CD Vergleich Vorträgen, haben wir uns in diesem Projekt mit Bildwelten beschäftigt.</p>

      <h3>Vorgehensweise</h3>
      <p>Wir haben viele Bilder von arbeitenden Personen gesucht und am Boden ausgelegt. Danach konnten wir die Bilder nach vielen verschiedenen Kriterien sortieren
      und überlegen, ob einige vielleicht passend für das CD einiger Firmen wären.</p>
    `,
    },
    {
      name: 'SKETCH 4 «Figur»',
      images: readDir('./public/images/sketch-4-figur', 'Sketch 4 Versuch'),
      cols: 'md:grid-cols-2',
      text: `
        <h3>Projektbeschrieb</h3>
        <p>Bei diesem Projekt stand eine Person der Klasse in der Mitte eines Kreises. Die anderen mussten versuchen die Person möglichst genau abzuzeichnen.</p>

        <h3>Vorgehensweise</h3>
        <p>Zuerst habe ich die dominanten Linien und die Proportionen gezeichnet. Danach konnte man
        Details hinzufügen. In einem weiteren Schritt haben wir die Zeichnung mit einer Zeitlimite von 90 Sekunden gemacht.
        </p>
      `,
    },
    {
      name: 'SKETCH 5 «imagine observe remember»',
      images: readDir(
        './public/images/sketch-5-imagine-observe-remember',
        'Sketch 5 Versuch'
      ),
      cols: 'md:grid-cols-2',
      text: `
      <h3>Projektbeschrieb</h3>
      <p>Hier mussten wir unsere Küche aus dem Gedächtnis zeichnen. Dies mussten wir drei Mal auf drei verschiedene Arten machen.</p>

      <h3>Vorgehensweise</h3>
      <p>In der ersten Variante war uns frei gestellt, wie wir die Küche zeichnen wollten. Einzig das Format war vorgegeben.
      Es musste nämlich innerhalb der Form eines Smarphones gezeichnet werden.<br>
      In der zweiten Variante war die Vorgabe, dass wir die Küche aus dem Blickwinkel eines Insektes irgendwo in der Küche zeichen mussten.<br>
      In der letzten Variante mussten wir unsere Traumküche oder Küche der Zukunft zeichnen.
      </p>
    `,
    },
    {
      name: 'Notizen Mikrotypo',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Notizen Besprechung erster Plakatentwürfe',
      text: ``,
    },
    {
      name: 'Adobe Training',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
  ];

  writeFileSync(
    './projects.ts',
    `
    const projects = ${JSON.stringify(projects)};

    export default projects;`
  );
};

getProjects();
