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
    //    const twoArray = ["Психотерапевты, ведущие группу, сами тяжелобольные люди.", "Эти сеансы проводятся, только чтобы выманить из людей деньги и одурачить их.", "Психотерапевты во время сеансов холотропного дыхания нарочно делают людям больно.", "Во время сеансов холотропного дыхания люди сходят с ума, и навсегда остаются в психиатрической больнице.", "Во время сеансов холотропного дыхания люди регулярно умирают от остановки сердца и дыхания.", "Психотерапевты, ведущие группу, извращенцы, потому что хватают людей за тело и причиняют боль.", "После сеансов становится хуже, распадаются семьи.", "Частое глубокое дыхание приводит к отравлению организма.", "Это не лечение, а значит, не Божье дело."]
    const twoArray = [
        "Елена: «Были частые ссоры с мужем, которого я постоянно ревновала. Дело доходило до битья посуды…. Возникли проблемы со здоровьем: беспокоили головные боли, нарушился сон, постоянно чувствовала раздражительность и усталость. Врачи в поликлинике поставили ВСД, дискинезию желчевыводящих путей. Прошла несколько групп. Стала спокойной, у нас большая дружная семья. Мужа люблю, конфликтов нет. В семье прекрасные отношения. Подрастают дети. Чувствую себя здоровой и помолодевшей...».",
        "Екатерина: «До группы беспокоили сильные боли в животе. Поскольку у меня было 4 операции, считала себя безнадежной, готовилась к инвалидности и к смерти. После группы боли в животе исчезли, нормализовалась работа кишечника, похудела на 20 килограмм. Сейчас чувствую себя гораздо лучше, настроение хорошее. Получаю удовольствие от общения с родными. Работаю преуспевающим риэлтором в одном из агентств недвижимости».",
        "Лариса: «Сегодня начинаю жить, дышать, любить, верить, надеяться, ждать, действовать на все 100%. Всем сердцем, полной грудью, всей душой, всеми клеточками организма, всей душой и телом. Жить, а не существовать (ярко, весело, тепло, светло, целенаправленно, всей душой и сердцем, а главное в союзе с умом). Пожалуй, начну сегодня 20.03.07 в 13:33».",
        "Мария: «Заболела бронхиальной астмой в пожилом возрасте. Лечение давало лишь временное облегчение, несмотря на усилия лучших врачей города. Прошла группу у Бориса Юрьевича. Во время группы всплыли воспоминания далекого детства. Мне удалось наконец-то выплакать все обиды и всю боль. С тех пор, на протяжении многих лет — ни одного приступа удушья».",
        "Евгений: «Очень мо-о-ощная методика. Вспомнил болезненное переживание 30-летней давности, вылезло чувство вины 8-летней давности. Осознал, как они на меня негативно влияли, улучшил отношения с близкими. Тело расслабилось от зажимов, благодаря упражнениям. Теперь делаю эти упражнения регулярно с детьми. Всем рекомендую периодически проходить группы и очищать психику от накопившегося клубка эмоциональных и рациональных противоречий»."
    ];


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

{ // Анимация для модального окна
    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');
    let unlock = true;
    const timeout = 800;

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click', function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content') && !e.target.closest('.container_for_registration')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function () {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    });

}

{
    const btnLeftForSliderInSectionFour = document.getElementById('btn_left_for_slider');
    const btnRinghtForSliderInSectionFour = document.getElementById('btn_right_for_slider');
    if(btnLeftForSliderInSectionFour) {
        btnLeftForSliderInSectionFour.style.top = '210px';
    }
    if(btnRinghtForSliderInSectionFour) {
        btnRinghtForSliderInSectionFour.style.top = '210px';
    }

}


