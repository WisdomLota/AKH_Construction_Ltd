// Utility function to format price
const formatPrice = (price) => {
    const numPrice = parseInt(price, 10);
    if (numPrice >= 1000000) {
      return (numPrice / 1000000).toFixed(1) + 'M'; // e.g., 1.3M
    } else if (numPrice >= 1000) {
      return Math.round(numPrice / 1000) + 'K'; // e.g., 100K
    }
    return numPrice.toString(); // Return as is for values below 1000
  };

  export { formatPrice };
  