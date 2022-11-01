const fetchProduct = require('../async.js');

describe('Async', () => {

  // done 방식 보다는 return 방식이 낫다.

  // done 방식
  it('async - done', (done) => {
    fetchProduct().then(item => {
      expect(item).toEqual({ item: 'Milk', price: 2000 })
      done();
    })
  })

  // return 방식
  it('async - return', () => {
    return fetchProduct().then(item => {
      expect(item).toEqual({ item: 'Milk', price: 2000 })
    })
  })

  // async 방식
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 2000 })
  })

  it('async - resolves' , () => {
    expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 2000
    })
  })

  it('async - reject' , () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  })

})