import { fetchCountries } from '../covid-api/data';
import { fireEvent, render } from '@testing-library/react';
import DropDownList from './DropDownList';
import React from 'react';
import * as api from '../covid-api/data';
import { waitFor } from '@babel/core/lib/gensync-utils/async';

describe('DropDownList', () => {
  it('should render elements', async () => {
    jest.spyOn(api, 'fetchCountries').mockResolvedValueOnce(['Australia']);
    const { findByText } = render(
      <DropDownList handleCountryChange={jest.fn()} />
    );

    const australia = await findByText(/Australia/);

    await waitFor(() => {
      expect(australia).toBeInTheDocument();
    });
  });
});

describe('DropDownList', () => {
  it('should render elements', async () => {
    const mockCountry = 'Australia';
    jest.spyOn(api, 'fetchCountries').mockResolvedValueOnce([mockCountry]);
    const handleCountryChange = jest.fn();

    const { findByLabelText } = render(
      <DropDownList handleCountryChange={handleCountryChange} />
    );

    const poland = await findByLabelText(/select/);
    fireEvent.change(poland, { target: { value: mockCountry } });

    expect(handleCountryChange).toBeCalledWith(mockCountry);
  });
});
