import "./style.css";

function WorkItem({ title, year, description }) {
    return (
      <div className="work-item">
        <h3>{title} ({year})</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default WorkItem;