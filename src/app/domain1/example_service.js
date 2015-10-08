export class ExampleService {
    constructor($log) {
        'ngInject';
        this.logger = $log;
    }

    logMessage(message) {
        this.logger.log(message);
    }
}

ExampleService.$inject = ['$log'];