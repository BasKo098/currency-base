import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox',() => {
    it('should render proper info about conversion when PLN -> USD', () => {
        
    //render component
    render(<ResultBox from="PLN" to="USD" amount={100} />);

    //find output elements
    const output = screen.getByTestId('output');

    //check if main div has a proper argument
    expect(output).toHaveTextContent('PLN 100.00 = $28.57');
  });
});