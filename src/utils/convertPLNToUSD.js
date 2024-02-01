export const convertPLNToUSD = (PLN = 0) => {
  if (typeof PLN === 'string' || (typeof PLN === 'number' && isNaN(PLN)) || PLN === 0)
  return NaN;
  
  if (PLN === null && typeof PLN !== 'number' || typeof PLN === 'function' || (typeof PLN === 'object' && Object.values(PLN).length === 0))
    return 'Error';

  if (PLN < 0)
  return '$0.00'

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}