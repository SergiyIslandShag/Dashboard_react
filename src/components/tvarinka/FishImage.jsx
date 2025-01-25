import "./style.css";

function FishImage({ imageSrc, altText }) {
  return (
    <div className="fish-image">
      <img src={imageSrc} alt={altText} width="200" />
    </div>
  );
}

export default FishImage;
