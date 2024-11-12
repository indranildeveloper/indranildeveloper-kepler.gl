// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import test from 'tape';
import {errorNotification, successNotification} from '@indranil-kepler.gl/utils';

test('#notificationsUtils -> errorNotification', t => {
  const notification = errorNotification({message: 'test', id: 'test-1'});

  t.deepEqual(
    notification,
    {
      id: 'test-1',
      message: 'test',
      type: 'error',
      topic: 'global',
      count: 1
    },
    'ErrorNotification creates an error notification'
  );

  t.end();
});

test('#notificationsUtils -> successNotification', t => {
  const notification = successNotification({message: 'test', id: 'test-1'});

  t.deepEqual(
    notification,
    {
      id: 'test-1',
      message: 'test',
      type: 'success',
      topic: 'global',
      count: 1
    },
    'SuccessNotification creates an error notification'
  );

  t.end();
});
