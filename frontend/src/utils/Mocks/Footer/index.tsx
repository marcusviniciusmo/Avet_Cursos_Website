import { IFooter } from 'utils/Types';
import { GetCurrentYear } from 'utils/Functions';
import { faDog } from '@fortawesome/free-solid-svg-icons';

export const Footer: IFooter = {
  copyrightSymbol: '\u00a9',
  getYear: GetCurrentYear,
  text: `Avet Cursos. Todos os direitos reservados.`,
  iconFontAwesome: faDog
};