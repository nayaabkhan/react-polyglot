import React from 'react'
import TestRenderer from 'react-test-renderer'

import I18n from './i18n'
import translate from './translate'

// eslint-disable-next-line
const Consumer = ({ n, t }) => <div>{`${t('test')} ${n}`}</div>
const Child = translate()(Consumer)

const createRenderer = () =>
  TestRenderer.create(
    <I18n locale="en" messages={{ test: 'test' }}>
      <Child n="123" />
    </I18n>
  )

const updateRenderer = (
  renderer,
  { locale = 'en', messages, forceReInit = false }
) => {
  renderer.update(
    <I18n locale={locale} messages={messages} forceReInit={forceReInit}>
      <Child n="123" />
    </I18n>
  )
}

describe('translate', () => {
  it('should update text when locale changes', () => {
    const renderer = createRenderer()
    expect(renderer.toJSON().children[0]).toEqual('test 123')

    updateRenderer(renderer, { locale: 'jp', messages: { test: 'testo' } })
    expect(renderer.toJSON().children[0]).toEqual('testo 123')
  })

  it('should not update text when only message changes', () => {
    const renderer = createRenderer()
    updateRenderer(renderer, { messages: { test: 'testing' } })

    expect(renderer.toJSON().children[0]).toEqual('test 123')
  })

  it('should update text when message changes and forceReInit is true', () => {
    const renderer = createRenderer()
    updateRenderer(renderer, {
      messages: { test: 'testing' },
      forceReInit: true,
    })

    expect(renderer.toJSON().children[0]).toEqual('testing 123')
  })
})
