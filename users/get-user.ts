import { APIGatewayProxyHandler } from "aws-lambda";
import { getUsers } from "services/user-service";

export const handler: APIGatewayProxyHandler =  async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "user list",
      context,
      event,
      list: getUsers(),
    }),
  };
};
