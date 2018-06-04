/* global test, expect */

import { Link } from './Primitives'
import React from 'react'
import renderer from 'react-test-renderer'

test('Link renders', () => {
  const component = renderer.create(
    <Link href=''><a>anchor text</a></Link>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
