import LocalizedStrings from 'react-localization';

const textData = new LocalizedStrings({
  en: {
    // Stats banner
    stats: {
      statistic: 'statistics',
      played: 'Played',
      totalWins: 'Total wins',
      winStreakNow: 'Win streak now',
      attemptsPerGame: 'Attempts per game average',
      winStreakMax: 'Win streak max',
      attemptStat: 'Attempt statistics',
    },
    // Rules banner
    rules: {
      gameRules: 'game rules',
      goal: 'Guess the hidden word of the day in the game Wordle in six attempts.',
      exampleHiddenWord: 'BRIEF',
      firstTry: 'Apple',
      secondTry: 'Crimp',
      thirdTry: 'Coral',
      firstLetter: 'E',
      secondLetter: 'R',
      thirdLetter: 'I',
      firstExample:
        'After each attempt, the color of the letters will change to show which letters are in the hidden word! For example, we are trying to guess the word {0} and enter the word {1}:',
      firstOutcome: 'The letter {0} is in the hidden word, but it is in a different place.',
      secondExample:
        'Then we will enter the word {0}. The letters {1} and {2} are in the hidden word and are in the right places.',
      thirdExample: 'If the word is guessed then all letters will be highlighted!',
      fourthExample: 'If the letter is not in the hidden word then it is highlighted in gray.',
      dailyRule: 'Every day a new word comes up!',
      play: 'PLAY!',
      firstQuestion: 'What words can be guessed?',
      firstAnswer: 'Mostly singular nouns.',
      secondQuestion: 'Can there be same letters in the hidden word?',
      secondAnswer: 'Yes, the hidden word can contain the same letters.',
      thirdQuestion: 'Does everyone guess the same word?',
      thirdAnswer: 'Yes, every day the word is the same for everyone.',
      aboutTitle: 'About the project',
      about:
        'This application was written for personal use and my friends, so that they can escape from the routine and strain their brains a little) In case of questions or suggestions, please contact me by {0}. You can view the source code on {1}.',
    },
    // End banner
    end: {
      endBannerHeader: 'WORDLE DAY #',
      nextWord: 'NEXT WORD AFTER:',
      hiddenWord: 'Hidden word: ',
      challenge: 'Challenge your friends!',
      share: 'Share',
      shareText:
        'Game Wodrle day #{0} {1}/6 \n{2}\n#wordle \nGuess the word at \nhttps://vladislavsrtkn.github.io/wordle/',
      description: 'Game Wordle - guess the word of the day!',
    },
    // Language banner
    lang: {
      languageBannerHeader: 'language settings',
      languageBannerText:
        'Change the language of the application interface and guess the words in any of the available languages!',
      select: 'Select',
    },
    // Tooltips in header (desktop screens only)
    tips: {
      tooltipRules: 'Game rules',
      tooltipThemeDark: 'Dark theme',
      tooltipThemeLight: 'Light theme',
      tooltipLanguage: 'Language',
      tooltipStatistics: 'My stats',
    },
    // Errors
    err: {
      emptyLetter: 'The word must not contain empty letters.',
      wordNotFound:
        "There is no such word in the game's dictionary. Try something else. For example, TABLE",
    },
  },
  // *** RU ***
  ru: {
    stats: {
      statistic: 'статистика',
      played: 'Сыграно',
      totalWins: 'Побед всего',
      winStreakNow: 'Побед подряд сейчас',
      attemptsPerGame: 'Попыток на игру в среднем',
      winStreakMax: 'Подряд максимум',
      attemptStat: 'Распределение попыток',
    },
    rules: {
      gameRules: 'правила игры',
      goal: 'Угадайте загаданное слово дня в игре Вордли (Wordle) с шести попыток.',
      exampleHiddenWord: 'ПИРАТ',
      firstTry: 'Схема',
      secondTry: 'Вирус',
      thirdTry: 'Мираж',
      firstLetter: 'А',
      secondLetter: 'И',
      thirdLetter: 'Р',
      firstExample:
        'После каждой попытки цвет букв будет меняться, чтобы показать, какие буквы есть в загаданном слове! Например, мы пытаемся отгадать слово {0} и вводим слово {1}:',
      firstOutcome: 'Буква {0} есть в загаданном слове, но стоит в другом месте.',
      secondExample:
        'Затем ввели слово {0}. Буквы {1} и {2} есть в загаданном слове и стоят на правильных местах.',
      thirdExample: 'Если слово угадано правильно, то все буквы будут выделены!',
      fourthExample: 'Если буквы нет в загаданном слове, то она выделяется серым.',
      dailyRule: 'Каждый день загадывается новое слово!',
      play: 'ИГРАТЬ!',
      firstQuestion: 'Какие слова могут быть загаданы?',
      firstAnswer: 'В основном загадываются существительные в единственном числе.',
      secondQuestion: 'Могут ли в загадываемом слове быть одинаковые буквы?',
      secondAnswer: 'Да, в загаданном слове могут быть одинаковые буквы.',
      thirdQuestion: 'Все отгадывают одинаковое слово?',
      thirdAnswer: 'Да, каждый день слово для всех одинаковое.',
      aboutTitle: 'О проекте',
      about:
        'Это приложение было написано для личного пользования и моих друзей, что бы они могли отвлечься от рутины и немного напрячь мозги) В случае вопросов или предложений, свяжитесь со мной по {0}. Посмотреть исходный код можно на {1}.',
    },
    end: {
      endBannerHeader: 'WORDLE ДЕНЬ #',
      nextWord: 'СДЕДУЮЩЕЕ СЛОВО ЧЕРЕЗ:',
      hiddenWord: 'Загаданное слово: ',
      challenge: 'Бросьте вызов друзьям!',
      share: 'Поделиться',
      shareText:
        'Игра Wodrle День #{0} {1}/6 \n{2}\n#вордли \nОтгадайте слово на \nhttps://vladislavsrtkn.github.io/wordle/',
      description: 'Игра Wordle (Вордли) - угадай слово дня!',
    },
    lang: {
      languageBannerHeader: 'Язык приложения',
      languageBannerText:
        'Меняйте язык интерфейса приложения и отгадывайте слова на любом из доступных языков!',
      select: 'Выбрать',
    },
    tips: {
      tooltipRules: 'Правила игры',
      tooltipThemeDark: 'Темная тема',
      tooltipThemeLight: 'Светлая тема',
      tooltipLanguage: 'Язык приложения',
      tooltipStatistics: 'Моя статистика',
    },
    err: {
      emptyLetter: 'В слове не должно быть пустых букв.',
      wordNotFound:
        'В словаре игры нет такого слова. Попробуйте какое-нибудь другое. Например, АВТОР',
    },
  },
});

export default textData;
