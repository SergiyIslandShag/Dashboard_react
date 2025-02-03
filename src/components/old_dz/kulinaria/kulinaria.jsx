import "./style.css";

export function Recipe() {
    return (
        <div className="recipe-container">
            <h1 className="recipe-title">Борщ</h1>
            <img
                src="https://images.unian.net/photos/2020_04/thumb_files/1200_0_1588081977-7108.jpg"
                alt="Борщ"
                className="recipe-image"
            />
            <h2 className="recipe-section-title">Інгредієнти:</h2>
            <ul className="recipe-ingredients">
                <li>Картопля — 4 шт.</li>
                <li>Буряк — 2 шт.</li>
                <li>Морква — 1 шт.</li>
                <li>Цибуля — 1 шт.</li>
                <li>Томатна паста — 2 ст. ложки</li>
                <li>Квашена капуста — 200 г</li>
                <li>М'ясо (свинина або яловичина) — 300 г</li>
                <li>Часник — 2-3 зубчики</li>
                <li>Олія — 2 ст. ложки</li>
                <li>Сіль, перець, лавровий лист — за смаком</li>
                <li>Вода — 2 л</li>
            </ul>

            <h2 className="recipe-section-title">Інструкція:</h2>
            <ol className="recipe-instructions">
                <li>Порізати м'ясо на шматочки та відварити до готовності.</li>
                <li>Нарізати картоплю, буряк, моркву і цибулю.</li>
                <li>На олії обсмажити цибулю та моркву до золотистого кольору, додати томатну пасту.</li>
                <li>Додати буряк до каструлі з овочами, влити воду і довести до кипіння.</li>
                <li>Додати варене м'ясо, картоплю і квашену капусту. Варити до м'якості картоплі.</li>
                <li>Додати часник, сіль, перець і лавровий лист. Варити ще 5-10 хвилин.</li>
                <li>Подавайте борщ гарячим, додавши сметану та зелень.</li>
            </ol>
        </div>
    );
}