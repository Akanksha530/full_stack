const math=require('./math.js')

console.log(math.add(2,5));


console.log('Inside math.js')

require('./math.js');
require('./class.js');
require('./test.js');
