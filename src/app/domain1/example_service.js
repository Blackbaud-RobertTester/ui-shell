export class ExampleService {
    constructor($log) {
        this.logger = $log;
    }

    logMessage(message) {
        this.logger.log(message);
    }
}

ExampleService.$inject = ['$log'];