import { IServiceListing } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function ServiceListing({ id, serviceList }: IServiceListing) {
  const services = serviceList.split(',');

  return (
    <div id={id}>
      <ul>
        {
          services.map((service) => {
            return (
              <li>{ToUpperCaseText(service)}</li>
            )
          })
        }
      </ul>
    </div>

  );
};

export default ServiceListing;