const ProductService = require('../product_service_no_di.js')
const StubProductClient = require('./stub_product_client.js')

describe('ProductService - Stub', () => {
  let productService;
  

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  })
})