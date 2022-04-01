type Props = {
  infoHeader?: string,
  infoBody: string
};

function CourseDuration({ infoHeader, infoBody }: Props) {
  const header = infoHeader?.split(',');
  const body = infoBody.split(',');

  return (
    <>
      <div>
        <tr>
          {
            header ?
              header.map((h) => {
                return (
                  <td>{h}</td>
                )
              })
              : <td></td>
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
    </>
  );
};

export default CourseDuration;