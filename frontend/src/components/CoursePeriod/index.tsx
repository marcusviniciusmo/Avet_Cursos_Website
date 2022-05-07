import { ICoursePeriod } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import {
  PeriodCardWidth,
  CardLabelHeader,
  CardLabelFooter
} from 'utils/Mocks/CoursePeriod';
import './styles.css';

function CoursePeriod({ infoHeader, infoBody }: ICoursePeriod) {
  const header = infoHeader.split(',');
  const body = infoBody.split(',');

  return (
    <div id="coursePeriodContainer">
      <div id='periodLabel'>
        <span>{ToUpperCaseText(CardLabelHeader)}</span>
      </div>
      <div id='coursePeriodInfo'>
        <tr>
          {
            header.map((h) => {
              return (
                <td
                  id='periodInfoHeader'
                  style={{ width: (PeriodCardWidth / header.length) }}
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
                  style={{ width: (PeriodCardWidth / body.length) }}
                >
                  {b}
                </td>
              )
            })
          }
        </tr>
      </div>
      <div id='gradeCurricularLabel'>
        <span>{ToUpperCaseText(CardLabelFooter)}</span>
      </div>
    </div>
  );
};

export default CoursePeriod;