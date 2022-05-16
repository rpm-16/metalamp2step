# Toxin MetaLamp
Верстка на конкурс от MetaLamp на FrontendDev-a. Вестка с приминением 
таких инструментов как Figma, Git, Pug, Sass, Webpack, Pixel Perfect ..

**Цель:**
Приобрести практические навыки в верстке с использованием современныхх инструментов.
показать текущий уровень разработчка в вопросе верстки и способности ипользовать 
инструменты верстки.

## Ссылка
проект на git: https://github.com/rpm-16/metalamp2step


## Установка
`npm i` – установить зависимости проекта
`npm run build` – билд дистрибутива

## Используемые библиотеки
- [normalize](https://github.com/necolas/normalize.css)
- [ion-rangeslider](https://github.com/IonDen/ion.rangeSlider)
- [jquery]

### Структура проекта
```
├── src/                             # Исходники
│   ├── favicons/                    # favicons for different browsers
│   ├── fonts/                       # Fonts (montserrat)
│   ├── img/                         # Images\logo
│   ├── js/                          # JS Scripts
│   ├── pixel-perfect/               # Images of template for Pixel Perfect
│   ├── pug/                         # Pug files Pages\Blocks\Layouts
│   └── sass/                        # Sass
├── index.js                         # Index.js
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация шаблона
└── webpack.config.js                # Конфигурация Webpack.js для dev сборки
```