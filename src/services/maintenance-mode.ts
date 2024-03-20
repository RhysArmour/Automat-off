export const getMobileMaintenanceStatus = async () => {
  // call to param store
  let paramValue: number;
  if ((paramValue === 0)) {
    return {
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    };
  }

  if ((paramValue === 1)) {
    return {
      status: 500,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    };
  }
};

export const getWebMaintenanceStatus = async () => {
  // call to param store
  let paramValue: string;
  if ((paramValue === 'ONLINE')) {
    return {
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    };
  }

  if ((paramValue === 'OFFLINE')) {
    return {
      status: 500,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    };
  }
};
