import { ICoursePeriod } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function CoursePeriod({ infoHeader, infoBody }: ICoursePeriod) {
  const periodCardWidth = 405;

  const header = infoHeader.split(',');
  const body = infoBody.split(',');

  return (
    <div id="coursePeriodContainer">
      <div id='periodLabel'>
        <span>{ToUpperCaseText('Período')}</span>
      </div>
      <div id='coursePeriodInfo'>
        <tr>
          {
            header.map((h) => {
              return (
                <td
                  id='periodInfoHeader'
                  style={{ width: (periodCardWidth / header.length) }}
                >
                  {ToUpperCaseText(h)}
                </td>
              )
            })
          }
        </tr>
        <tr>
          {
            body.map((b) => {
              return (
                <td
                  id='periodInfoBody'
                  style={{ width: (periodCardWidth / body.length) }}
                >
                  {b}
                </td>
              )
            })
          }
        </tr>
      </div>
      <div id='gradeCurricularLabel'>
        <span>{ToUpperCaseText('Grade Currícular')}</span>
      </div>
    </div>
  );
};

export default CoursePeriod;