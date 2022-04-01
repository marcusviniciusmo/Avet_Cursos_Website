type Props = {
  infoHeader: string,
  infoBody: string
};

function CoursePeriod({ infoHeader, infoBody }: Props) {
  const header = infoHeader.split(',');
  const body = infoBody.split(',');

  return (
    <>
      <h4>Período</h4>
      <div>
        <tr>
          {
            header.map((h) => {
              return (
                <td>{h}</td>
              )
            })
          }
        </tr>
        <tr>
          {
            body.map((b) => {
              return (
                <td>{b}</td>
              )
            })
          }
        </tr>
      </div>
      <h4>Grade Currícular</h4>
    </>
  );
};

export default CoursePeriod;