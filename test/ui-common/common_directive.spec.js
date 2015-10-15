'use strict';

describe('common directive tests', () => {
    let injector, compile, rootScope;

    beforeEach(angular.mock.module('uiShell.common'));

    beforeEach(inject(($injector, $compile, $rootScope) => {
        injector = $injector;
        compile = $compile;
        rootScope = $rootScope;
    }));

   it('should exist', ()=> {
      var element = compile('<hello-world-common></hello-world-common>')(rootScope);
       rootScope.$digest();
       expect(element).toBeDefined();
   });
});