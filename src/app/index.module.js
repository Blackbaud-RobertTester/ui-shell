import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
/*eslint-disable no-unused-vars*/
import { mainModule } from './domain1/main.module'
/*eslint-enable no-unused-vars*/

angular.module('uiShell', ['restangular', 'ui.router', 'uiShell.main', 'sky'])
    .config(config)
    .config(routerConfig)
    .run(runBlock);



