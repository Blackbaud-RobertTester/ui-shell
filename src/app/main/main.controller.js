export class MainController {

    constructor(ExampleService) {
        'ngInject';
        this.message = 'Hello World!!';

        let array = new Array();
        for (var i = 0; i < 10; i++)
            array.push(i);

        this.sizeOfArray = array.length;
        this.exampleService = ExampleService;
    }

    logMessage(message) {
        this.exampleService.logMessage(message);
    }
}

MainController.$inject = ['ExampleService'];