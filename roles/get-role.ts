import { APIGatewayProxyHandler } from "aws-lambda";
import * as openpgp from 'openpgp';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const keys = await openpgp.generateKey({ curve: 'p256', userIDs: [{ name: 'Test', email: 'test@test.com' }] });

  return {
    statusCode: 200,
    body: JSON.stringify({
      keys,
      message: "role list",
      context,
      event
    }),
  };
};
