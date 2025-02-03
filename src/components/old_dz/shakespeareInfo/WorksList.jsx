import WorkItem from './WorkItem';
import './style.css';

function WorksList() {
  const works = [
    {
      title: 'Гамлет',
      year: 1600,
      description: 'Трагедія про принца Данії, який прагне помститися за смерть свого батька.'
    },
    {
      title: 'Ромео і Джульєтта',
      year: 1597,
      description: 'Меланхолійна комедія про двох закоханих, чиє кохання призводить до трагедії.'
    },
    {
      title: 'Макбет',
      year: 1606,
      description: 'Трагедія про шотландського короля, який через амбіції та жадобу влади скоює низку злочинів.'
    },
    {
      title: 'Король Лір',
      year: 1605,
      description: 'Трагедія про старого короля, який передає своє королівство своїм дочкам, що призводить до його падіння.'
    },
  ];

  function renderWorkItem(work, index) {
    return (
      <WorkItem 
        key={index} 
        title={work.title} 
        year={work.year} 
        description={work.description} 
      />
    );
  }

  return (
    <div className="works-list">
      <h2>Твори Шекспіра</h2>
      {works.map(renderWorkItem)}
    </div>
  );
}

export default WorksList;
