import fetch from 'node-fetch';

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}

const getData = async (baseURL: string): Promise<string> => {
  const response = await fetch(baseURL, {
    headers: {
      Authorization:
        'Basic cmh5cy5hcm1vdXJAc2FpbnNidXJ5c2JhbmsuY28udWs6QVRBVFQzeEZmR0YwczNYbmlVcnMzeUdEazY2d3NJTHVpZk1zMXQ0dVlTN2RUM2xaLVZycHk2akw5UlJDekV1OFg0cHVhdnlyb2ZrY0JnSjB6dm5UeGZ4STBBTEM2T2NTZG1TT053NGRLMy1GcFlwOE9sdkNYdnpDVFZrMmZ4blJuZXNReEZxTFBJSWlOSnVCeUhPaUxoNW12Z1FLWW5iLTVrZGlnZndjV1V3MlhxTUQ5Z0h6VmIwPTRDQjQyOTJC',
    },
  });

  if (response.status !== 200) {
    throw new Error(`Jira ticket URL is not valid: ${baseURL}`);
  }

  const responseBody = await streamToString(response.body);

  return responseBody.toString();
};

export async function validateJiraTicket(jiraTicket: string): Promise<any> {
  try {
    console.log('beginning validateJiraTicket');

    const baseURL = `https://sb97digital.atlassian.net/rest/api/2/issue/${jiraTicket}`;
    const responseString: string = await getData(baseURL);

    const response = JSON.parse(responseString);

    console.log(response);

    const mappedFields = {
      outageStartTime: new Date(response.fields.customfield_10008),
      outageEndTime: new Date(response.fields.customfield_10009),
      breakglassUser: response.fields.customfield_10053,
    };

    validateCustomFields(mappedFields);

    return 201;
  } catch (error) {
    console.error(error);
    return 400;
  }
}

function validateCustomFields(customFields: any) {
  const currentDate = new Date();

  console.log('Checking if outageStartTime is after the current date');
  console.log(customFields.outageStartTime);
  console.log(currentDate);
  if (customFields.outageStartTime < currentDate) {
    console.error(`outageStartTime must not be before the current date`);
    throw new Error(`outageStartTime must not be before the current date`);
  }

  console.log('Checking if outageStartTime is a valid datetime');
  if (!isValidDateTime(customFields.outageStartTime)) {
    console.error(`outageStartTime is not a valid datetime`);
    throw new Error(`outageStartTime is not a valid datetime`);
  }

  console.log('Checking if outageEndTime is after the current date');
  if (customFields.outageEndTime < currentDate) {
    console.error(`outageEndTime must not be before the current date`);
    throw new Error(`outageEndTime must not be before the current date`);
  }

  console.log('Checking if outageEndTime is a valid datetime');
  if (!isValidDateTime(customFields.outageEndTime)) {
    console.error(`outageEndTime is not a valid datetime`);
    throw new Error(`outageEndTime is not a valid datetime`);
  }

  console.log('Checking if outageEndTime is after outageStartTime');
  if (customFields.outageEndTime <= customFields.outageStartTime) {
    console.error(`outageEndTime must be after outageStartTime`);
    throw new Error(`outageEndTime must be after outageStartTime`);
  }

  console.log('Checking if outageEndTime is within 14 hours of outageStartTime');
  const timeDifference = customFields.outageEndTime.getTime() - customFields.outageStartTime.getTime();
  const hours = timeDifference / (1000 * 60 * 60);

  if (hours > 14) {
    console.error(`outageEndTime must not be more than 14 hours after outageStartTime`);
    throw new Error(`outageEndTime must not be more than 14 hours after outageStartTime`);
  }

  return;
}

function isValidDateTime(dateTime: Date): boolean {
  // Check if the date is a valid date object
  if (isNaN(dateTime.getTime())) {
    throw new Error();
  }

  // Check if the date is in the future
  if (dateTime < new Date()) {
    throw new Error();
  }

  return true;
}

