function calculateNumber(type, c, d) {
    const an = Math.round(c);
    const bn = Math.round(d);
    let e = 0;
    switch (type) {
    case 'SUM':
	e = an + bn;
	break;
    case 'SUBTRACT':
	e = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            e = "Error";
      } else {
            e = an / bn;
      }
      break;
    }
    return e;
}

module.exports = calculateNumber;
