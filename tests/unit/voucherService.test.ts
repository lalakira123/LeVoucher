import * as voucherService from './../../src/services/voucherService.js';
import * as voucherRepository from './../../src/repositories/voucherRepository.js';

import { jest } from "@jest/globals";

describe("voucherService test suite", () => {
  it("createVoucher test suit succed", async () => {
    const code:string = '123';
    const discount:number = 10;

    jest.spyOn(voucherRepository.default, 'getVoucherByCode').mockReturnValueOnce(null);
    jest.spyOn(voucherRepository.default, 'createVoucher').mockImplementation(():any => {
      return {
        id: 1,
        code: '123',
        discount: 123,
        used: false
      };
    })

    await voucherService.default.createVoucher(code, discount);
    expect(voucherRepository.default.createVoucher).toHaveBeenCalled();
  });

  // it("createVoucher test don't succed", () => {
  //   jest.spyOn(voucherRepository.default, "getVoucherByCode").mockReturnValue({code:"123", discount:120})
  // });
})