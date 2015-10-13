var context = require.context('./src', true, /.spec\.js$/);
context.keys().forEach(context);

var srcContext = require.context('./src', true, /\.js$/);
srcContext.keys().forEach(srcContext);
