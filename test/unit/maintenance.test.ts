import * as maintenanceMode from '../../src/services/maintenance-mode';

const paramMock = jest.spyOn(maintenanceMode, 'getParamValue');

describe('maintenanceService', () => {
  it('When Param value is 1 for Mobile, it returns 503 OFF', async () => {
    paramMock.mockResolvedValue('1');

    const result = await maintenanceMode.getMobileMaintenanceStatus()

    console.log(result);
    expect(result).toStrictEqual({
      status: 503,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    });
  });

  it('When Param value is 1 for Mobile, it returns 200 ON', async () => {
    paramMock.mockResolvedValue('0');

    const result = await maintenanceMode.getMobileMaintenanceStatus()

    console.log(result);
    expect(result).toStrictEqual({
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    });
  });
});

