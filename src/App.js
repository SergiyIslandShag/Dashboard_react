import './App.css';
import { GurtInfo } from "./components/gurt/gurtInfo";
import { Recipe } from "./components/kulinaria/kulinaria";
import ShakespeareInfo from './components/shakespeareInfo/ShakespeareInfo';
import WorksList from './components/shakespeareInfo/WorksList';
import MovieInfo from './components/movieInfo/MovieInfo';
import Clock from './components/clock/Clock';
import FishImage from './components/tvarinka/FishImage';
import FishInfo from './components/tvarinka/FishInfo';
import RestaurantInfo from './components/restarauntInfo/RestaurantCard'
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <div className="text-content">
        <h1 className="Name">Think and be rich</h1>
        <h1>Author: Napoleon Gill</h1>
        <h1>Genre: Self-development</h1>
        <h1>First published: 1937</h1>
        <h1>Pages: 264</h1>
        <p>
          The Think and Grow Rich Action Pack is a non-fiction book by self-help author Napoleon Gill. First published in 1937.
          According to Gill's official biographers, in the first fifty years after the release of "Think and Grow Rich", its total circulation was 20 million copies[1].
          In 2017, it was translated into Ukrainian by the publishing house "Nash Format" (translator - Hanna Kiriyenko) and the publishing house
          "Club of Family Leisure" (translator - Marta Sahno).
        </p>
        <p>
          "Think and be rich" is based on the materials of the previous book by N. Hill's "Law of Success[en]".
          In the book "Think and Grow Rich",
          Gill claims that Andrew Carnegie personally revealed to him the secret of wealth in 1908, after which Gill for 25 years carefully studied
          the experiences of 25,000 people, including the five hundred richest Americans. However, there are no materials that would confirm the fact of the meeting and the existence of such a study [2].
          There are also reasons to believe that one person would not be able to carry out such a large-scale project alone.
        </p>
        <p>
          John Rockefeller, Andrew Carnegie, and Henry Ford, whom Gill cited as his sources, wrote their own
          books and articles expressing ideas that contradicted the ideas presented in Gill's books. Unlike Gill, who wrote that wealth requires little or no hard work, Carnegie,
          Rockefeller, and Ford repeatedly argued that getting rich is hard, requires a lot of work, and that self-deception about one's financial affairs is harmful.
        </p>
        <p>
          Although Gill cites Andrew Carnegie as his primary source, the book contains a number of factual errors regarding Carnegie's biography and views.
          In particular, Gill writes that Carnegie began as a simple worker in a steel factory and earned a fortune of more than three hundred million dollars[7].
          In fact, Carnegie started working at the age of 13 in a cotton factory, and his fortune really exceeded 300 million dollars.
        </p>
      </div>
      <div className="image-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/uk/9/9d/%D0%94%D1%83%D0%BC%D0%B0%D0%B9_%D1%96_%D0%B1%D0%B0%D0%B3%D0%B0%D1%82%D1%96%D0%B9_-_%D0%BE%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%B4%D1%83_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8.png"
          alt="img"
        />
      </div> */}

      {/* <div>
        <GurtInfo />
      </div> */}

      {/* <div>
        <Recipe/>
      </div> */}

      {/* <div className="app-container">
        <ShakespeareInfo />
        <WorksList />
      </div> */}

      {/* <div className="app-container">
        <MovieInfo />
      </div> */}

      {/* <div className="App">
        <h1>Поточний час:</h1>
        <Clock />
      </div> */}

      {/* <div>
        <RestaurantInfo
          name="Kinza"
          address="вулиця Кулика і Гудачека, 60, Рівне, Рівненська область, 33000"
          rating={4.7}
          cuisineType="Кавказька кухня"
          imageUrl="https://eu-central-1.linodeobjects.com/list/production/183454/logo/big/65ec3ae89d733.png"
        />
      </div> */}

      {/* <div>
        <h1>Лічильник натискань</h1>
        <Counter />
      </div> */}
    </div>

  );
}

// function App() {
//   const fish1 = {
//     name: "Фішка",
//     species: "Золота рибка",
//     age: 1,
//     favoriteFood: "Корми для рибок",
//     imageSrc: "https://blog.tetra.net/uk-ua/wp-content/uploads/2020/12/zolota-rybka.jpg"
//   };

//   const fish2 = {
//     name: "Малишка",
//     species: "Золота рибка",
//     age: 1,
//     favoriteFood: "Корми для рибок",
//     imageSrc: "https://korm.com.ua/images/companies/1/blog/2016-08-19/1_3.jpg"
//   };

//   return (
//     <div className="App">
//       <h1>Інформація про наших домашніх улюбленців</h1>
//       <div className="fish-container">
//         <div className="fish">
//           <FishImage imageSrc={fish1.imageSrc} altText={fish1.name} />
//           <FishInfo
//             name={fish1.name}
//             species={fish1.species}
//             age={fish1.age}
//             favoriteFood={fish1.favoriteFood}
//           />
//         </div>
//         <div className="fish">
//           <FishImage imageSrc={fish2.imageSrc} altText={fish2.name} />
//           <FishInfo
//             name={fish2.name}
//             species={fish2.species}
//             age={fish2.age}
//             favoriteFood={fish2.favoriteFood}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
