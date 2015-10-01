export class HelloWorldTitle {
    constructor() {
        this.restrict = 'E';
        this.template = '<p>Hello World</p>';
        this.scope = {
            message: '=message'
        }
    }
}