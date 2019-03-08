import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import ApiDarkSky from '../ApiDarkSky';

describe('ApiDarkSky', () => {
  test('data is returned from Dark Sky', () => {
    return ApiDarkSky.getCurrentWeather().then(data => {
      expect(data).toContain('latitude');
    });
  });
})
