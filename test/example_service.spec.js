describe('service', () => {
    let service;

    beforeEach(angular.mock.module('uiShell'));

    beforeEach(inject(($injector) => {
        service = $injector.get('ExampleService');
    }));

    it('should have a timestamp creation date', () => {
        expect(service).toBeDefined();
    });

    it('should be able to log a message', () => {
        spyOn(service.logger, 'log');
        service.logMessage('blah');
        expect(service.logger.log).toHaveBeenCalledWith('blah');
    });
});