const SERVER_URL = 'https://api.kinopoisk.dev/v1.4/';
const mockData = [
  {
    id: 4647040,
    alternativeName: null,
    countries: [
      {
        name: 'Россия',
      },
    ],
    description:
      'Горшок, Князь и Шут — герои панк-сказки, в которой студенты реставрационного училища стали одной из главных рок-групп страны, собрали «Юбилейный», покорили Москву, выступили как хедлайнеры на фестивале «Нашествие» и создали целую фэнтези-вселенную. Группа вошла в историю, а тексты их песен ожили в мире-фантазии, где Горшок и Князь отправляются спасать принцессу из плена колдуна.',
    enName: 'Korol i Shut',
    genres: [
      {
        name: 'драма',
      },
      {
        name: 'фэнтези',
      },
    ],
    movieLength: null,
    name: 'Король и Шут',
    names: [
      {
        name: 'Король и Шут',
      },
      {
        name: 'Korol i Shut',
        language: 'US',
        type: null,
      },
    ],
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1485ac9a-7796-470b-a3eb-85dc725d4ec0/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1485ac9a-7796-470b-a3eb-85dc725d4ec0/x1000',
    },
    rating: {
      kp: 8.189,
      imdb: 7.1,
      filmCritics: 0,
      russianFilmCritics: 100,
      await: null,
    },
    ratingMpaa: null,
    shortDescription:
      'Они создали свой сказочный мир — и обрели бессмертие. Самый популярный сериал на Кинопоиске в 2023 году',
    status: 'completed',
    ticketsOnSale: false,
    type: 'tv-series',
    typeNumber: 2,
    votes: {
      kp: 796021,
      imdb: 869,
      filmCritics: 0,
      russianFilmCritics: 7,
      await: 101944,
    },
    year: 2023,
    ageRating: 18,
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/p0utVAZHGaqwNoEwsMJTdLapZkX.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/p0utVAZHGaqwNoEwsMJTdLapZkX.jpg',
    },
    logo: {
      url: 'https://imagetmdb.com/t/p/original/tR6H20V6UUtj40mVXaDNPTg7Pw8.png',
    },
    releaseYears: [
      {
        start: 2023,
        end: 2023,
      },
    ],
    top10: null,
    top250: 203,
    isSeries: true,
    seriesLength: 50,
    totalSeriesLength: null,
  },
  {
    id: 5304403,
    name: 'Слово пацана. Кровь на асфальте',
    alternativeName: null,
    names: [
      {
        name: 'Слово пацана',
        language: 'RU',
        type: 'Russian title on kinopoisk',
      },
      {
        name: 'Короли асфальта',
        language: null,
        type: null,
      },
      {
        name: 'Слово пацана. Кровь на асфальте',
        language: null,
        type: null,
      },
      {
        name: 'Дечачка реч. Крв на асфалту',
        language: 'RS',
        type: null,
      },
      {
        name: "Boy's word. Blood on the asphalt",
        language: 'US',
        type: null,
      },
    ],
    type: 'tv-series',
    typeNumber: 2,
    year: 2023,
    description:
      'Конец 1980-х. Пока родители борются за выживание, брошенные всеми дети сбиваются в уличные стаи и бьются за асфальт. Буквально, чтобы контролировать всё, что стоит на «их» земле или передвигается по ней. Среди всеобщей нищеты — понятные правила жизни, поддержка и слово пацана, которое сильнее клятвы.\n14-летний Андрей из интеллигентной семьи, он учится в музыкальной школе и живёт с мамой и пятилетней сестрой. Парень регулярно сталкивается с прессингом уличных подростков и, чтобы защититься, заводит дружбу с гопниками. Один из них — 14-летний Марат — становится проводником Андрея в сложноустроенный мир улиц.',
    shortDescription: null,
    status: 'completed',
    rating: {
      kp: 8.707,
      imdb: 7.4,
      filmCritics: 0,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 595831,
      imdb: 2383,
      filmCritics: 0,
      russianFilmCritics: 6,
      await: 10297,
    },
    movieLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/58239d8d-44d3-475e-ab3f-878679c64290/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/58239d8d-44d3-475e-ab3f-878679c64290/x1000',
    },
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/AqxPqTbD77ioyBDdk39MEQq6vXL.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/AqxPqTbD77ioyBDdk39MEQq6vXL.jpg',
    },
    genres: [
      {
        name: 'драма',
      },
      {
        name: 'криминал',
      },
    ],
    countries: [
      {
        name: 'Россия',
      },
    ],
    ticketsOnSale: false,
    releaseYears: [
      {
        start: 2023,
        end: 2023,
      },
    ],
    top10: null,
    top250: 37,
    isSeries: true,
    seriesLength: 50,
    totalSeriesLength: null,
    logo: {
      url: 'https://imagetmdb.com/t/p/original/8ir7V7krUm3wDOAtoR2V3Yg9yCe.png',
    },
    enName: "Boy's word. Blood on the asphalt",
  },
  {
    status: null,
    rating: {
      kp: 7.564,
      imdb: 7.7,
      filmCritics: 8.1,
      russianFilmCritics: 90,
      await: null,
    },
    votes: {
      kp: 510638,
      imdb: 309078,
      filmCritics: 372,
      russianFilmCritics: 10,
      await: 67695,
    },
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/kBBMF7GWYXzdRSk5w4xwip7yk3U.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/kBBMF7GWYXzdRSk5w4xwip7yk3U.jpg',
    },
    movieLength: 169,
    id: 1267348,
    type: 'movie',
    name: 'Джон Уик 4',
    description:
      'Оставляя за собой горы трупов, Джон Уик продолжает скрываться от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член Правления по имени Маркиз. Два управляющих отелями «Континенталь» в Нью-Йорке и Осаке, решившие по старой дружбе помочь своенравному киллеру, уже жестоко за это поплатились, но внезапно Джон узнаёт способ выбраться из этой, казалось бы, безвыходной ситуации.',
    year: 2023,
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/62c1301b-c913-4b3c-af87-74934ae1ec93/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/62c1301b-c913-4b3c-af87-74934ae1ec93/x1000',
    },
    genres: [
      {
        name: 'боевик',
      },
      {
        name: 'триллер',
      },
      {
        name: 'криминал',
      },
    ],
    countries: [
      {
        name: 'США',
      },
      {
        name: 'Германия',
      },
    ],
    typeNumber: 1,
    alternativeName: 'John Wick: Chapter 4',
    enName: null,
    names: [
      {
        name: 'Джон Уик 4',
      },
      {
        name: 'John Wick: Chapter 4',
      },
      {
        name: 'Джон Уик: Часть 4',
        language: 'RU',
        type: null,
      },
      {
        name: 'Джон Уік 4',
        language: 'UA',
        type: null,
      },
      {
        name: 'John Wick: 4. felvonás - Hagakure',
        language: 'HU',
        type: null,
      },
      {
        name: 'John Wick 4',
        language: 'US',
        type: null,
      },
      {
        name: 'JW4',
        language: 'US',
        type: null,
      },
      {
        name: 'ジョン・ウィック チャプター4',
        language: 'JP',
        type: null,
      },
      {
        name: 'ジョン・ウィック: チャプター4',
        language: 'JP',
        type: null,
      },
      {
        name: 'ジョン・ウィック4',
        language: 'JP',
        type: null,
      },
      {
        name: 'John Wick 4: Hagakure',
        language: 'US',
        type: 'working title',
      },
      {
        name: 'Džons Viks 4',
        language: 'LV',
        type: null,
      },
      {
        name: 'จอห์น วิค 4 : แรงกว่านรก',
        language: 'TH',
        type: null,
      },
      {
        name: 'John Wick : Chapitre 4',
        language: 'FR',
        type: null,
      },
      {
        name: 'John Wick 4',
        language: 'LT',
        type: null,
      },
      {
        name: '殺神John Wick 4',
        language: 'HK',
        type: null,
      },
      {
        name: '존 윅 4',
        language: 'KR',
        type: null,
      },
      {
        name: '존 윅: 챕터 4',
        language: 'KR',
        type: null,
      },
      {
        name: "ג'ון וויק: חלק 4",
        language: 'IL',
        type: null,
      },
      {
        name: 'John Wick: Capítulo 4',
        language: 'PT',
        type: null,
      },
      {
        name: 'ジョン・ウィック：チャプター4',
        language: 'JP',
        type: null,
      },
      {
        name: 'ジョン・ウィック コンセクエンス',
        language: 'JP',
        type: null,
      },
      {
        name: 'جان ویک ۴',
        language: 'IR',
        type: null,
      },
      {
        name: '捍衛任務4',
        language: 'TW',
        type: null,
      },
      {
        name: 'جون ويك - الفصل الرابع',
        language: 'IQ',
        type: 'أكشن - مغامرات',
      },
      {
        name: 'John Wick - 4. felvonás',
        language: 'HU',
        type: null,
      },
      {
        name: 'Sát Thủ John Wick: Phần 4',
        language: 'VN',
        type: null,
      },
      {
        name: 'John Wick: Consequences',
        language: 'JP',
        type: null,
      },
      {
        name: 'john wick chapitre 4',
        language: 'CA',
        type: null,
      },
      {
        name: 'john wick: chapitre 4',
        language: 'FR',
        type: null,
      },
      {
        name: 'John Wick 4 - Baba Yaga (2023)',
        language: 'BR',
        type: null,
      },
      {
        name: 'John Wick։ Chapter 4',
        language: 'US',
        type: null,
      },
    ],
    ratingMpaa: 'r',
    shortDescription:
      'Чтобы обрести свободу, киллер-изгой бросает вызов Правлению кланов. Самая зрелищная часть стильной экшен-саги',
    ticketsOnSale: false,
    ageRating: 18,
    logo: {
      url: 'https://imagetmdb.com/t/p/original/3x4ez877ElQXe78K1FzTYtmfGqA.png',
    },
    top10: null,
    top250: null,
    isSeries: false,
    seriesLength: null,
    totalSeriesLength: null,
  },
  {
    id: 5019944,
    name: 'Кибердеревня',
    alternativeName: 'Кибердеревня',
    names: [
      {
        name: 'Кибердеревня',
      },
      {
        name: 'Cybervillage',
        language: 'US',
        type: 'Dubbed version',
      },
      {
        name: 'The Cyberfarm',
        language: 'US',
        type: null,
      },
    ],
    type: 'tv-series',
    typeNumber: 2,
    description:
      '2100 год. Николай счастливо живет с семьей в кибердеревне на Марсе. Он спокойно ведет роботизированное хозяйство, пока на планету не прилетает руководитель огромной корпорации — Барагозин, который хочет построить на месте деревни новый завод. Николай отправляется в полное опасностей и приключений путешествие до Земли, чтобы спасти свой дом.',
    shortDescription:
      'Марсианский фермер защищает свое хозяйство от алчной корпорации. Обаятельная сай-фай-комедия',
    rating: {
      kp: 8.165,
      imdb: 7.4,
      filmCritics: 0,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 465847,
      imdb: 489,
      filmCritics: 0,
      russianFilmCritics: 4,
      await: 17565,
    },
    movieLength: null,
    ratingMpaa: null,
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/70c75cf3-f456-4474-a900-9a38c1bb2987/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/70c75cf3-f456-4474-a900-9a38c1bb2987/x1000',
    },
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/v5wLSQCuKYF4NkTmUb5alfYmYN8.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/v5wLSQCuKYF4NkTmUb5alfYmYN8.jpg',
    },
    genres: [
      {
        name: 'фантастика',
      },
      {
        name: 'комедия',
      },
    ],
    countries: [
      {
        name: 'Россия',
      },
    ],
    releaseYears: [
      {
        start: 2023,
        end: 2023,
      },
    ],
    top10: 4,
    top250: 225,
    ageRating: 12,
    year: 2023,
    status: 'completed',
    ticketsOnSale: false,
    isSeries: true,
    seriesLength: 25,
    totalSeriesLength: null,
    logo: {
      url: 'https://imagetmdb.com/t/p/original/ycCxGIDMY186kFbWNmX2lHboDRY.png',
    },
    enName: 'Cybervillage',
  },
  {
    id: 5129252,
    names: [
      {
        name: 'Беспринципные в деревне',
      },
      {
        name: 'Besprintsipnyye v Derevne',
        language: 'RU',
        type: 'Transliteration',
      },
    ],
    genres: [
      {
        name: 'комедия',
      },
    ],
    countries: [
      {
        name: 'Россия',
      },
    ],
    releaseYears: [],
    alternativeName: null,
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/oDWj8HeSNeUiXvNw6hCcrESMd5T.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/oDWj8HeSNeUiXvNw6hCcrESMd5T.jpg',
    },
    description:
      'Отставному генералу Хадякову стукнуло 60 лет, и он решает отпраздновать юбилей не на Патриках, а в настоящей русской деревне — с полным погружением, праздничной трапезой, баней, рыбалкой и деревенским спа. Приглашены все любимые герои, но праздник идёт не по плану. Жители Патриков умудряются настроить против себя местных жителей, переругаться между собой и остаться без пропитания.',
    enName: null,
    movieLength: 86,
    name: 'Беспринципные в деревне',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d68d8ae2-ec3d-47f6-9991-7aba20890e0e/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d68d8ae2-ec3d-47f6-9991-7aba20890e0e/x1000',
    },
    rating: {
      kp: 6.469,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    ratingMpaa: null,
    shortDescription:
      'Как жители Патриарших устроятся в русской глубинке? Новые приключения любимых героев',
    top10: null,
    top250: null,
    type: 'movie',
    typeNumber: 1,
    votes: {
      kp: 437125,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 15491,
    },
    year: 2023,
    ageRating: 16,
    status: null,
    ticketsOnSale: false,
    isSeries: false,
    seriesLength: null,
    totalSeriesLength: null,
    logo: {
      url: null,
    },
  },
  {
    id: 4536580,
    countries: [
      {
        name: 'Россия',
      },
    ],
    genres: [
      {
        name: 'фэнтези',
      },
      {
        name: 'комедия',
      },
      {
        name: 'семейный',
      },
      {
        name: 'приключения',
      },
    ],
    names: [
      {
        name: 'Яга-2020',
      },
      {
        name: 'Баба Яга спасает мир',
        language: null,
        type: null,
      },
      {
        name: 'Baba Yaga spasaet mir',
        language: 'RU',
        type: 'Transliteration',
      },
    ],
    alternativeName: null,
    description:
      'Любопытный школьник Сенька каким-то чудом попадает в сказочный древний лес. Он скрыт от людских глаз мощным заклятием Бабы Яги, призванным защитить людей и весь мир от дремлющих там темных сил. В лесу явно творится что-то неладное. Тревожные сигналы возвещают, что заклятие больше не действует, и пробуждение зловещего волшебства и давно поверженных врагов — лишь вопрос времени. Чтобы наложить заклятие снова, Яга вынуждена отправиться в современный город на поиск мощнейшего оружия волшебников, дивноцвета. Там ее ожидает встреча с множеством причуд современного мира, а в темном подземелье уже тысячу лет прячется жаждущий мести Кощей Бессмертный, ведь именно Яга помогла одолеть его много веков назад.',
    enName: null,
    movieLength: 90,
    name: 'Баба Яга спасает мир',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/af29bd1d-46a0-451d-bcd8-de9178d15867/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/af29bd1d-46a0-451d-bcd8-de9178d15867/x1000',
    },
    rating: {
      kp: 7.233,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    ratingMpaa: null,
    shortDescription:
      'Лесная ведьма попадает в мегаполис, где встречает давнего врага — Кощея. Семейная сказка с любимыми героями',
    ticketsOnSale: false,
    type: 'movie',
    typeNumber: 1,
    votes: {
      kp: 410727,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 3699,
    },
    year: 2023,
    ageRating: 6,
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/8PDL7GG5tMYVvkmPu3V2LLg14tP.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/8PDL7GG5tMYVvkmPu3V2LLg14tP.jpg',
    },
    logo: {
      url: 'https://imagetmdb.com/t/p/original/qd8n5hAUwF3pIpTfvurjWaQD9Q9.png',
    },
    top10: null,
    top250: null,
    status: null,
    isSeries: false,
    seriesLength: null,
    totalSeriesLength: null,
  },
  {
    id: 4632862,
    alternativeName: 'Long ma jing shen',
    countries: [
      {
        name: 'Китай',
      },
    ],
    description:
      'Ло — в прошлом известный каскадер, который теперь еле сводит концы с концами. Вскоре дело доходит до того, что в счет долгов у него хотят отобрать коня. Но каскадер дает отпор коллекторам, явившимся за животным. Видео этого поединка с эффектными трюками попадает в сеть, после чего Лу и его жеребец снова становятся известными. Для полного счастья осталось наладить отношения с единственной дочерью, и это будет совсем непросто, ведь у девушки накопилось много обид на отца.',
    enName: null,
    genres: [
      {
        name: 'комедия',
      },
      {
        name: 'боевик',
      },
      {
        name: 'драма',
      },
    ],
    movieLength: 126,
    name: 'Кунг-фу жеребец',
    names: [
      {
        name: 'Кунг-фу жеребец',
      },
      {
        name: 'Long ma jing shen',
      },
      {
        name: 'Ride On',
        language: 'US',
        type: 'English',
      },
      {
        name: 'Обережно, кінь',
        language: 'UA',
        type: null,
      },
      {
        name: '龍馬精神',
        language: 'TW',
        type: '動作,劇情',
      },
      {
        name: 'Ride On - Die zweite Chance',
        language: 'DE',
        type: null,
      },
    ],
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/x1000',
    },
    rating: {
      kp: 7.995,
      imdb: 6.3,
      filmCritics: 5.7,
      russianFilmCritics: 100,
      await: null,
    },
    ratingMpaa: null,
    shortDescription:
      'Каскадер защищает своего коня от коллекторов и становится звездой интернета. Комедийный боевик с Джеки Чаном',
    status: null,
    ticketsOnSale: false,
    type: 'movie',
    typeNumber: 1,
    votes: {
      kp: 360948,
      imdb: 4404,
      filmCritics: 31,
      russianFilmCritics: 3,
      await: 1398,
    },
    year: 2023,
    ageRating: 12,
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/hhr4sXsR6k4BYMEfzVdKT39hn1x.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/hhr4sXsR6k4BYMEfzVdKT39hn1x.jpg',
    },
    logo: {
      url: 'https://imagetmdb.com/t/p/original/1LdsKeiwYCyyz0r3XUJE1dSv0JC.png',
    },
    top10: null,
    top250: null,
    isSeries: false,
    seriesLength: null,
    totalSeriesLength: null,
  },
  {
    id: 4443734,
    countries: [
      {
        name: 'Россия',
      },
    ],
    genres: [
      {
        name: 'детектив',
      },
      {
        name: 'драма',
      },
      {
        name: 'криминал',
      },
      {
        name: 'триллер',
      },
    ],
    names: [
      {
        name: 'Фишер',
      },
      {
        name: 'Fisher',
        language: 'RU',
        type: null,
      },
    ],
    alternativeName: null,
    description:
      '1986 год. В районе правительственных дач на Рублевском шоссе одного за другим убивают подростков. Интеллигентный следователь Валерий Козырев, его дерзкий напарник из Ростова Евгений Боков и совсем молодая следователь Наталья Добровольская начинают расследование, даже не подозревая, как сильно оно изменит судьбу каждого из них. Единственный свидетель, способный опознать маньяка, — школьник Игорь, родители которого совсем не в восторге от контактов сына с милицией.',
    enName: null,
    movieLength: null,
    name: 'Фишер',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/da3b4221-3d3b-408f-9a97-a8eb48df314c/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/da3b4221-3d3b-408f-9a97-a8eb48df314c/x1000',
    },
    rating: {
      kp: 7.817,
      imdb: 6.6,
      filmCritics: 0,
      russianFilmCritics: 87.5,
      await: null,
    },
    ratingMpaa: null,
    shortDescription:
      'Три следователя против неуловимого маньяка. Иван Янковский и Александра Бортич в триллере по реальным событиям',
    ticketsOnSale: false,
    type: 'tv-series',
    typeNumber: 2,
    votes: {
      kp: 358404,
      imdb: 518,
      filmCritics: 0,
      russianFilmCritics: 24,
      await: 7149,
    },
    year: 2023,
    ageRating: 18,
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/zsfAQDtcGNhRFYxfp2qTlCByMyi.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/zsfAQDtcGNhRFYxfp2qTlCByMyi.jpg',
    },
    logo: {
      url: null,
    },
    status: 'completed',
    releaseYears: [
      {
        start: 2023,
        end: 2023,
      },
    ],
    top10: 10,
    top250: null,
    isSeries: true,
    seriesLength: 60,
    totalSeriesLength: null,
  },
  {
    id: 777031,
    type: 'tv-series',
    name: 'Библиотекарь',
    rating: {
      kp: 7.524,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 50,
      await: null,
    },
    description:
      'Актёр-неудачник Алексей Вязинцев узнаёт, что при загадочных обстоятельствах был убит его отец. Алексей едет в Широнино, родной город отца, чтобы продать его квартиру, но вместо этого оказывается втянут в череду опасных событий. Местные жители верят, что книги давно забытого советского писателя Громова обладают магическими свойствами. Каждая из этих книг даёт конкретный эффект: Ярости, Терпения, Власти, Радости, Силы или Памяти. Тайный мир читателей книг Громова поделён на Библиотеки, которые охотятся за книгами по всей стране и готовы убивать конкурентов ради их силы. Вязинцеву предстоит стать частью одной из Библиотек, раскрыть секреты собственной семьи и отправиться на поиски самой редкой из магических книг — книги Смысла.',
    votes: {
      kp: 329754,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 8,
      await: 7019,
    },
    year: 2023,
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d43d7327-57eb-41be-89c3-0fa08937ce02/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d43d7327-57eb-41be-89c3-0fa08937ce02/x1000',
    },
    genres: [
      {
        name: 'фэнтези',
      },
      {
        name: 'детектив',
      },
    ],
    countries: [
      {
        name: 'Россия',
      },
    ],
    typeNumber: 2,
    alternativeName: null,
    enName: null,
    names: [
      {
        name: 'Библиотекарь',
      },
    ],
    movieLength: null,
    ratingMpaa: null,
    shortDescription:
      'Что, если книга может наделить тебя сверхспособностями? Никита Ефремов в фэнтези по культовому роману',
    status: 'completed',
    ticketsOnSale: false,
    ageRating: 18,
    backdrop: {
      url: 'https://imagetmdb.com/t/p/original/26JkCjVJqzRW9I9PvXnCsBV0D1y.jpg',
      previewUrl:
        'https://imagetmdb.com/t/p/w500/26JkCjVJqzRW9I9PvXnCsBV0D1y.jpg',
    },
    logo: {
      url: null,
    },
    releaseYears: [
      {
        start: 2023,
        end: 2023,
      },
    ],
    top10: null,
    top250: null,
    isSeries: true,
    seriesLength: 50,
    totalSeriesLength: null,
  },
  {
    id: 5249042,
    name: 'Папины дочки. Новые',
    alternativeName: null,
    names: [
      {
        name: 'Папины дочки. Новые',
      },
    ],
    type: 'tv-series',
    typeNumber: 2,
    year: 2023,
    description:
      'Проклятие Васнецовых настигает уже повзрослевших дочерей семейного психотерапевта. В канун очередной годовщины свадьбы из дома сбегает Даша, оставив трудоголику Венику прощальное письмо, обручальное кольцо и четырёх дочерей. Теперь Вениамин, совсем как его тесть когда-то, вынужден стать для своих детей и папой, и мамой, и другом. А поможет ему в этом неунывающее семейство Васнецовых.',
    shortDescription:
      'Веник повторяет судьбу тестя и становится многодетным отцом-одиночкой. Возвращение героев хитового сериала',
    status: null,
    rating: {
      kp: 8.284,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 298786,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 2,
      await: 12234,
    },
    movieLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/7331b67b-90a7-4f93-be35-545f0690119c/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/7331b67b-90a7-4f93-be35-545f0690119c/x1000',
    },
    backdrop: {
      url: 'https://avatars.mds.yandex.net/get-ott/224348/2a0000018a99f213aa7ff90d3441f5df2dbc/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-ott/224348/2a0000018a99f213aa7ff90d3441f5df2dbc/x1000',
    },
    genres: [
      {
        name: 'комедия',
      },
    ],
    countries: [
      {
        name: 'Россия',
      },
    ],
    releaseYears: [
      {
        start: 2023,
        end: null,
      },
    ],
    top10: null,
    top250: 138,
    ticketsOnSale: false,
    isSeries: true,
    seriesLength: 24,
    totalSeriesLength: null,
  },
];

export function getFilms() {
  // const url = `${SERVER_URL}movie?year=2023`;

  // try {
  //   const response = await fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       'X-API-KEY': 'WA1HSTX-YKSMEBF-GBYXQ8K-9NM64JH',
  //     },
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     return data;
  //   } else {
  //     console.log(`Ошибка HTTP ${response.status}`);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return mockData;
}
