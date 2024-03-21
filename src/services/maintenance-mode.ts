import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

const client = new SSMClient();

export const getParamValue = async (route: string) => {
  if (route === 'Mobile') {
    const input = {
      Name: '/mobile/maintenance', // required
    };
    const command = new GetParameterCommand(input);
    const response = await client.send(command);
    console.log(response.Parameter.Value);
    return response.Parameter.Value;
  }

  if (route === 'Web') {
    const input = {
      Name: '/web/maintenance', // required
    };
    const input2 = {
      Name: '/web/maintenance-two',
    };
    const command = new GetParameterCommand(input);
    const command2 = new GetParameterCommand(input2);
    const response = await client.send(command);
    const response2 = await client.send(command2);

    const result = response.Parameter.Value + response2.Parameter.Value;

    return result;
  }
};

export const getMobileMaintenanceStatus = async () => {
  const param: string = await getParamValue('Mobile');

  if (+param === 0) {
    return {
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    };
  }

  if (+param === 1) {
    return {
      status: 503,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    };
  }
};

export const getWebMaintenanceStatus = async () => {
  const param: string = await getParamValue('Web');

  if (param.includes('ONLINE')) {
    return {
      status: 200,
      message: 'Successfully hit endpoint',
      outageState: 'Outage Off',
    };
  }

  if (param.includes('OFFLINE')) {
    return {
      status: 503,
      message: 'Successfully hit endpoint',
      outageState: 'Outage On',
    };
  }
};

