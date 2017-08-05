import VueIsh from './VueIsh';

describe('VueIsh', () => {
  var vm;

  describe('instance', () => {
    it('creates an object that is root', () => {
      vm = new VueIsh();

      expect(vm.root).toBe(true);
    });
  })

  describe('data defineProperties', () => {
    beforeEach(() => {
      vm = new VueIsh({
        data: {
          foo: 'bar',
          baz: 1
        }
      })
    })

    it('has values', () => {
      expect(vm.foo).toBe('bar');
      expect(vm.baz).toBe(1);
    })

    it('can set values', () => {
      vm.foo = 'asdf';

      expect(vm.foo).toBe('asdf');
    })
  });

  describe('computed properties', () => {
    it('set a property on the vm', () => {
      vm = new VueIsh({
        computed: {
          foo() { return 1 },
        },
      })

      expect(vm.foo).toBe(1);
    })

  })
})
