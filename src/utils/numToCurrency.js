module.exports = function (source,type="$") {
    return (source*1).toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ",").replace(/^/, type)
  };
  