type Props = {
  id: string,
  serviceList: string
};

function ServiceListing({ id, serviceList }: Props) {
  const services = serviceList.split(',');

  return (
    <>
      <div id={id}>
        <ul>
          {
            services.map((service) => {
              return (
                <li>{service}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
};

export default ServiceListing;