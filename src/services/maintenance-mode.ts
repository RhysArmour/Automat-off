import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

const client = new SSMClient();

const getParamValue = async () => {
  const input = {
    Name: '/mobile/maintenance', // required
  };
  const command = new GetParameterCommand(input);
  const response = await client.send(command);
  return response;
};

export const getMobileMaintenanceStatus = async () => {
  const param = await getParamValue();

  if (param) {
    return {
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    };
  }

  if (!param) {
    return {
      status: 503,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    };
  }
};

export const getWebMaintenanceStatus = async () => {
  // call to param store
  let paramValue: string;
  if (paramValue === 'ONLINE') {
    return {
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    };
  }

  if (paramValue === 'OFFLINE') {
    return {
      status: 503,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    };
  }
};

