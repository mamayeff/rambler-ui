import examplesCode from '!!raw!./examples.js'
import examplesCodeRouter from '!!raw!./examples-react-router.js'
import code from '!!raw!../Button.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Button'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesCodeRouter} canEdit={false} showPreview={false} title="Пример использования с react-router" />
    <PropTypesTable code={code} />
  </div>
)
