import { readdirSync, writeFileSync } from 'fs';
import { Project } from './projects';

const getProjects = () => {
  const readDir = (url: string, imageAlt: string) =>
    readdirSync(url)
      .filter((filename: string) => filename !== '.DS_Store')
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
      name: 'Input Wahrnehmung',
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
      name: 'SKETCH 1 "Hand 3d"',
      images: [
        {
          url: '/images/sketch-1-hand-3d/Sketch_Hand_3d.jpg',
          alt: 'SKETCH 1 "Hand 3d"',
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
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Farbe (mood)',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Komposition mit Name in Farbe',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'SKETCH 2 "Raum Perspektive"',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Vorträge VisDes',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Plakatvergleich',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'SKETCH 3 "Kopf"',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Bildcollage "match cut"',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Bild im Raster',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Bildwelten "Arbeit"',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'SKETCH 4 "Figur"',
      images: readDir('./public/images/sketch-4-figur', 'Sketch 4 Versuch'),
      cols: 'md:grid-cols-2',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'SKETCH 5 "imagine observe remember"',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Mikrotypo',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'Adobe Training',
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
  ];

  writeFileSync(
    './projects.ts',
    `
    const projects = ${JSON.stringify(projects)};

    export type Project = {
      name: string;
      images?: { url: string; alt: string }[];
      text?: string;
      cols?: string;
    };

    export default projects;`
  );
};

getProjects();
