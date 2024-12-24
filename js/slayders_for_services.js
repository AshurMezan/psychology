{ // Скрипт для первого слайдера
    const to_the_left = document.getElementById('to_the_left');
    const to_the_right = document.getElementById('to_the_right');

    // Здесь анимация для кнопок
    to_the_left.addEventListener('mousedown', () => {
        to_the_left.style.transform = 'scale(0.9)';
    });

    to_the_left.addEventListener('mouseup', () => {
        to_the_left.style.transform = 'scale(1)';
    });

    to_the_left.addEventListener('mouseleave', () => {
        to_the_left.style.transform = 'scale(1)';
    });

    to_the_right.addEventListener('mousedown', () => {
        to_the_right.style.transform = 'scale(0.9)';
    });

    to_the_right.addEventListener('mouseup', () => {
        to_the_right.style.transform = 'scale(1)';
    });

    to_the_right.addEventListener('mouseleave', () => {
        to_the_right.style.transform = 'scale(1)';
    });

    // Здесь пошла логика для работы слайдера
    document.addEventListener('DOMContentLoaded', function () {
        try {
            const btn_left = document.querySelector('#to_the_left');
            const btn_right = document.querySelector('#to_the_right');
            const section_four__slaider_text = document.querySelector('.conten_for_slider');
            const twoArray = [
                `Екатерина: «До группы беспокоили сильные боли в животе. Поскольку у меня было 4 операции, считала себя безнадежной, готовилась к инвалидности и к смерти. После группы боли в животе исчезли, нормализовалась работа кишечника, похудела на 20 килограмм. Сейчас чувствую себя гораздо лучше, настроение хорошее. Получаю удовольствие от общения с родными. Работаю преуспевающим риэлтором в одном из агентств недвижимости».`,
                `Лариса: «Сегодня начинаю жить, дышать, любить, верить, надеяться, ждать, действовать на все 100%. Всем сердцем, полной грудью, всей душой, всеми клеточками организма, всей душой и телом. Жить, а не существовать (ярко, весело, тепло, светло, целенаправленно, всей душой и сердцем, а главное в союзе с умом). Пожалуй, начну сегодня 20.03.07 в 13:33»`,
                `Мария: «Заболела бронхиальной астмой в пожилом возрасте. Лечение давало лишь временное облегчение, несмотря на усилия лучших врачей города. Прошла группу у Бориса Юрьевича. Во время группы всплыли воспоминания далекого детства. Мне удалось наконец-то выплакать все обиды и всю боль. С тех пор, на протяжении многих лет — ни одного приступа удушья». `,
                `Евгений: «Очень мо-о-ощная методика. Вспомнил болезненное переживание 30-летней давности, вылезло чувство вины 8-летней давности. Осознал, как они на меня негативно влияли, улучшил отношения с близкими. Тело расслабилось от зажимов, благодаря упражнениям. Теперь делаю эти упражнения регулярно с детьми.Всем рекомендую периодически проходить группы и очищать психику 
          от накопившегося клубка эмоциональных и рациональных противоречий».`,
                `Анастасия: «Годовые беседы со многими психологами и психотерапевтами только еще больше рационализировали проблемы, уводили в психосоматику. Благодаря группе смогла отпустить свои переживания, наконец-то иду вперед с высоко поднятой головой. Подходы к работе максимально этичные, но сюсюкать не будут… К хирургу мы идем с гнойником в надежде, что его вскроют и выпустят гной, после дадут рекомендации как все обработать и больше не доводить до такого, а не будут заговаривать его в надежде, что само рассосется. Так и здесь. Еще и поддержат спустя время, если вдруг что-то осталось невысказанным.`,
                `Про сам офис: домашняя обстановка, с чудесными ароматами, куда приятнее и больше располагает к раскрытию, чем стерильно белый офис с твердыми стульями и серьезными людьми по ту сторону стола, которые на тебя даже не взглянут».`
            ];

            let currentTextIndex = 0;

            // Проверяем наличие всех необходимых элементов
            if (!btn_left) {
                throw new Error('Элемент с классом "btn_left" не найден.');
            }
            if (!btn_right) {
                throw new Error('Элемент с классом "btn_right" не найден.');
            }
            if (!section_four__slaider_text) {
                throw new Error('Элемент с классом "section_four__slaider_text" не найден.');
            }

            btn_right.addEventListener('click', () => {
                currentTextIndex = (currentTextIndex + 1) % twoArray.length;
                section_four__slaider_text.textContent = twoArray[currentTextIndex];
            });

            btn_left.addEventListener('click', () => {
                currentTextIndex = (currentTextIndex - 1 + twoArray.length) % twoArray.length;
                section_four__slaider_text.textContent = twoArray[currentTextIndex];
            });

        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    });
}


{ // Скрипт для второго слайдера
    const to_the_left = document.getElementById('to_the_left__section_seven');
    const to_the_right = document.getElementById('to_the_right__section_seven');

    // Здесь анимация для кнопок
    to_the_left.addEventListener('mousedown', () => {
        to_the_left.style.transform = 'scale(0.9)';
    });

    to_the_left.addEventListener('mouseup', () => {
        to_the_left.style.transform = 'scale(1)';
    });

    to_the_left.addEventListener('mouseleave', () => {
        to_the_left.style.transform = 'scale(1)';
    });

    to_the_right.addEventListener('mousedown', () => {
        to_the_right.style.transform = 'scale(0.9)';
    });

    to_the_right.addEventListener('mouseup', () => {
        to_the_right.style.transform = 'scale(1)';
    });

    to_the_right.addEventListener('mouseleave', () => {
        to_the_right.style.transform = 'scale(1)';
    });

    // Здесь пошла логика для работы слайдера
    document.addEventListener('DOMContentLoaded', function () {
        try {
            const btn_left = document.querySelector('#to_the_left__section_seven');
            const btn_right = document.querySelector('#to_the_right__section_seven');
            const section_four__slaider_text = document.querySelector('.conten_for_slider_in_section_seven');
            const twoArray = [
            `Наталия: «Спасибо Борису Приленскому за профессиональную помощь. Я смогла понять, в чем настоящая проблема лишнего веса, переедания. Сейчас почти в норме, работу над собой продолжаю».`,
            `Альбина: «Пришла с лишним весом и после пережитой детской психологической травмы. СНаталия: «Спасибо Борису Приленскому за профессиональную помощь. Я смогла понять, в чем настоящая проблема лишнего веса, переедания. Сейчас почти в норме, работу над собой продолжаю». мне нравится работать. И это ещё не предел, так как изменения только начинают происходить в моей жизни».`,
            `Юлия: «Обращалась для психотерапии при избыточном весе. Смогла похудеть на 20 кг. Борис Юрьевич врач от бога. Волшебник и маг. Поможет тому, кто по-настоящему доверится и попросит о помощи».`,
            `Наталья: «Обращалась по поводу лишнего веса, головных болей, депрессии из-за постоянного стресса. Доктор внимательно выслушал, помог разобраться с мыслями. После консультации почувствовала прилив сил, бодрости, веры в себя, ощущение свободы от влияния внешних факторов. Что удивительно, единственный доктор, который не назначил лекарства, для меня это было важно! Считаю его лучшим психотерапевтом в г. Тюмени и области, таких врачей по пальцам одной руки можно пересчитать. Минус 25 кг. Депрессии больше нет».`
            ];

            let currentTextIndex = 0;

            // Проверяем наличие всех необходимых элементов
            if (!btn_left) {
                throw new Error('Элемент с классом "btn_left" не найден.');
            }
            if (!btn_right) {
                throw new Error('Элемент с классом "btn_right" не найден.');
            }
            if (!section_four__slaider_text) {
                throw new Error('Элемент с классом "section_four__slaider_text" не найден.');
            }

            btn_right.addEventListener('click', () => {
                currentTextIndex = (currentTextIndex + 1) % twoArray.length;
                section_four__slaider_text.textContent = twoArray[currentTextIndex];
            });

            btn_left.addEventListener('click', () => {
                currentTextIndex = (currentTextIndex - 1 + twoArray.length) % twoArray.length;
                section_four__slaider_text.textContent = twoArray[currentTextIndex];
            });

        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    });
}
