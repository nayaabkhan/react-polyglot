import React from 'react'
import TestRenderer from 'react-test-renderer'
import I18n from './i18n'

describe('I18n Provider', () => {
  const Child = () => <div />

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

    const newProps = {
      locale: 'jp',
      messages: {
        test: 'Testo',
      },
    }

    renderer.update(
      <I18n {...newProps}>
        <Child />
      </I18n>
    )

    const instance = renderer.getInstance()
    expect(instance._polyglot.locale()).toBe('jp')
  })
})
