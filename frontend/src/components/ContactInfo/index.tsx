import { ContactInfos } from 'utils/Mocks/ContactInfo';
import './styles.css';

function ContactInfo() {
  const getComponent = (Element: any) => {
    return <Element />
  };

  return (
    <div id='contactInfoContainer'>
      {
        ContactInfos.map((info) => {
          return (
            <div className='contactInfoRow'>
              {getComponent(info.icon)}
              <span>
                {info.label1}
                {
                  info.label2
                    ? <>
                        <br />{info.label2}
                      </>
                    : ''
                }
              </span>
            </div>
          )
        })
      }
    </div>
  );
};

export default ContactInfo;