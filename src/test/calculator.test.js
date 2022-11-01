const Calculator = require('../calculator.js');

// describe : 관련있는 테스트들을 하나의 그룹으로 만든다
describe('Calculator', () => {

  let cal;
  beforeEach(() => {
    // 객체의 인스턴스를 테스트마다 계속 생성해줘서 중복코드가 발생하므로 
    // beforeEach를 활용해서 선언해준다
    cal = new Calculator();
  })

  // it : Calculator를 가르키는 3인칭
  it('inits whth 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  })

  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0);
  })

  it('adds', () => {
    cal.set(1)
    cal.add(2)
    expect(cal.value).toBe(3);
  })

  it('add should throw an error if value is greater is than 100', () => {
    // expect 안에서 콜백함수로 전달해서 에러 확인 가능
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100')
  })

  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1)
  })

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20)
  })

  // describe 안에 describe를 써서 소그룹화 시킬 수 있음
  describe('divdes', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    })

    it('1 / 0 === Infinity', () => {
      cal.set(1)
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    })

    it('4 / 4 === 1', () => {
      cal.set(4)
      cal.divide(4);
      expect(cal.value).toBe(1);
    })
  })


}) 