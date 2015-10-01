export class HelloWorldTitle {
    constructor() {
        this.restrict = 'E';
        this.templateUrl = 'app/main/partials/example-directive-template.html';
        this.scope = {
            message: '=message'
        }
    }
}