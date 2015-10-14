var context = require.context('./test', true, /\.js$/);
context.keys().forEach(context);

var srcContext = require.context('./src', true, /\.js$/);
srcContext.keys().forEach(srcContext);
