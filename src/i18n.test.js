import React, { Component } from 'react'
import TestRenderer from 'react-test-renderer'
import I18n from './i18n'
import I18nContext from './i18n-context'

describe('I18n Provider', () => {
  const createChild = () => {
    class Child extends Component {
      render() {
        return <div />
      }
    }

    return Child
  }
  const Child = createChild()

  function getPolyglotFromRenderer(renderer) {
    const instance = renderer.root
    const children = instance.children
    const firstChild = children[0]
    const firstChildValueProps = firstChild.props.value
    const polyglot = firstChildValueProps._polyglot

    return polyglot
  }

  it('should update instance on receiving new props', () => {
    const props = {
      locale: 'en',
      messages: {
        test: 'test',
      },
    }

    const renderer = TestRenderer.create(
      <I18n {...props}>
        <I18nContext.Consumer>
          {value => {
            return <Child value={value} />
          }}
        </I18nContext.Consumer>
      </I18n>
    )

    const newProps = {
      locale: 'jp',
      messages: {
        test: 'test',
      },
    }

    renderer.update(
      <I18n {...newProps}>
        <I18nContext.Consumer>
          {value => {
            return <Child value={value} />
          }}
        </I18nContext.Consumer>
      </I18n>
    )

    const polyglot = getPolyglotFromRenderer(renderer)

    expect(polyglot.locale()).toBe('jp')
  })
})
