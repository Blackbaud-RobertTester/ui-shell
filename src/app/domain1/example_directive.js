export class HelloWorldTitle {
    constructor() {
        this.restrict = 'E';
        this.templateUrl = 'app/domain1/partials/example-directive-template.html';
        this.scope = {
            message: '=message'
        }
    }
}