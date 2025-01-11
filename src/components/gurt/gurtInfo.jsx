import "./style.css";

export function GurtInfo() {
    return (
        <div className="gurt-container">
            <h1 className="gurt-title">Жадан і Собаки</h1>
            <p className="gurt-description">
                «Жадан і Собаки» — український музичний гурт, що поєднує панк, рок та альтернативу. Їхня музика насичена соціальними і культурними темами, а текстами керує поетична майстерність Сергія Жадана.
            </p>
            <h2 className="gurt-section-title">Members:</h2>
            <ul className="gurt-members">
                <li>Сергій Жадан — вокал, тексти</li>
                <li>Ігор Костюк — гітара</li>
                <li>Олександр Кузьменко — бас-гітара</li>
                <li>Олег Якимчук — барабани</li>
            </ul>
            <h2 className="gurt-section-title">Albums:</h2>
            <div className="gurt-albums">
                <div className="album">
                    <p className="album-name">Радіопромінь (2023)</p>
                </div>
                <div className="album">
                    <p className="album-name">Мадонна (2019)</p>
                </div>
                <div className="album">
                    <p className="album-name">Пси (2016)</p>
                </div>
                <div className="album">
                    <p className="album-name">Зброя пролетаріату (2012)</p>
                </div>
                <div className="album">
                    <p className="album-name">Бийся за неї (2014)</p>
                </div>
                <div className="album">
                    <p className="album-name">Спортивний клуб армії (2008)</p>
                </div>
            </div>
        </div>
    );
}
