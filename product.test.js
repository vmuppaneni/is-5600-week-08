const productTestHelper = require('./test-utils/productTestHelper');
const { list } = require('../products');

describe('Product Module', () => {
  // Set up and clean up test data
  beforeAll(async () => {
    await productTestHelper.setupTestData();
  });

  afterAll(async () => {
    await productTestHelper.cleanupTestData();
  });

  describe('list', () => {
    it('should list all products', async () => {
      const products = await list();
      expect(products.length).toBeGreaterThan(0);
    });
  });

  describe('get', () => {
    it('should retrieve a product by id', async () => {
      // Assume there is a product with id 'abc123'
      const product = await get('abc123');
      expect(product).not.toBeNull();
    });
  });
  describe('destroy', () => {
    it('should delete a product', async () => {
      // Assume there is a product with id 'abc123'
      await destroy('abc123');
      const product = await get('abc123');
      expect(product).toBeNull();
    });
  });
  const { mockDb, mockProducts } = require('./db.mock');
const { list } = require('../products');

// Mock the db module to use our mockDb
jest.mock('../db', () => mockDb);

describe('Product Module', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('list', () => {
        it('should list products', async () => {
            const products = await list();
            expect(products.length).toBe(2);
            expect(products[0].description).toBe('Product 1');
            expect(products[1].description).toBe('Product 2');
        });
    });
    mockModel.deleteOne = jest.fn().mockResolvedValue({ deletedCount: 1 });
    
});
});