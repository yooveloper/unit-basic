const ProductService = require('../product_service_no_di.js')
const ProductClient = require('../product_client.js')
jest.mock('../product_client');


/**
 * ProductService 클래스의 fetchAvailableItems 메서드는
 * ProductClient 의 fetchItems란 메서드의 의존하고 있다.
 * 이렇게 되면 다른 모듈의 객체와 메서드를 사용하게 되서 테스트의 독립성이 보장되지 않는다.
 * 이를 해결하기 위해 mock 을 사용해서 테스트코드 내에서는 가짜로 mockUp을 만들어서 사용한다.
 */
describe('ProductService', () => {
  
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true},
    { item: 'Banana', available: false},
  ])
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  });

  let productService;
  beforeEach(() => {
    productService = new ProductService();
  })

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems()
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true}])
  })

})