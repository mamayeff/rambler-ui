import React from 'react'
import classnames from 'classnames'
import {ApplyTheme, injectSheet, createJss, createSheetsRegistry, createGenerateClassName} from '../'
import {mount, getNodeStyles} from '../../utils/test-utils'
import {normalize as nc} from '../../utils/colors'

const getTheme = color => ({button: {color}})

const Button = injectSheet(({button}) => ({button}))(
  function Button ({classes, className}) {
    return (
      <button className={classnames(classes.button,  className)} />
    )
  }
)

describe('<ApplyTheme />', () => {

  it('should pass theme', () => {
    mount(
      <ApplyTheme theme={getTheme('#ffffff')}>
        <Button className='apply-theme' />
      </ApplyTheme>
    )

    const button = document.querySelector('.apply-theme')
    expect(getNodeStyles(button).color).toBe(nc('#ffffff'))
  })

  it('should merge nested theme', () => {
    mount(
      <ApplyTheme theme={getTheme('#ffffff')}>
        <div>
          <Button className='apply-nested' />
          <ApplyTheme theme={getTheme('#000000')}>
            <Button className='apply-nested' />
          </ApplyTheme>
        </div>
      </ApplyTheme>
    )

    const buttons = document.querySelectorAll('.apply-nested')
    expect(getNodeStyles(buttons[0]).color).toBe(nc('#ffffff'))
    expect(getNodeStyles(buttons[1]).color).toBe(nc('#000000'))
    expect(buttons[0].className).not.toBe(buttons[1].className)
  })

  it('should isolate multiple providers', () => {
    mount(
      <div>
        <ApplyTheme theme={getTheme('#ffffff')}>
          <Button className='apply-isolate' />
        </ApplyTheme>
        <ApplyTheme theme={getTheme('#000000')}>
          <Button className='apply-isolate' />
        </ApplyTheme>
      </div>
    )

    const buttons = document.querySelectorAll('.apply-isolate')
    expect(getNodeStyles(buttons[0]).color).toBe(nc('#ffffff'))
    expect(getNodeStyles(buttons[1]).color).toBe(nc('#000000'))
    expect(buttons[0].className).not.toBe(buttons[1].className)
  })

  it('should use custom jss, sheets registry', () => {
    const jss = createJss()
    const sheetsRegistry = createSheetsRegistry()

    mount(
      <ApplyTheme
        theme={getTheme('#ffffff')}
        jss={jss}
        sheetsRegistry={sheetsRegistry}>
        <div>
          <Button />
          <ApplyTheme theme={getTheme('#000000')}>
            <Button />
          </ApplyTheme>
        </div>
      </ApplyTheme>
    )

    const classPrefix = sheetsRegistry.registry[0].classes.button.slice(0, -2)

    expect(sheetsRegistry.toString()).toBe(
      `.${classPrefix}-1 {\n` +
      '  color: #ffffff;\n' +
      '}\n' +
      `.${classPrefix}-2 {\n` +
      '  color: #000000;\n' +
      '}'
    )
  })

  it('should use multiple custom jss, sheets registry', () => {
    const generateClassName = createGenerateClassName()
    const jss = createJss()
    const sheetsRegistry = createSheetsRegistry()
    const nestedJss = createJss()
    const nestedSheetsRegistry = createSheetsRegistry()
    const separateJss = createJss()
    const separateSheetsRegistry = createSheetsRegistry()

    mount(
      <div>
        <ApplyTheme
          theme={getTheme('#ffffff')}
          jss={jss}
          sheetsRegistry={sheetsRegistry}
          generateClassName={generateClassName}>
          <div>
            <Button />
            <ApplyTheme
              theme={getTheme('#000000')}
              jss={nestedJss}
              sheetsRegistry={nestedSheetsRegistry}>
              <Button />
            </ApplyTheme>
          </div>
        </ApplyTheme>
        <ApplyTheme
          theme={getTheme('#777777')}
          jss={separateJss}
          sheetsRegistry={separateSheetsRegistry}
          generateClassName={generateClassName}>
          <Button />
        </ApplyTheme>
      </div>
    )

    const classPrefix = sheetsRegistry.registry[0].classes.button.slice(0, -2)
    const nestedClassPrefix = nestedSheetsRegistry.registry[0].classes.button.slice(0, -2)
    const separateClassPrefix = separateSheetsRegistry.registry[0].classes.button.slice(0, -2)

    expect(sheetsRegistry.toString()).toBe(
      `.${classPrefix}-1 {\n` +
      '  color: #ffffff;\n' +
      '}'
    )

    expect(nestedSheetsRegistry.toString()).toBe(
      `.${nestedClassPrefix}-2 {\n` +
      '  color: #000000;\n' +
      '}'
    )

    expect(separateSheetsRegistry.toString()).toBe(
      `.${separateClassPrefix}-3 {\n` +
      '  color: #777777;\n' +
      '}'
    )
  })
})