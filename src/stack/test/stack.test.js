const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('스택은 비어있는 상태로 만들어져야 함', () => {
    expect(stack.size()).toBe(0);
  });

  it('원하는 값을 추가할 수 있다.', () => {
    stack.push('test1');
    expect(stack.size()).toBe(1);
  });

  describe('pop을 했을때', () => {
    it('스택이 비어있으면 error를 던진다.', () => {
      expect(() => {
        stack.pop();
      }).toThrow('스택이 비어있음');
    });

    it('pop은 마지막으로 push 된 아이템을 return 하고 기존 stack에서 제거한다.', () => {
      stack.push('테스트2');
      stack.push('테스트3');

      expect(stack.pop()).toBe('테스트3');
      expect(stack.size()).toBe(1);
    });
  });

  describe('스택안에 아이템 살펴보기', () => {
    it('스택이 비어있으면 error를 던진다.', () => {
      expect(() => {
        stack.pop();
      }).toThrow('스택이 비어있음');
    });

    it('peek은 스택은 유지하면서 어떤 아이템이 있는지를 확인해서 return 해준다', () => {
      stack.push('테스트2');
      stack.push('테스트3');

      expect(stack.peek()).toBe('테스트3');
      expect(stack.size()).toBe(2);
    });
  });
});
