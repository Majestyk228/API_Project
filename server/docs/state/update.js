module.exports={
    put: {
        tags: ["state"],
        description: "update state",
        operationId: "updateState",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/states",
              },
            },
          },
        },
        responses: {
          200: {
            description: "State created successfully",
          },
          400: {
            description: "Error",
          },
        },
      },
}