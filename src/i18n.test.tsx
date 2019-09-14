import React, { Component } from 'react'
import TestRenderer from 'react-test-renderer'
import I18n from './i18n'

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

  const props = {
    locale: 'en',
    messages: {
      test: 'test',
    },
  }

  it('should update instance on receiving new props', () => {
    const renderer = TestRenderer.create(
      <I18n {...props}>
        <Child />
      </I18n>
    )

    const instance = renderer.root.instance

    instance.componentWillReceiveProps({
      locale: 'jp',
      messages: {
        test: 'Testo',
      },
    })

    expect(instance._polyglot.locale()).toBe('jp')
  })
})
