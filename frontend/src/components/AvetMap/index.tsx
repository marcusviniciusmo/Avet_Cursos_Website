function AvetMap() {
  const avetMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.
  9857259719547!2d-47.04849888534085!3d-22.876985685026998!2m3!1f0!2f0!3f0!
  3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5f03395a665%3A0x90fcade741a69188!2sR.
  %20Vital%20Brasil%2C%20302%20-%20Jardim%20Bela%20Vista%2C%20Campinas%20-
  %20SP%2C%2013076-415%2C%20Brasil!5e0!3m2!1spt-BR!2sie!4v1650297558150!5m2!1spt
  -BR!2sie`;

  return (
    <>
      <iframe
        title="AvetMap"
        src={avetMapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default AvetMap;