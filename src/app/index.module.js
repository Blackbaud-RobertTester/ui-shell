import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

angular.module('uiShell', ['restangular', 'ui.router', 'uiShell.main', 'uiShell.common', 'sky'])
    .config(config)
    .config(routerConfig)
    .run(runBlock);



