describe('controllers', function() {
    var vm;

    beforeEach(angular.mock.module('uiShell.main'));

    beforeEach(inject(function($controller) {
        vm = $controller('MainController');
    }));

    it('should have a timestamp creation date', function() {
        expect(vm).toBeDefined();
    });

    it('should have a message', function() {
       expect(vm.message).toBe('Hello World!!')
    });
});