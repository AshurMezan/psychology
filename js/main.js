/*
Существует несколько способов добавить `padding-bottom: 20px;` к первым двум параграфам в `div` с классом `section_one__item_content-two__container`, не затрагивая последний. Вот несколько из них:

1. Селектор :not():

```css
.section_one__item_content-two__container p:not(:last-child) {
  padding-bottom: 20px;
}
```

Этот метод использует псевдокласс `:not()`, который выбирает все элементы `p`, которые не являются последним ребенком в `div`.

2. Селекторы по индексу:

```css
.section_one__item_content-two__container p:nth-child(1),
.section_one__item_content-two__container p:nth-child(2) {
  padding-bottom: 20px;
}
```

Этот метод использует селекторы `:nth-child(1)` и `:nth-child(2)`, которые выбирают первый и второй элементы `p` соответственно.

3. Псевдокласс :first-of-type:

```css
.section_one__item_content-two__container p:first-of-type {
  padding-bottom: 20px;
}
.section_one__item_content-two__container p:nth-child(2) {
  padding-bottom: 20px;
}
```

Этот метод выбирает первый элемент `p` с помощью `:first-of-type` и второй элемент `p` с помощью `:nth-child(2)`.

4. JavaScript (для более динамичного решения):

```javascript
const paragraphs = document.querySelectorAll('.section_one__item_content-two__container p');
paragraphs.forEach((paragraph, index) => {
  if (index < paragraphs.length - 1) {
    paragraph.style.paddingBottom = '20px';
  }
});
```

Этот код использует JavaScript для перебора всех параграфов в `div` и добавления `padding-bottom` к каждому, кроме последнего.

Выберите наиболее подходящий метод в зависимости от ваших потребностей. */
