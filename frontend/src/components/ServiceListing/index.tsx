import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

type Props = {
  id: string,
  serviceList: string
};

function ServiceListing({ id, serviceList }: Props) {
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