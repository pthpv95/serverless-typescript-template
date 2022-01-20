import { APIGatewayProxyHandler } from "aws-lambda";
import { list } from "service";

export const hello: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello",
      context,
      event,
      list,
    }),
  };
};

export const bye: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "good bye",
      context,
      event,
      list,
    }),
  };
};
