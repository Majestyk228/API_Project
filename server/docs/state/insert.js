module.exports ={
    post: {
        tags: ["state"],
        description: "add state",
        operationId: "addState",
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