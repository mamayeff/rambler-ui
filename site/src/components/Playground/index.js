/*
  eslint
  no-new-func: ['off']
 */
/**
 * Плейграунд
 */
import React, { PropTypes, Component } from 'react'
import { render } from 'react/lib/ReactDOM'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import { debounce } from 'core-decorators'
import classnames from 'classnames'
import pure from 'recompose/pure'
import _, { get, compact } from 'lodash'
import css from './index.css'
import * as rui from '../../../../src'
import hljs from 'highlight.js'
import { transform } from 'babel-standalone'
import 'highlight.js/styles/default.css'
import 'codemirror/lib/codemirror.css'

const availableModules = {
  react: React,
  lodash: _
}
const LIB_NAME = 'rambler-ui'

@pure
export default class Playground extends Component {

  static propTypes = {
    /**
     * Код для отображения
     */
    code: PropTypes.string.isRequired,
    /**
     * Можно редактировать код
     */
    canEdit: PropTypes.bool,
    /**
     * Показывать превью
     */
    showPreview: PropTypes.bool,
    /**
     * Открытая вкладка
     */
    mode: PropTypes.string,
    /**
     * Заголовок
     */
    title: PropTypes.string
  }

  static defaultProps = {
    canEdit: true,
    showPreview: true,
    mode: 'read',
    title: 'Пример'
  }

  state = {
    mode: 'read' // read or write
  }

  componentWillMount() {
    const { code, canEdit } = this.props
    let mode = this.props.mode
    if (!canEdit)
      mode = 'read'
    this.setState({ code, mode })
    this.initialCode = code
  }

  componentDidMount() {
    this.props.showPreview && this.renderPreview()
  }

  componentDidUpdate() {
    this.props.showPreview && this.renderPreview()
  }

  setMode(mode) {
    this.setState({ mode })
    if (mode === 'read')
      this.setState({ code: this.initialCode })
  }

  @debounce(1e3)
  onCodeChange(code) {
    this.setState({ code })
  }

  renderPreview() {
    const { code } = this.state
    let ResComponent = null

    try {
      const resCode = transform(code, { presets: ['es2015', 'stage-0', 'stage-1', 'stage-2', 'react'] }).code
      const resModule = new Function('module', 'exports', 'require', resCode)

      const scopeModule = { exports: {} }
      const scopeRequire = function (moduleName) {
        if (moduleName.indexOf(LIB_NAME) === 0 && moduleName.indexOf('/') !== -1)
          return get(rui, compact(moduleName.replace(LIB_NAME, '').split('/')).join('.'))
        else if (moduleName === LIB_NAME)
          return rui
        else if (availableModules[moduleName])
          return availableModules[moduleName]
        throw new Error(`Module ${moduleName} is not defined`)
      }
      resModule(scopeModule, scopeModule.exports, scopeRequire)
      ResComponent = scopeModule.exports.default
      render(
        ResComponent && <ResComponent />,
        this.refs.preview
      )
    } catch (e) {
      render(
        <pre className={ css.Preview__error }>{ e.toString() }</pre>,
        this.refs.preview
      )
    }
  }

  render() {
    const { code, mode } = this.state
    const { canEdit, title } = this.props
    const codeElement = mode === 'read' ?
      <pre className={css.Code__pre} dangerouslySetInnerHTML={{ __html: hljs.highlight('javascript', code).value }}/> :
      <Codemirror
        options={{ mode: 'javascript', scrollbarStyle: null }}
        onChange={ ::this.onCodeChange }
        autoSave={ true }
        value={ code }
        />

    return (
      <div className={ css.Wrapper }>
        <div className={ css.Header }>
          <div className={ css.Header__title }>{ title }</div>
          <div className={ css.Header__tabs }>
            {
              canEdit && <div
                onClick={() => this.setMode('write')}
                className={ classnames(css.Header__tab, { [css['is-active']]: mode === 'write' }) }>Редактировать</div>
            }
            <div
              onClick={() => this.setMode('read')}
              className={ classnames(css.Header__tab, { [css['is-active']]: mode === 'read' }) }>Код</div>
          </div>
        </div>
        <div className={ css.Body }>
          <div className={ css.Code }>
            { codeElement }
          </div>
          { this.props.showPreview && <div className={ css.Preview } ref="preview"></div> }
        </div>
      </div>
    )
  }

}