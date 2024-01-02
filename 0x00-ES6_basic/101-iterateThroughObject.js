/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
   let itemstr = '', j = 0;
   for (const item of reportWithIterator) {
        if (reportWithIterator.length - 1 == j) {
            itemstr += item
        }
        else {
            itemstr += item + ' | ';
        }
        j++;
   }
   return itemstr;
}
