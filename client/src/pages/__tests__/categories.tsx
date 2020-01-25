import React from 'react';

import {
  renderApollo,
  cleanup,
  waitForElement
} from '../../test-utils';
import Categories, { CATEGORIES } from '../categories';

describe('Categories Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders categories page', async () => {
    renderApollo(<Categories />);
  });
});
