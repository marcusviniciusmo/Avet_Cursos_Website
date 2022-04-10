function PhotoGallery() {
  const pictures = [
    {
      id: 'photo01',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 01'
    },
    {
      id: 'photo02',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 02'
    },
    {
      id: 'photo03',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 03'
    },
    {
      id: 'photo04',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 04'
    },
    {
      id: 'photo05',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 05'
    },
    {
      id: 'photo06',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 06'
    },
    {
      id: 'photo07',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 07'
    },
    {
      id: 'photo08',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 08'
    },
    {
      id: 'photo09',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 09'
    },
    {
      id: 'photo10',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 10'
    },
    {
      id: 'photo11',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 11'
    },
    {
      id: 'photo12',
      imageUrl: '',
      imageDescription: 'Galeria Avet - Foto 12'
    }];

  return (
    <>
      <ul>
        {
          pictures.map((picture) => {
            return (
              <li id={picture.id}>
                <span>{picture.imageDescription}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default PhotoGallery;