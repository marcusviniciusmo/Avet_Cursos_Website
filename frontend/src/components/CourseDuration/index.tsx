import { ICourseDuration } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function CourseDuration({ infoHeader, infoBody }: ICourseDuration) {
  const durationCardWidth = 400;

  const header = infoHeader?.split(',');
  const body = infoBody.split(',');

  return (
    <div id="courseDurationContainer">
      <tr>
        {
          header ?
            header.map((h) => {
              return (
                <td
                  id='durationInfoHeader'
                  style={{ width: (durationCardWidth / header.length) }}
                >
                  {ToUpperCaseText(h)}
                </td>
              )
            })
            : <td id='courseDurationInfoNull' />
        }
      </tr>
      <tr>
        {
          body.map((b) => {
            return (
              <td
                id='durationInfoBody'
                style={{ width: (durationCardWidth / body.length) }}
              >
                {b}
              </td>
            )
          })
        }
      </tr>
    </div>
  );
};

export default CourseDuration;