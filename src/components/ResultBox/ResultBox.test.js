import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

        describe('Component ResultBox', () => {
            const testCases = [
                { from: 'PLN', to: 'USD', amount: 100, expectedText: 'PLN 100.00 = $28.57' },
                { from: 'PLN', to: 'USD', amount: 20, expectedText: 'PLN 20.00 = $5.71' },
                { from: 'PLN', to: 'USD', amount: 200, expectedText: 'PLN 200.00 = $57.14' },
                { from: 'PLN', to: 'USD', amount: 345, expectedText: 'PLN 345.00 = $98.57' }, 
                { from: 'USD', to: 'PLN', amount: 28.57, expectedText: '$28.57 = PLN 100.00' },
                { from: 'USD', to: 'PLN', amount: 57.14, expectedText: '$57.14 = PLN 199.99' },
                { from: 'USD', to: 'PLN', amount: 98.57, expectedText: '$98.57 = PLN 345.00' }, 
                { from: 'PLN', to: 'PLN', amount: 100, expectedText: 'PLN 100.00 = PLN 100.00' },
                { from: 'PLN', to: 'PLN', amount: 20, expectedText: 'PLN 20.00 = PLN 20.00' },
                { from: 'PLN', to: 'PLN', amount: 200, expectedText: 'PLN 200.00 = PLN 200.00' },
                { from: 'PLN', to: 'PLN', amount: 345, expectedText: 'PLN 345.00 = PLN 345.00' },
                { from: 'USD', to: 'USD', amount: 28.57, expectedText: '$28.57 = $28.57' },
                { from: 'USD', to: 'USD', amount: 57.14, expectedText: '$57.14 = $57.14' },
                { from: 'USD', to: 'USD', amount: 98.57, expectedText: '$98.57 = $98.57' }
            ];
          
            for (const testCase of testCases) {
              it(`should render proper info about conversion from ${testCase.from} to ${testCase.to} with amount ${testCase.amount}`, () => {
                // render component
                render(<ResultBox from={testCase.from} to={testCase.to} amount={testCase.amount} />);
          
                // find output elements
                const output = screen.getByTestId('output');
          
                // check if main div has a proper argument
                expect(output).toHaveTextContent(testCase.expectedText);

                // amount component
                cleanup();
              });
            };

            const negativeTestCases = [
                { from: 'PLN', to: 'USD', amount: -50, expectedText: 'Wrong value' },
                { from: 'USD', to: 'PLN', amount: -20, expectedText: 'Wrong value' },
                { from: 'PLN', to: 'USD', amount: -200, expectedText: 'Wrong value' },
            ];

            for (const testCase of negativeTestCases) {
                it(`should render "Wrong value" for negative amount (${testCase.amount})`, () => {
                    // render component
                    render(<ResultBox from={testCase.from} to={testCase.to} amount={testCase.amount} />);
            
                    // find output elements
                    const output = screen.getByTestId('output');
            
                    // check if main div has a proper argument
                    expect(output).toHaveTextContent(testCase.expectedText);
                });
            }

            // Cleanup after each test
            afterEach(() => {
                    cleanup();
            });
        });

            //render component
        //render(<ResultBox from="PLN" to="USD" amount={100} />);

        //find output elements
        //const output = screen.getByTestId('output');

        //check if main div has a proper argument
        //expect(output).toHaveTextContent('PLN 100.00 = $28.57'