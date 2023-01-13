const wordsRuLang = [
  { word: 'бекон', number: 1 },
  { word: 'шайба', number: 2 },
  { word: 'мышца', number: 3 },
  { word: 'мираж', number: 4 },
  { word: 'мажор', number: 5 },
  { word: 'локон', number: 6 },
  { word: 'нарыв', number: 7 },
  { word: 'гриль', number: 8 },
  { word: 'дебош', number: 9 },
  { word: 'стиль', number: 10 },
  { word: 'страх', number: 11 },
  { word: 'струя', number: 12 },
  { word: 'ропот', number: 13 },
  { word: 'накал', number: 14 },
  { word: 'балет', number: 15 },
  { word: 'рикша', number: 16 },
  { word: 'проза', number: 17 },
  { word: 'масть', number: 18 },
  { word: 'дефис', number: 19 },
  { word: 'страж', number: 20 },
  { word: 'барак', number: 21 },
  { word: 'мачта', number: 22 },
  { word: 'птица', number: 23 },
  { word: 'вылет', number: 24 },
  { word: 'текст', number: 25 },
  { word: 'диван', number: 26 },
  { word: 'пытка', number: 27 },
  { word: 'война', number: 28 },
  { word: 'удача', number: 29 },
  { word: 'таран', number: 30 },
  { word: 'рамка', number: 31 },
  { word: 'судья', number: 32 },
  { word: 'миска', number: 33 },
  { word: 'барин', number: 34 },
  { word: 'вытье', number: 35 },
  { word: 'риска', number: 36 },
  { word: 'почта', number: 37 },
  { word: 'мерка', number: 38 },
  { word: 'злоба', number: 39 },
  { word: 'пункт', number: 40 },
  { word: 'район', number: 41 },
  { word: 'астра', number: 42 },
  { word: 'треть', number: 43 },
  { word: 'рубль', number: 44 },
  { word: 'толпа', number: 45 },
  { word: 'тоник', number: 46 },
  { word: 'завод', number: 47 },
  { word: 'обгон', number: 48 },
  { word: 'право', number: 49 },
  { word: 'влага', number: 50 },
  { word: 'стенд', number: 51 },
  { word: 'метод', number: 52 },
  { word: 'гонец', number: 53 },
  { word: 'тесть', number: 54 },
  { word: 'топка', number: 55 },
  { word: 'гонор', number: 56 },
  { word: 'азарт', number: 57 },
  { word: 'грязь', number: 58 },
  { word: 'сюжет', number: 59 },
  { word: 'приют', number: 60 },
  { word: 'тапир', number: 61 },
  { word: 'аборт', number: 62 },
  { word: 'тесак', number: 63 },
  { word: 'арбуз', number: 64 },
  { word: 'звено', number: 65 },
  { word: 'каюта', number: 66 },
  { word: 'адрес', number: 67 },
  { word: 'марля', number: 68 },
  { word: 'взмах', number: 69 },
  { word: 'торец', number: 70 },
  { word: 'колос', number: 71 },
  { word: 'занос', number: 72 },
  { word: 'спрей', number: 73 },
  { word: 'тонус', number: 74 },
  { word: 'улица', number: 75 },
  { word: 'тальк', number: 76 },
  { word: 'монах', number: 77 },
  { word: 'закат', number: 78 },
  { word: 'муляж', number: 79 },
  { word: 'ловля', number: 80 },
  { word: 'сумма', number: 81 },
  { word: 'визит', number: 82 },
  { word: 'агава', number: 83 },
  { word: 'пурга', number: 84 },
  { word: 'истец', number: 85 },
  { word: 'пятно', number: 86 },
  { word: 'рента', number: 87 },
  { word: 'редис', number: 88 },
  { word: 'ребус', number: 89 },
  { word: 'наезд', number: 90 },
  { word: 'посыл', number: 91 },
  { word: 'мужик', number: 92 },
  { word: 'жираф', number: 93 },
  { word: 'горло', number: 94 },
  { word: 'музей', number: 95 },
  { word: 'билет', number: 96 },
  { word: 'девиз', number: 97 },
  { word: 'пульс', number: 98 },
  { word: 'разум', number: 99 },
  { word: 'алмаз', number: 100 },
  { word: 'глава', number: 101 },
  { word: 'рвота', number: 102 },
  { word: 'бедро', number: 103 },
  { word: 'живец', number: 104 },
  { word: 'ртуть', number: 105 },
  { word: 'каток', number: 106 },
  { word: 'фауна', number: 107 },
  { word: 'кража', number: 108 },
  { word: 'упрек', number: 109 },
  { word: 'грипп', number: 110 },
  { word: 'рация', number: 111 },
  { word: 'строй', number: 112 },
  { word: 'пчела', number: 113 },
  { word: 'моляр', number: 114 },
  { word: 'декан', number: 115 },
  { word: 'пряжа', number: 116 },
  { word: 'режим', number: 117 },
  { word: 'софит', number: 118 },
  { word: 'мытье', number: 119 },
  { word: 'беляш', number: 120 },
  { word: 'проем', number: 121 },
  { word: 'пудра', number: 122 },
  { word: 'акрил', number: 123 },
  { word: 'пошив', number: 124 },
  { word: 'автор', number: 125 },
  { word: 'рампа', number: 126 },
  { word: 'рубеж', number: 127 },
  { word: 'маска', number: 128 },
  { word: 'башня', number: 129 },
  { word: 'тубус', number: 130 },
  { word: 'афера', number: 131 },
  { word: 'время', number: 132 },
  { word: 'утиль', number: 133 },
  { word: 'запас', number: 134 },
  { word: 'пресс', number: 135 },
  { word: 'трата', number: 136 },
  { word: 'дужка', number: 137 },
  { word: 'купаж', number: 138 },
  { word: 'тяпка', number: 139 },
  { word: 'выпад', number: 140 },
  { word: 'берет', number: 141 },
  { word: 'арена', number: 142 },
  { word: 'туфля', number: 143 },
  { word: 'прядь', number: 144 },
  { word: 'волхв', number: 145 },
  { word: 'транс', number: 146 },
  { word: 'кинза', number: 147 },
  { word: 'стужа', number: 148 },
  { word: 'зенит', number: 149 },
  { word: 'басня', number: 150 },
  { word: 'тезис', number: 151 },
  { word: 'устье', number: 152 },
  { word: 'оплот', number: 153 },
  { word: 'рельс', number: 154 },
  { word: 'старт', number: 155 },
  { word: 'аллея', number: 156 },
  { word: 'дозор', number: 157 },
  { word: 'спорт', number: 158 },
  { word: 'рояль', number: 159 },
  { word: 'кадык', number: 160 },
  { word: 'дождь', number: 161 },
  { word: 'принц', number: 162 },
  { word: 'резня', number: 163 },
  { word: 'отрыв', number: 164 },
  { word: 'спрос', number: 165 },
  { word: 'загар', number: 166 },
  { word: 'молва', number: 167 },
  { word: 'ружье', number: 168 },
  { word: 'жетон', number: 169 },
  { word: 'калач', number: 170 },
  { word: 'посох', number: 171 },
  { word: 'кухня', number: 172 },
  { word: 'трава', number: 173 },
  { word: 'мысль', number: 174 },
  { word: 'кость', number: 175 },
  { word: 'лодка', number: 176 },
  { word: 'резон', number: 177 },
  { word: 'заход', number: 178 },
  { word: 'мойка', number: 179 },
  { word: 'лазер', number: 180 },
  { word: 'плита', number: 181 },
  { word: 'изгиб', number: 182 },
  { word: 'грыжа', number: 183 },
  { word: 'особь', number: 184 },
  { word: 'штора', number: 185 },
  { word: 'пятка', number: 186 },
  { word: 'фронт', number: 187 },
  { word: 'форма', number: 188 },
  { word: 'фурор', number: 189 },
  { word: 'лапта', number: 190 },
  { word: 'точка', number: 191 },
  { word: 'огонь', number: 192 },
  { word: 'потоп', number: 193 },
  { word: 'хурма', number: 194 },
  { word: 'хакер', number: 195 },
  { word: 'дрель', number: 196 },
  { word: 'сталь', number: 197 },
  { word: 'очерк', number: 198 },
  { word: 'кобра', number: 199 },
  { word: 'рокот', number: 200 },
  { word: 'транш', number: 201 },
  { word: 'радар', number: 202 },
  { word: 'мания', number: 203 },
  { word: 'алыча', number: 204 },
  { word: 'икота', number: 205 },
  { word: 'схема', number: 206 },
  { word: 'фьорд', number: 207 },
  { word: 'обдув', number: 208 },
  { word: 'пшено', number: 209 },
  { word: 'окись', number: 210 },
  { word: 'облик', number: 211 },
  { word: 'лунка', number: 212 },
  { word: 'ампер', number: 213 },
  { word: 'доска', number: 214 },
  { word: 'зерно', number: 215 },
  { word: 'отсек', number: 216 },
  { word: 'ангар', number: 217 },
  { word: 'забег', number: 218 },
  { word: 'пилон', number: 219 },
  { word: 'запой', number: 220 },
  { word: 'базар', number: 221 },
  { word: 'хвост', number: 222 },
  { word: 'исток', number: 223 },
  { word: 'маляр', number: 224 },
  { word: 'тыква', number: 225 },
  { word: 'вязка', number: 226 },
  { word: 'адепт', number: 227 },
  { word: 'фугас', number: 228 },
  { word: 'отлов', number: 229 },
  { word: 'вьюга', number: 230 },
  { word: 'связь', number: 231 },
  { word: 'недуг', number: 232 },
  { word: 'жесть', number: 233 },
  { word: 'почва', number: 234 },
  { word: 'газон', number: 235 },
  { word: 'отряд', number: 236 },
  { word: 'мятеж', number: 237 },
  { word: 'парус', number: 238 },
  { word: 'ольха', number: 239 },
  { word: 'раунд', number: 240 },
  { word: 'зажим', number: 241 },
  { word: 'фобия', number: 242 },
  { word: 'висок', number: 243 },
  { word: 'труба', number: 244 },
  { word: 'армия', number: 245 },
  { word: 'аврал', number: 246 },
  { word: 'налог', number: 247 },
  { word: 'роман', number: 248 },
  { word: 'отрез', number: 249 },
  { word: 'бегун', number: 250 },
  { word: 'копна', number: 251 },
  { word: 'атака', number: 252 },
  { word: 'бетон', number: 253 },
  { word: 'рейка', number: 254 },
  { word: 'пауза', number: 255 },
  { word: 'топор', number: 256 },
  { word: 'магма', number: 257 },
  { word: 'фишка', number: 258 },
  { word: 'укроп', number: 259 },
  { word: 'зверь', number: 260 },
  { word: 'анонс', number: 261 },
  { word: 'отчет', number: 262 },
  { word: 'траур', number: 263 },
  { word: 'песец', number: 264 },
  { word: 'сосна', number: 265 },
  { word: 'тюбик', number: 266 },
  { word: 'кузен', number: 267 },
  { word: 'амбар', number: 268 },
  { word: 'вуаль', number: 269 },
  { word: 'багаж', number: 270 },
  { word: 'барон', number: 271 },
  { word: 'культ', number: 272 },
  { word: 'фотон', number: 273 },
  { word: 'вычет', number: 274 },
  { word: 'моток', number: 275 },
  { word: 'короб', number: 276 },
  { word: 'квота', number: 277 },
  { word: 'кокон', number: 278 },
  { word: 'мечта', number: 279 },
  { word: 'загон', number: 280 },
  { word: 'фланг', number: 281 },
  { word: 'ребро', number: 282 },
  { word: 'пижон', number: 283 },
  { word: 'рвань', number: 284 },
  { word: 'пепел', number: 285 },
  { word: 'суета', number: 286 },
  { word: 'стриж', number: 287 },
  { word: 'арест', number: 288 },
  { word: 'атлет', number: 289 },
  { word: 'въезд', number: 290 },
  { word: 'намыв', number: 291 },
  { word: 'хохот', number: 292 },
  { word: 'нахал', number: 293 },
  { word: 'запах', number: 294 },
  { word: 'пение', number: 295 },
  { word: 'кубок', number: 296 },
  { word: 'мороз', number: 297 },
  { word: 'песня', number: 298 },
  { word: 'холод', number: 299 },
  { word: 'лесть', number: 300 },
  { word: 'рукав', number: 301 },
  { word: 'кулак', number: 302 },
  { word: 'аршин', number: 303 },
  { word: 'пьеса', number: 304 },
  { word: 'обмер', number: 305 },
  { word: 'мидия', number: 306 },
  { word: 'дрожь', number: 307 },
  { word: 'налив', number: 308 },
  { word: 'лыжня', number: 309 },
  { word: 'осина', number: 310 },
  { word: 'магия', number: 311 },
  { word: 'напор', number: 312 },
  { word: 'халва', number: 313 },
  { word: 'почет', number: 314 },
  { word: 'финиш', number: 315 },
  { word: 'аванс', number: 316 },
  { word: 'вилка', number: 317 },
  { word: 'каска', number: 318 },
  { word: 'омега', number: 319 },
  { word: 'гопак', number: 320 },
  { word: 'батон', number: 321 },
  { word: 'розга', number: 322 },
  { word: 'рифма', number: 323 },
  { word: 'нажим', number: 324 },
  { word: 'вирус', number: 325 },
  { word: 'опиум', number: 326 },
  { word: 'бисер', number: 327 },
  { word: 'соска', number: 328 },
  { word: 'ответ', number: 329 },
  { word: 'тунец', number: 330 },
  { word: 'хорек', number: 331 },
  { word: 'делец', number: 332 },
  { word: 'окрас', number: 333 },
  { word: 'сфера', number: 334 },
  { word: 'лотос', number: 335 },
  { word: 'резец', number: 336 },
  { word: 'вопль', number: 337 },
  { word: 'налет', number: 338 },
  { word: 'песок', number: 339 },
  { word: 'флора', number: 340 },
  { word: 'догма', number: 341 },
  { word: 'нагар', number: 342 },
  { word: 'посев', number: 343 },
  { word: 'лилия', number: 344 },
  { word: 'взмыв', number: 345 },
  { word: 'кросс', number: 346 },
  { word: 'парта', number: 347 },
  { word: 'отвал', number: 348 },
  { word: 'округ', number: 349 },
  { word: 'комок', number: 350 },
  { word: 'шаман', number: 351 },
  { word: 'изгой', number: 352 },
  { word: 'месяц', number: 353 },
  { word: 'леска', number: 354 },
  { word: 'карта', number: 355 },
  { word: 'треск', number: 356 },
  { word: 'ухват', number: 357 },
  { word: 'теска', number: 358 },
  { word: 'ширма', number: 359 },
  { word: 'заезд', number: 360 },
  { word: 'пенал', number: 361 },
  { word: 'афиша', number: 362 },
  { word: 'хутор', number: 363 },
  { word: 'архив', number: 364 },
  { word: 'мазут', number: 365 },
  { word: 'напев', number: 366 },
  { word: 'топик', number: 367 },
  { word: 'берег', number: 368 },
  { word: 'спуск', number: 369 },
  { word: 'прием', number: 370 },
  { word: 'гниль', number: 371 },
  { word: 'вывих', number: 372 },
  { word: 'питон', number: 373 },
  { word: 'сукно', number: 374 },
  { word: 'пекло', number: 375 },
  { word: 'поток', number: 376 },
  { word: 'канва', number: 377 },
  { word: 'ликер', number: 378 },
  { word: 'добор', number: 379 },
  { word: 'хомяк', number: 380 },
  { word: 'тропа', number: 381 },
  { word: 'пупок', number: 382 },
  { word: 'кумир', number: 383 },
  { word: 'пилот', number: 384 },
  { word: 'спирт', number: 385 },
  { word: 'пафос', number: 386 },
  { word: 'бизон', number: 387 },
  { word: 'искра', number: 388 },
  { word: 'проба', number: 389 },
  { word: 'обвал', number: 390 },
  { word: 'финал', number: 391 },
  { word: 'шорох', number: 392 },
  { word: 'киоск', number: 393 },
  { word: 'груда', number: 394 },
  { word: 'хруст', number: 395 },
  { word: 'лепта', number: 396 },
  { word: 'фильм', number: 397 },
  { word: 'канон', number: 398 },
  { word: 'гуашь', number: 399 },
  { word: 'макет', number: 400 },
  { word: 'плеск', number: 401 },
  { word: 'исход', number: 402 },
  { word: 'пакет', number: 403 },
  { word: 'базис', number: 404 },
  { word: 'грива', number: 405 },
  { word: 'выход', number: 406 },
  { word: 'батут', number: 407 },
  { word: 'бидон', number: 408 },
  { word: 'купон', number: 409 },
  { word: 'факел', number: 410 },
  { word: 'сыщик', number: 411 },
  { word: 'гайка', number: 412 },
  { word: 'аорта', number: 413 },
  { word: 'гараж', number: 414 },
  { word: 'театр', number: 415 },
  { word: 'бирка', number: 416 },
  { word: 'сумка', number: 417 },
  { word: 'акция', number: 418 },
  { word: 'дрозд', number: 419 },
  { word: 'виток', number: 420 },
  { word: 'шитье', number: 421 },
  { word: 'вождь', number: 422 },
  { word: 'стадо', number: 423 },
  { word: 'шалун', number: 424 },
  { word: 'палас', number: 425 },
  { word: 'вышка', number: 426 },
  { word: 'нытье', number: 427 },
  { word: 'порча', number: 428 },
  { word: 'набор', number: 429 },
  { word: 'мазок', number: 430 },
  { word: 'уступ', number: 431 },
  { word: 'астма', number: 432 },
  { word: 'земля', number: 433 },
  { word: 'книга', number: 434 },
  { word: 'галка', number: 435 },
  { word: 'физик', number: 436 },
  { word: 'фирма', number: 437 },
  { word: 'тайга', number: 438 },
  { word: 'отпор', number: 439 },
  { word: 'доход', number: 440 },
  { word: 'тариф', number: 441 },
  { word: 'форум', number: 442 },
  { word: 'оазис', number: 443 },
  { word: 'норма', number: 444 },
  { word: 'поэма', number: 445 },
  { word: 'ранец', number: 446 },
  { word: 'шланг', number: 447 },
  { word: 'гусар', number: 448 },
  { word: 'дамба', number: 449 },
  { word: 'выдра', number: 450 },
  { word: 'плеер', number: 451 },
  { word: 'фляга', number: 452 },
  { word: 'успех', number: 453 },
  { word: 'место', number: 454 },
  { word: 'донос', number: 455 },
  { word: 'износ', number: 456 },
  { word: 'кивок', number: 457 },
  { word: 'лимит', number: 458 },
  { word: 'пламя', number: 459 },
  { word: 'канат', number: 460 },
  { word: 'пинта', number: 461 },
  { word: 'палач', number: 462 },
  { word: 'сброд', number: 463 },
  { word: 'ореол', number: 464 },
  { word: 'белка', number: 465 },
  { word: 'аббат', number: 466 },
  { word: 'банда', number: 467 },
  { word: 'шифер', number: 468 },
  { word: 'акциз', number: 469 },
  { word: 'штурм', number: 470 },
  { word: 'шмель', number: 471 },
  { word: 'абзац', number: 472 },
  { word: 'мошка', number: 473 },
  { word: 'казнь', number: 474 },
  { word: 'койот', number: 475 },
  { word: 'игрок', number: 476 },
  { word: 'часть', number: 477 },
  { word: 'лакей', number: 478 },
  { word: 'поезд', number: 479 },
  { word: 'навес', number: 480 },
  { word: 'опрос', number: 481 },
  { word: 'полет', number: 482 },
  { word: 'багет', number: 483 },
  { word: 'отжим', number: 484 },
  { word: 'актер', number: 485 },
  { word: 'штиль', number: 486 },
  { word: 'эклер', number: 487 },
  { word: 'дрейф', number: 488 },
  { word: 'стезя', number: 489 },
  { word: 'олива', number: 490 },
  { word: 'охват', number: 491 },
  { word: 'отчим', number: 492 },
  { word: 'ангел', number: 493 },
  { word: 'финик', number: 494 },
  { word: 'щенок', number: 495 },
  { word: 'шофер', number: 496 },
  { word: 'шуруп', number: 497 },
  { word: 'волна', number: 498 },
  { word: 'штамм', number: 499 },
  { word: 'нерка', number: 500 },
  { word: 'егерь', number: 501 },
  { word: 'аркан', number: 502 },
  { word: 'выбор', number: 503 },
  { word: 'вывод', number: 504 },
  { word: 'число', number: 505 },
  { word: 'месса', number: 506 },
  { word: 'извоз', number: 507 },
  { word: 'давка', number: 508 },
  { word: 'удило', number: 509 },
  { word: 'узник', number: 510 },
  { word: 'балык', number: 511 },
  { word: 'фасад', number: 512 },
  { word: 'жених', number: 513 },
  { word: 'океан', number: 514 },
  { word: 'юрист', number: 515 },
  { word: 'сосед', number: 516 },
  { word: 'опись', number: 517 },
  { word: 'инжир', number: 518 },
  { word: 'кисть', number: 519 },
  { word: 'каста', number: 520 },
  { word: 'чудак', number: 521 },
  { word: 'банан', number: 522 },
  { word: 'объем', number: 523 },
  { word: 'чехол', number: 524 },
  { word: 'опека', number: 525 },
  { word: 'вызов', number: 526 },
  { word: 'манеж', number: 527 },
  { word: 'отказ', number: 528 },
  { word: 'цукат', number: 529 },
  { word: 'биржа', number: 530 },
  { word: 'рулет', number: 531 },
  { word: 'взлом', number: 532 },
  { word: 'выкуп', number: 533 },
  { word: 'копия', number: 534 },
  { word: 'корка', number: 535 },
  { word: 'шулер', number: 536 },
  { word: 'мопед', number: 537 },
  { word: 'обруч', number: 538 },
  { word: 'отток', number: 539 },
  { word: 'тонна', number: 540 },
  { word: 'флирт', number: 541 },
  { word: 'лемур', number: 542 },
  { word: 'солод', number: 543 },
  { word: 'гроза', number: 544 },
  { word: 'битва', number: 545 },
  { word: 'среда', number: 546 },
  { word: 'плоть', number: 547 },
  { word: 'набег', number: 548 },
  { word: 'выдох', number: 549 },
  { word: 'вдова', number: 550 },
  { word: 'сауна', number: 551 },
  { word: 'жакет', number: 552 },
  { word: 'фазан', number: 553 },
  { word: 'химик', number: 554 },
  { word: 'скейт', number: 555 },
  { word: 'ведро', number: 556 },
  { word: 'затея', number: 557 },
  { word: 'ручка', number: 558 },
  { word: 'сезон', number: 559 },
  { word: 'свояк', number: 560 },
  { word: 'товар', number: 561 },
  { word: 'ферзь', number: 562 },
  { word: 'штраф', number: 563 },
  { word: 'комод', number: 564 },
  { word: 'весло', number: 565 },
  { word: 'венок', number: 566 },
  { word: 'майор', number: 567 },
  { word: 'оскал', number: 568 },
  { word: 'черта', number: 569 },
  { word: 'паста', number: 570 },
  { word: 'лимон', number: 571 },
  { word: 'крыша', number: 572 },
  { word: 'чешуя', number: 573 },
  { word: 'лямка', number: 574 },
  { word: 'шапка', number: 575 },
  { word: 'казус', number: 576 },
  { word: 'нация', number: 577 },
  { word: 'колба', number: 578 },
  { word: 'купец', number: 579 },
  { word: 'элита', number: 580 },
  { word: 'блюдо', number: 581 },
  { word: 'силач', number: 582 },
  { word: 'эстет', number: 583 },
  { word: 'длина', number: 584 },
  { word: 'брага', number: 585 },
  { word: 'гейша', number: 586 },
  { word: 'бокал', number: 587 },
  { word: 'мотор', number: 588 },
  { word: 'взрыв', number: 589 },
  { word: 'типаж', number: 590 },
  { word: 'торба', number: 591 },
  { word: 'спина', number: 592 },
  { word: 'мерин', number: 593 },
  { word: 'зелье', number: 594 },
  { word: 'графа', number: 595 },
  { word: 'палец', number: 596 },
  { word: 'вепрь', number: 597 },
  { word: 'кишка', number: 598 },
  { word: 'масло', number: 599 },
  { word: 'лоток', number: 600 },
  { word: 'вожак', number: 601 },
  { word: 'шурин', number: 602 },
  { word: 'школа', number: 603 },
  { word: 'битье', number: 604 },
  { word: 'табор', number: 605 },
  { word: 'пицца', number: 606 },
  { word: 'фужер', number: 607 },
  { word: 'рыбак', number: 608 },
  { word: 'былое', number: 609 },
  { word: 'варяг', number: 610 },
  { word: 'щегол', number: 611 },
  { word: 'киста', number: 612 },
  { word: 'шутка', number: 613 },
  { word: 'князь', number: 614 },
  { word: 'навар', number: 615 },
  { word: 'шатен', number: 616 },
  { word: 'кофта', number: 617 },
  { word: 'филин', number: 618 },
  { word: 'кучер', number: 619 },
  { word: 'образ', number: 620 },
  { word: 'буран', number: 621 },
  { word: 'слизь', number: 622 },
  { word: 'штифт', number: 623 },
  { word: 'показ', number: 624 },
  { word: 'стела', number: 625 },
  { word: 'испуг', number: 626 },
  { word: 'пашня', number: 627 },
  { word: 'дупло', number: 628 },
  { word: 'химия', number: 629 },
  { word: 'шторм', number: 630 },
  { word: 'голос', number: 631 },
  { word: 'ломка', number: 632 },
  { word: 'буфет', number: 633 },
  { word: 'рулон', number: 634 },
  { word: 'хобот', number: 635 },
  { word: 'тахта', number: 636 },
  { word: 'олово', number: 637 },
  { word: 'север', number: 638 },
  { word: 'канал', number: 639 },
  { word: 'эпоха', number: 640 },
  { word: 'окунь', number: 641 },
  { word: 'уголь', number: 642 },
  { word: 'навоз', number: 643 },
  { word: 'повар', number: 644 },
  { word: 'чулан', number: 645 },
  { word: 'лента', number: 646 },
  { word: 'масса', number: 647 },
  { word: 'ковер', number: 648 },
  { word: 'шпага', number: 649 },
  { word: 'челка', number: 650 },
  { word: 'вклад', number: 651 },
  { word: 'досуг', number: 652 },
  { word: 'шпион', number: 653 },
  { word: 'донор', number: 654 },
  { word: 'свист', number: 655 },
  { word: 'гамак', number: 656 },
  { word: 'гарем', number: 657 },
  { word: 'спица', number: 658 },
  { word: 'отдых', number: 659 },
  { word: 'гость', number: 660 },
  { word: 'шафер', number: 661 },
  { word: 'штрих', number: 662 },
  { word: 'велюр', number: 663 },
  { word: 'вздор', number: 664 },
  { word: 'фетиш', number: 665 },
  { word: 'уксус', number: 666 },
  { word: 'сеанс', number: 667 },
  { word: 'грамм', number: 668 },
  { word: 'слуга', number: 669 },
  { word: 'тайна', number: 670 },
  { word: 'ветка', number: 671 },
  { word: 'класс', number: 672 },
  { word: 'секта', number: 673 },
  { word: 'вихрь', number: 674 },
  { word: 'завал', number: 675 },
  { word: 'пласт', number: 676 },
  { word: 'плечо', number: 677 },
  { word: 'вилла', number: 678 },
  { word: 'валет', number: 679 },
  { word: 'обзор', number: 680 },
  { word: 'рывок', number: 681 },
  { word: 'мекка', number: 682 },
  { word: 'орлан', number: 683 },
  { word: 'откат', number: 684 },
  { word: 'самец', number: 685 },
  { word: 'верба', number: 686 },
  { word: 'порок', number: 687 },
  { word: 'нефть', number: 688 },
  { word: 'плеть', number: 689 },
  { word: 'позер', number: 690 },
  { word: 'кусок', number: 691 },
  { word: 'смерч', number: 692 },
  { word: 'болид', number: 693 },
  { word: 'склеп', number: 694 },
  { word: 'бронх', number: 695 },
  { word: 'сенат', number: 696 },
  { word: 'рычаг', number: 697 },
  { word: 'клоун', number: 698 },
  { word: 'грунт', number: 699 },
  { word: 'убыль', number: 700 },
  { word: 'пихта', number: 701 },
  { word: 'эскиз', number: 702 },
  { word: 'горох', number: 703 },
  { word: 'взнос', number: 704 },
  { word: 'лицей', number: 705 },
  { word: 'замах', number: 706 },
  { word: 'омлет', number: 707 },
  { word: 'оклик', number: 708 },
  { word: 'этика', number: 709 },
  { word: 'дятел', number: 710 },
  { word: 'кювет', number: 711 },
  { word: 'сапог', number: 712 },
  { word: 'вафля', number: 713 },
  { word: 'линия', number: 714 },
  { word: 'драка', number: 715 },
  { word: 'лаваш', number: 716 },
  { word: 'волос', number: 717 },
  { word: 'замок', number: 718 },
  { word: 'визаж', number: 719 },
  { word: 'кегля', number: 720 },
  { word: 'замес', number: 721 },
  { word: 'булат', number: 722 },
  { word: 'индюк', number: 723 },
  { word: 'этнос', number: 724 },
  { word: 'облом', number: 725 },
  { word: 'брасс', number: 726 },
  { word: 'уклон', number: 727 },
  { word: 'буфер', number: 728 },
  { word: 'жокей', number: 729 },
  { word: 'осетр', number: 730 },
  { word: 'осада', number: 731 },
  { word: 'бридж', number: 732 },
  { word: 'сцена', number: 733 },
  { word: 'центр', number: 734 },
  { word: 'румба', number: 735 },
  { word: 'племя', number: 736 },
  { word: 'сброс', number: 737 },
  { word: 'лидер', number: 738 },
  { word: 'помол', number: 739 },
  { word: 'дубль', number: 740 },
  { word: 'падеж', number: 741 },
  { word: 'букет', number: 742 },
  { word: 'рюмка', number: 743 },
  { word: 'осень', number: 744 },
  { word: 'бремя', number: 745 },
  { word: 'буква', number: 746 },
  { word: 'связь', number: 747 },
  { word: 'тукан', number: 748 },
  { word: 'котел', number: 749 },
  { word: 'флюид', number: 750 },
  { word: 'юноша', number: 751 },
  { word: 'имидж', number: 752 },
  { word: 'фикус', number: 753 },
  { word: 'блоха', number: 754 },
  { word: 'заказ', number: 755 },
  { word: 'дурак', number: 756 },
  { word: 'казна', number: 757 },
  { word: 'мусор', number: 758 },
  { word: 'комар', number: 759 },
  { word: 'вырез', number: 760 },
  { word: 'шприц', number: 761 },
  { word: 'окрик', number: 762 },
  { word: 'скотч', number: 763 },
  { word: 'голод', number: 764 },
  { word: 'терем', number: 765 },
  { word: 'танец', number: 766 },
  { word: 'слюна', number: 767 },
  { word: 'спесь', number: 768 },
  { word: 'карат', number: 769 },
  { word: 'дудка', number: 770 },
  { word: 'живот', number: 771 },
  { word: 'город', number: 772 },
  { word: 'сленг', number: 773 },
  { word: 'конюх', number: 774 },
  { word: 'слово', number: 775 },
  { word: 'учеба', number: 776 },
  { word: 'глина', number: 777 },
  { word: 'паром', number: 778 },
  { word: 'фасон', number: 779 },
  { word: 'завет', number: 780 },
  { word: 'босяк', number: 781 },
  { word: 'ссора', number: 782 },
  { word: 'брошь', number: 783 },
  { word: 'штука', number: 784 },
  { word: 'откос', number: 785 },
  { word: 'декор', number: 786 },
  { word: 'тесто', number: 787 },
  { word: 'груша', number: 788 },
  { word: 'откуп', number: 789 },
  { word: 'тулуп', number: 790 },
  { word: 'слива', number: 791 },
  { word: 'бутса', number: 792 },
  { word: 'мэрия', number: 793 },
  { word: 'гелий', number: 794 },
  { word: 'верфь', number: 795 },
  { word: 'ванна', number: 796 },
  { word: 'ветвь', number: 797 },
  { word: 'смута', number: 798 },
  { word: 'шквал', number: 799 },
  { word: 'полюс', number: 800 },
  { word: 'бланк', number: 801 },
  { word: 'рынок', number: 802 },
  { word: 'жизнь', number: 803 },
  { word: 'мафия', number: 804 },
  { word: 'склон', number: 805 },
  { word: 'рупор', number: 806 },
  { word: 'совок', number: 807 },
  { word: 'обман', number: 808 },
  { word: 'колея', number: 809 },
  { word: 'тиран', number: 810 },
  { word: 'омела', number: 811 },
  { word: 'созыв', number: 812 },
  { word: 'жажда', number: 813 },
  { word: 'страз', number: 814 },
  { word: 'выгул', number: 815 },
  { word: 'сироп', number: 816 },
  { word: 'цифра', number: 817 },
  { word: 'шпора', number: 818 },
  { word: 'зачес', number: 819 },
  { word: 'лампа', number: 820 },
  { word: 'порез', number: 821 },
  { word: 'орган', number: 822 },
  { word: 'вздох', number: 823 },
  { word: 'жилье', number: 824 },
  { word: 'овраг', number: 825 },
  { word: 'ветер', number: 826 },
  { word: 'озеро', number: 827 },
  { word: 'ворох', number: 828 },
  { word: 'обида', number: 829 },
  { word: 'певец', number: 830 },
  { word: 'цедра', number: 831 },
  { word: 'вокал', number: 832 },
  { word: 'сдоба', number: 833 },
  { word: 'валун', number: 834 },
  { word: 'гуляш', number: 835 },
  { word: 'порог', number: 836 },
  { word: 'сутки', number: 837 },
  { word: 'судак', number: 838 },
  { word: 'смысл', number: 839 },
  { word: 'экран', number: 840 },
  { word: 'сырье', number: 841 },
  { word: 'глушь', number: 842 },
  { word: 'навал', number: 843 },
  { word: 'нюанс', number: 844 },
  { word: 'дуэль', number: 845 },
  { word: 'ездок', number: 846 },
  { word: 'топот', number: 847 },
  { word: 'сдача', number: 848 },
  { word: 'халат', number: 849 },
  { word: 'отбор', number: 850 },
  { word: 'отсев', number: 851 },
  { word: 'весна', number: 852 },
  { word: 'гонка', number: 853 },
  { word: 'покой', number: 854 },
  { word: 'совет', number: 855 },
  { word: 'семга', number: 856 },
  { word: 'десна', number: 857 },
  { word: 'катер', number: 858 },
  { word: 'штырь', number: 859 },
  { word: 'вечер', number: 860 },
  { word: 'мулат', number: 861 },
  { word: 'кокос', number: 862 },
  { word: 'сдвиг', number: 863 },
  { word: 'бутон', number: 864 },
  { word: 'скука', number: 865 },
  { word: 'салат', number: 866 },
  { word: 'варан', number: 867 },
  { word: 'позор', number: 868 },
  { word: 'хамка', number: 869 },
  { word: 'бубен', number: 870 },
  { word: 'плата', number: 871 },
  { word: 'идеал', number: 872 },
  { word: 'молот', number: 873 },
  { word: 'дамка', number: 874 },
  { word: 'сойка', number: 875 },
  { word: 'замер', number: 876 },
  { word: 'огрех', number: 877 },
  { word: 'порей', number: 878 },
  { word: 'смена', number: 879 },
  { word: 'зачет', number: 880 },
  { word: 'щебет', number: 881 },
  { word: 'герой', number: 882 },
  { word: 'вишня', number: 883 },
  { word: 'дочка', number: 884 },
  { word: 'олень', number: 885 },
  { word: 'довод', number: 886 },
  { word: 'пожар', number: 887 },
  { word: 'труха', number: 888 },
  { word: 'отель', number: 889 },
  { word: 'мешок', number: 890 },
  { word: 'круиз', number: 891 },
  { word: 'обувь', number: 892 },
  { word: 'сахар', number: 893 },
  { word: 'месть', number: 894 },
  { word: 'пират', number: 895 },
  { word: 'жердь', number: 896 },
  { word: 'засов', number: 897 },
  { word: 'диета', number: 898 },
  { word: 'блуза', number: 899 },
  { word: 'скунс', number: 900 },
  { word: 'седло', number: 901 },
  { word: 'улика', number: 902 },
  { word: 'честь', number: 903 },
  { word: 'булка', number: 904 },
  { word: 'варка', number: 905 },
  { word: 'степь', number: 906 },
  { word: 'ягуар', number: 907 },
  { word: 'обмен', number: 908 },
  { word: 'изъян', number: 909 },
  { word: 'брюхо', number: 910 },
  { word: 'отбой', number: 911 },
  { word: 'купол', number: 912 },
  { word: 'плева', number: 913 },
  { word: 'твист', number: 914 },
  { word: 'вагон', number: 915 },
  { word: 'курок', number: 916 },
  { word: 'лепка', number: 917 },
  { word: 'шепот', number: 918 },
  { word: 'сарай', number: 919 },
  { word: 'кулич', number: 920 },
  { word: 'повод', number: 921 },
  { word: 'плешь', number: 922 },
  { word: 'слеза', number: 923 },
  { word: 'желчь', number: 924 },
  { word: 'спазм', number: 925 },
  { word: 'начес', number: 926 },
  { word: 'фраза', number: 927 },
  { word: 'слава', number: 928 },
  { word: 'ссуда', number: 929 },
  { word: 'ягода', number: 930 },
  { word: 'ясень', number: 931 },
  { word: 'койка', number: 932 },
  { word: 'кушак', number: 933 },
  { word: 'капля', number: 934 },
  { word: 'талон', number: 935 },
  { word: 'поиск', number: 936 },
  { word: 'жилец', number: 937 },
  { word: 'дверь', number: 938 },
  { word: 'нужда', number: 939 },
  { word: 'олимп', number: 940 },
  { word: 'бровь', number: 941 },
  { word: 'самка', number: 942 },
  { word: 'наука', number: 943 },
  { word: 'стена', number: 944 },
  { word: 'будка', number: 945 },
  { word: 'семья', number: 946 },
  { word: 'тембр', number: 947 },
  { word: 'запад', number: 948 },
  { word: 'щепка', number: 949 },
  { word: 'домен', number: 950 },
  { word: 'закон', number: 951 },
  { word: 'озноб', number: 952 },
  { word: 'камыш', number: 953 },
  { word: 'камин', number: 954 },
  { word: 'лавра', number: 955 },
  { word: 'вальс', number: 956 },
  { word: 'шрифт', number: 957 },
  { word: 'добро', number: 958 },
  { word: 'комик', number: 959 },
  { word: 'слюда', number: 960 },
  { word: 'цинга', number: 961 },
  { word: 'намек', number: 962 },
  { word: 'шкала', number: 963 },
  { word: 'желоб', number: 964 },
  { word: 'венец', number: 965 },
  { word: 'конус', number: 966 },
  { word: 'знамя', number: 967 },
  { word: 'грудь', number: 968 },
  { word: 'пирог', number: 969 },
  { word: 'веник', number: 970 },
  { word: 'сетка', number: 971 },
  { word: 'покер', number: 972 },
  { word: 'жерло', number: 973 },
  { word: 'лимфа', number: 974 },
  { word: 'бомба', number: 975 },
  { word: 'бойня', number: 976 },
  { word: 'весть', number: 977 },
  { word: 'сквер', number: 978 },
  { word: 'взлет', number: 979 },
  { word: 'конец', number: 980 },
  { word: 'помет', number: 981 },
  { word: 'навык', number: 982 },
  { word: 'богач', number: 983 },
  { word: 'грань', number: 984 },
  { word: 'скаут', number: 985 },
  { word: 'брешь', number: 986 },
  { word: 'обрыв', number: 987 },
  { word: 'крест', number: 988 },
  { word: 'номер', number: 989 },
  { word: 'заряд', number: 990 },
  { word: 'бляха', number: 991 },
  { word: 'сайра', number: 992 },
  { word: 'позыв', number: 993 },
  { word: 'ничья', number: 994 },
  { word: 'зевок', number: 995 },
  { word: 'ботва', number: 996 },
  { word: 'рысак', number: 997 },
  { word: 'бугор', number: 998 },
  { word: 'накат', number: 999 },
  { word: 'сапер', number: 1000 },
  { word: 'сурок', number: 1001 },
  { word: 'замша', number: 1002 },
  { word: 'холст', number: 1003 },
  { word: 'жатва', number: 1004 },
  { word: 'кулек', number: 1005 },
  { word: 'задор', number: 1006 },
  { word: 'обряд', number: 1007 },
  { word: 'водка', number: 1008 },
  { word: 'крыло', number: 1009 },
  { word: 'терка', number: 1010 },
  { word: 'кровь', number: 1011 },
  { word: 'чугун', number: 1012 },
  { word: 'нитка', number: 1013 },
  { word: 'салют', number: 1014 },
  { word: 'крупа', number: 1015 },
  { word: 'бурят', number: 1016 },
  { word: 'ямщик', number: 1017 },
  { word: 'икона', number: 1018 },
  { word: 'народ', number: 1019 },
  { word: 'сбруя', number: 1020 },
  { word: 'обвес', number: 1021 },
  { word: 'отвар', number: 1022 },
  { word: 'мойва', number: 1023 },
  { word: 'спора', number: 1024 },
  { word: 'шалаш', number: 1025 },
  { word: 'кефир', number: 1026 },
  { word: 'смесь', number: 1027 },
  { word: 'метка', number: 1028 },
];

export default wordsRuLang;