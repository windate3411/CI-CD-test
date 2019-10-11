const { expect } = require('chai')


describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      // assert.equal([1, 2, 3].indexOf(4), -1); 註解此行 
      expect([1, 2, 3].includes(3)).to.be.true //加入這行，並動點手腳讓測試失敗
    });
  });
})