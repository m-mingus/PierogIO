const { total } = require('../../src/total');
const { subtotal } = require('../../src/subtotal');
const { discounts } = require('../../src/discounts');
const { deliveryFee } = require('../../src/delivery');
const { tax } = require('../../src/tax');

describe('Order Calculations', () => {
  
  describe('total', () => {

    // expose bug: FIRST10 should NOT apply for subtotal < $20  or 2000 cents
    it('does not apply FIRST10 for orders under $20', () => {
      const smallOrder = {
        items: [
          {
            sku: 'P6-POTATO',
            title: '6-pack Potato',
            kind: 'hot',
            filling: 'potato',
            qty: 1,
            unitPriceCents: 1299,
            addOns: []
          }
        ]
      };

      const profile = { tier: 'guest' };
      const coupon = 'FIRST10';

      // discounts should be 0 for FIRST10 when subtotal < 2000
      const d = discounts(smallOrder, profile, coupon);
      expect(d).toBe(0);
    });
  });

});