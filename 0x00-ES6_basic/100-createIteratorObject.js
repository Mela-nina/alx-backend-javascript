export default function createIteratorObject(report) {
  const all = Object.values(report.allEmployees).reduce((b, c) => {
    b.push(...c);
    return b;
  }, []);
  let currIndex = 0;
  const maxIndex = all.length;
  return {
    next() {
      if (currIndex < maxIndex) {
        const result = { value: all[currIndex], done: false };
        currIndex += 1;
        return result;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
