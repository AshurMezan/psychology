{// Скрипт для слайдера в блоке section_two
    const sliderText = document.querySelector('.sclaider_text');
    const buttonLeft = document.querySelector('.button_left');
    const buttonRight = document.querySelector('.button_right');
    const fistArray = ["Психотерапевты сами ненормальные, неуравновешенные.", "Психотерапевты опасны, они постоянно залазят людям в мозги.", "Психотерапевты много говорят и ничего не делают. На эту работу способен любой человек.", "От психотерапии становится только хуже: людям становится больно, они плачут и начинают думать о смерти и сходят с ума.", "Психиатрическая больница переполнена людьми, которые были у психотерапевта.", "Психотерапевты — жулики.", "Психотерапевт думает только о том, чтобы урвать у вас как можно больше денег. Поэтому он специально сделает вас больным и зависимым!", "Человек должен сам решать свои проблемы. К психотерапевту обращаются только слабаки и безвольные.", "Психотерапевт после работы рассказывает о нас своим знакомым и смеется над нами!", "Раз никто не смог помочь, ваше страдание безнадежно, и какой-то там психотерапевт тем более не поможет.", "Вы не готовы к психотерапии. Это отнимает слишком много времени, которое лучше провести с друзьями за бокалом вина или чего-нибудь покрепче. Друзья вас поймут гораздо лучше и обязательно помогут.", "Зачем идти к психотерапевту, когда есть замечательные таблетки и что-то посерьезнее.", "Гадалки, колдуны и экстрасенсы помогут гораздо лучше и дешевле."];

    let currentTextIndex = 0;

    buttonRight.addEventListener('click', () => {
        currentTextIndex = (currentTextIndex + 1) % fistArray.length;
        sliderText.textContent = fistArray[currentTextIndex];
    });

    buttonLeft.addEventListener('click', () => {
        currentTextIndex = (currentTextIndex - 1 + fistArray.length) % fistArray.length;
        sliderText.textContent = fistArray[currentTextIndex];
    });
    /*Как это работает:
    1. Получение элементов:
       - `sliderText`, `buttonLeft`, `buttonRight` - получаем ссылки на соответствующие элементы HTML.
    2. Массив с текстом:
       - `fistArray` - содержит текст для слайдера.
    3. Индекс текущего текста:
       - `currentTextIndex` - хранит индекс текущего текста в массиве. Изначально установлен на `0`.
    4. Обработчик для `buttonRight`:
       - При нажатии на правую кнопку:
         - `currentTextIndex` увеличивается на `1`, а затем берется остаток от деления на длину массива (`fistArray.length`), чтобы индекс оставался в пределах массива.
         - `sliderText.textContent` устанавливается в значение из `fistArray` по новому индексу.
    5. Обработчик для `buttonLeft`:
       - При нажатии на левую кнопку:
         - `currentTextIndex` уменьшается на `1`, но если он становится отрицательным, то к нему добавляется длина массива, чтобы он снова стал положительным. Затем берется остаток от деления на длину массива.
         - `sliderText.textContent` устанавливается в значение из `fistArray` по новому индексу.*/

}

{ //Скрипт для слайдера в блоке section_four

   const btn_left = document.querySelector('.btn_left');
   const btn_right = document.querySelector('.btn_right');
   const section_four__slaider_text = document.querySelector('.section_four__slaider_text');
   const twoArray = ["Психотерапевты, ведущие группу, сами тяжелобольные люди.", "Эти сеансы проводятся, только чтобы выманить из людей деньги и одурачить их.", "Психотерапевты во время сеансов холотропного дыхания нарочно делают людям больно.", "Во время сеансов холотропного дыхания люди сходят с ума, и навсегда остаются в психиатрической больнице.", "Во время сеансов холотропного дыхания люди регулярно умирают от остановки сердца и дыхания.", "Психотерапевты, ведущие группу, извращенцы, потому что хватают людей за тело и причиняют боль.", "После сеансов становится хуже, распадаются семьи.", "Частое глубокое дыхание приводит к отравлению организма.", "Это не лечение, а значит, не Божье дело."]
   let currentTextIndex = 0;

   btn_right.addEventListener('click', () => {
      currentTextIndex = (currentTextIndex + 1) % twoArray.length;
      section_four__slaider_text.textContent = twoArray[currentTextIndex];
  });

  btn_left.addEventListener('click', () => {
      currentTextIndex = (currentTextIndex - 1 + twoArray.length) % twoArray.length;
      section_four__slaider_text.textContent = twoArray[currentTextIndex];
  });
} 