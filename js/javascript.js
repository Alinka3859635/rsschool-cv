// taken from https://html5css.ru/howto/howto_js_topnav_responsive.php
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


console.log("Самооценка:");  
console.log("1. вёрстка валидная (+10);");
console.log("2. вёрстка семантическая, так как присутствуют такие теги: header, main, footer, h1, h2, h3, h4, nav, section, blockquote (+20);");
console.log("3. используются css-стили (+10);");
console.log("4. контент размещается в блоке, который горизонтально центрируется на странице (+10);");
console.log("5. вёрстка адаптивная (0);");
console.log("6. есть адаптивное бургер-меню c плавной прокруткой по якорям (+10);");
console.log("7. на странице СV присутствует фото автора CV (+10);");
console.log("8. контакты для связи и перечень навыков оформлены в виде списка ul > li (+10);");
console.log("9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (+10);");
console.log("10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js (+10);");
console.log("11. CV содержит изображения-ссылки на выполненные вами проекты (0);");
console.log("12. CV выполнено на английском языке (+10);");
console.log("13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) (+10);");
console.log("14. есть видеорезюме автора CV на английском языке (0);");
console.log("15. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV (+10);");
console.log("Примерно 130 баллов");

