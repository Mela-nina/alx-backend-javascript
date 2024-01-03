export default function iterateThroughObject(reportWithIterator) {
  let r = reportWithIterator.next();
  let res = '';

  while (!r.done) {
    res += `${r.value} | `;
    r = reportWithIterator.next();
  }
  return res.slice(0, res.length - 3);
}
