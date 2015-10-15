describe('controllers', () => {
    let vm;

    beforeEach(angular.mock.module('uiShell'));

    beforeEach(inject(($controller) => {
        vm = $controller('MainController');
    }));

    it('should have a timestamp creation date', () => {
        expect(vm).toBeDefined();
    });

    it('should have a message', () => {
       expect(vm.message).toBe('Hello World!!')
    });


});