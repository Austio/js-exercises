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
      });

      expect(vm.foo).toBe(1);
    });

    it('computes based on values in data', () => {
      vm = new VueIsh({
        data: {
          bar: 1,
        },
        computed: {
          foo() { return 1 + this.bar },
        },
      });

      expect(vm.foo).toBe(2);
    });

    it('recomputes values when things change', () => {
      vm = new VueIsh({
        data: {
          speed: 50,
        },
        computed: {
          speedText() {
             if (this.speed < 100) {
               return 'slow';
             }

             return 'fast';
          },
        },
      });

      expect(vm.speedText).toBe('slow');
      vm.speed = 101;
      expect(vm.speedText).toBe('fast');
    })

    it('only recomputes when values change', () => {
      const spy = jest.fn();

      vm = new VueIsh({
        data: {
          speed: 50,
        },
        computed: {
          speedText() {
            spy();

            if (this.speed < 100) {
              return 'slow';
            }

            return 'fast';
          },
        },
      });

      expect(vm.speedText).toBe('slow');
      expect(vm.speedText).toBe('slow');

      expect(spy.mock.calls.length).toEqual(1);
    })
  })

  describe('dependent computed properties', () => {

  });
})
