
import image_bienveillante from "/public/image/image_bienveillante.jpg";
import "./image.css";

export default function Image() {
  return (
    <img
      className="image-bienveillante"
      src={image_bienveillante}
      alt="element of nature and in the first plan we have the lac of wather and next in the right and left we have the moutains and in the plan we have always the mountains "
    />
  );
}
