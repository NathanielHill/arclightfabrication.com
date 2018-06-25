/* global test, expect */
import './../mocks/matchMedia.mock'
import { Link } from './../../src/lib/components'
import React from 'react'
import renderer from 'react-test-renderer'

test('Link renders', () => {
  const component = renderer.create(
    <Link href=''><a>anchor text</a></Link>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
