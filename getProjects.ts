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
        <h3>Nah und Fern</h3>
        <p>Blabvlabsdfksjflkjdsfls Loremsfsdfjksdfl ls djflksdjl sdl kjf södflkjaösldfk sölkjasöldkfj ölsdkfj </p>
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
      images: [{ url: '/sketch1.png', alt: 'alt' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
    },
    {
      name: 'SKETCH 1 "Hand 3d"',
      images: [{ url: '/sketch1.png', alt: 'Sketch 1' }],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus quo voluptatibus in veniam quaerat dolorum maxime ipsa iure eius, neque aut et nemo, laboriosam nam iusto. Maiores mollitia natus deserunt dicta, ducimus placeat ipsam expedita omnis illo sunt eum recusandae odio facilis, repudiandae debitis adipisci corporis neque molestias! Illum id officia cupiditate. Veniam, id aliquid vero blanditiis neque inventore ab. Distinctio minus, eveniet ut atque debitis est voluptate omnis adipisci eos. Mollitia enim ut maiores laborum consequatur molestiae ducimus repellat numquam laudantium harum veritatis quos soluta officiis facere dolorem accusantium, saepe sint expedita in. Beatae deleniti placeat tempore nulla animi iste eveniet sit dolorem provident ipsa, molestias, ratione maxime. Inventore eveniet officia quisquam illum. Tempore voluptatem ut, soluta omnis magni corrupti. Laboriosam aspernatur ipsum error id vitae, nisi aliquam quibusdam cum sapiente tenetur beatae, adipisci quasi tempora commodi dolor fugiat expedita hic illum fugit doloremque ipsam ad! Similique quidem alias cupiditate excepturi nostrum, aliquam, fugiat officiis magnam rem accusantium quasi. Unde incidunt, at adipisci molestiae possimus rerum culpa, praesentium iure voluptate ullam in a. Dolores veritatis autem facere repudiandae rem, animi alias, corporis sapiente sint quibusdam ullam. Veritatis fuga, molestias nam velit magni delectus eum id voluptas commodi rem.',
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
