import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import './domain1/main.module';
import './ui-common/main.module';

angular.module('uiShell', ['restangular', 'ui.router', 'uiShell.main', 'uiShell.common', 'sky'])
    .config(config)
    .config(routerConfig)
    .run(runBlock);



