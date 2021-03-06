import examplesCode from '!!raw!./examples.js'
import codeSearch from '!!raw!../ComplexSearch'
import codeItem from '!!raw!../SuggestItem'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'ComplexSearch'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeSearch} header="### Свойства `<ComplexSearch/>`" />
    <PropTypesTable code={codeItem} header="### Свойства `<SuggestItem/>`" />
  </div>
)
