import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TestRenderer from 'react-test-renderer'
import I18n from './i18n'

describe('I18n Provider', () => {
  const createChild = () => {
    class Child extends Component {
      render() {
        return <div />
      }
    }

    Child.contextTypes = {
      t: PropTypes.func.isRequired,
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

  it('should force single child', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      expect(() =>
        TestRenderer.create(
          <I18n {...props}>
            <div />
          </I18n>
        )
      ).not.toThrow()

      expect(() => TestRenderer.create(<I18n {...props} />)).toThrow(
        /a single React element child/
      )

      expect(() =>
        TestRenderer.create(
          <I18n {...props}>
            <div />
            <div />
          </I18n>
        )
      ).toThrow(/a single React element child/)
    } finally {
      spy.mockRestore()
    }
  })

  it('should add polyglot instance to the context', () => {
    const renderer = TestRenderer.create(
      <I18n {...props}>
        <Child />
      </I18n>
    )

    const instance = renderer.root.instance
    const child = renderer.root.findByType(Child).instance
    const t = child.context.t

    expect(instance._polyglot.locale()).toBe(props.locale)

    expect(t).toBeDefined()
    expect(t('test')).toBe(props.messages.test)
  })

  it('should update instance on receiving new props', () => {
    const renderer = TestRenderer.create(
      <I18n {...props}>
        <Child />
      </I18n>
    )

    const instance = renderer.root.instance
    const child = renderer.root.findByType(Child).instance
    const t = child.context.t

    instance.componentWillReceiveProps({
      locale: 'jp',
      messages: {
        test: 'Testo',
      },
    })

    expect(instance._polyglot.locale()).toBe('jp')
    expect(t('test')).toBe('Testo')
  })
})
