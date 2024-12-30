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
                `Наталия: «Спасибо Борису Приленскому за профессиональную помощь. Я смогла понять, в чем настоящая проблема лишнего веса, переедания. Сейчас почти в норме, работу над собой продолжаю».`,
                `Альбина: «Пришла с лишним весом и после пережитой детской психологической травмы. Мне нравится работать. И это ещё не предел, так как изменения только начинают происходить в моей жизни».`,
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


{ //  Скрипт для третьего слайдера

    const to_the_left = document.getElementById('to_the_left__section_ten_for_services');
    const to_the_right = document.getElementById('to_the_right__section_ten_for_services');

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
            const btn_left = document.querySelector('#to_the_left__section_ten_for_services');
            const btn_right = document.querySelector('#to_the_right__section_ten_for_services');
            const section_four__slaider_text = document.querySelector('.conten_for_slider__in__section_ten');
            const twoArray = [
                `Егор: «Мне очень понравился доктор Приленский Борис Юрьевич, он действительно хороший психиатр. Что мне особенно нравится — он не назначает лекарства просто так, а всегда делает это обоснованно. Он всегда готов выслушать и уважает всех своих пациентов».`,
                `Константин: «Борис Юрьевич Приленский оказался очень внимательным и чутким к моим проблемам. Мне показалось, что он видит их не через призму строгой научной теории, но и опирается на свой обширный практический опыт. Его советы оказались действенными. Я особенно благодарен ему за то, что он провел дистанционную консультацию с моей мамой, которая живет в далеком регионе. Это был по-настоящему человеческий поступок».`,
                `Василиса: «Хочу выразить огромную благодарность Борису Юрьевичу и Анне Владимировне! Это специалисты с большой буквы, спокойные, уравновешенные, добрые и отзывчивые, люди с богатым внутренним миром и огромной положительной энергией! Я обратилась с состоянием внутренней тревоги и беспокойства. Благодаря совместно проделанной работе, я смогла побороть свои страхи и тревогу, обрела внутреннее спокойствие и счастье! Стала уверенная в себе и научилась радоваться каждому моменту в жизни!»`,
                `Марина: «Невроз — это ужасная штука! Таблетки не выписали, сказали, сама справишься. За что очень благодарна профессионалу! 2 раза была на приеме, и мне хватило, чтобы понять, как с этим жить и что происходит вообще. Прочитала книги и выполнила все рекомендации. Спасибо огромное! Все в нашей голове. Обращайтесь за помощью, если не можете справиться сами. Это прекрасно, когда человек хочет быть здоровым».`,
                `Ольга: «Обратилась к Анне Владимировне по рекомендации, и даже больше как к психологу, но она оказалась единственным человеком, с кем я смогла раскрыться и озвучить свои проблемы. А когда я столкнулась с послеродовой депрессией — получила хорошую поддержку. Всё это без применения каких-либо препаратов и в результате, как многие говорят, каких-то бесед. Беседы тоже надо уметь вести. Могу к ней прийти с любой проблемой, и она всегда поможет разложить всё по полочкам, найти выход из ситуации и успокоиться».`,
                `Алексей: «Я всегда думал, что придешь к психотерапевту, поговоришь и тебе скажут, как правильно жить и что делать. Сильно удивился, когда оказалось, что для решения проблем нужно самому работать. Сначала разозлился и подумал, что все это бред, но прошло несколько сессий, я стал больше доверять и понял, что помощь как раз и есть в том, что я могу довериться специалисту, который направит меня, но я сам должен хотеть изменений».`
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