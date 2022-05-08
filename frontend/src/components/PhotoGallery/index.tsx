import { useState } from 'react';
import { Pictures } from 'utils/Mocks/PhotoGallery';
import { IPhotoGallery } from 'utils/Types';
import CloseIcon from '@mui/icons-material/Close';
import './styles.css';

function PhotoGallery() {
  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState<IPhotoGallery>({
    id: '',
    content: {
      url: '',
      description: ''
    }
  });

  const getImage = (picutre: IPhotoGallery) => {
    setTempImage(picutre);
    setModel(true);
  };

  return (
    <div id='photoGalleryContainer'>
      <div className={model ? 'model open' : 'model'}>
        <span>{tempImage.content.description}</span>

        <img
          src={tempImage.content.url}
          alt={tempImage.content.description} />

        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <ul id='photoGalleryList'>
        {
          Pictures.map((picture) => {
            return (
              <li
                id={picture.id}
                onClick={() => getImage(picture)}
              >
                <span>{picture.content.description}</span>
              </li>
            )
          })
        }
      </ul>
    </div>

  );
};

export default PhotoGallery;