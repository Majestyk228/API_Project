module.exports={
    get: {
        tags: ["state"],
        description: "Get all state",
        operationId: "getAllState",
        parameters: [],
        responses: {
          200: {
            description: "Get all state",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/states",
                },
              },
            },
          },
        },
      },
}