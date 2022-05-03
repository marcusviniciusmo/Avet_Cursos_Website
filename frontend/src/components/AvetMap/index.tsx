import { AvetMapUrl } from 'utils/Mocks/AvetMap';
import './styles.css';

function AvetMap() {
  return (
    <div id={AvetMapUrl.mapId}>
      <iframe
        title="AvetMap"
        src={AvetMapUrl.mapUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default AvetMap;