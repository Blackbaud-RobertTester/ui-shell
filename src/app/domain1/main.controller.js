export class MainController {

    constructor(ExampleService) {
        'ngInject';
        this.message = 'Hello World!!';

        let array = new Array();
        for (var i = 0; i < 10; i++)
            array.push(i);

        this.sizeOfArray = array.length;
        this.exampleService = ExampleService;

        this.tabs = [
            {
                title: 'Tab 1',
                content: '1 content'
            },
            {
                title: 'Tab 2',
                content: '2 content'
            },
            {
                title: 'Tab 3',
                content: '3 content'
            }
        ];

        this.tabCount = 4;
    }

    logMessage(message) {
        this.exampleService.logMessage(message);
    }

    closeTab(index, event) {
        event.preventDefault();
        event.tabs.splice(index, 1);
    }

    openTab () {
        var newTitle = 'Tab ' + this.tabCount.toString(),
            newContent = this.tabCount.toString() + ' content';
        this.tabs.push({
            title: newTitle,
            content: newContent
        });
        this.tabCount++;
    }

    addTab() {

    }
}

MainController.$inject = ['ExampleService'];