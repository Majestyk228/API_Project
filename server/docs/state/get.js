module.exports = {
    get: {
        tags: ["state"],
        description: "Get state by Id",
        operationId: "getStateById",
        parameters: [
          {
            in: "path",
            required: true,
            type: "int",
            name: "id",
          },
        ],
        responses: {
          200: {
            description: "state found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/states",
                },
              },
            },
          },
          204: {
            description: "State not found",
            content: {
              "tetx/plain": {
                schema: {
                  type: "string",
                  description: 'State "${id}" introuvable',
                },
              },
            },
          },
        },
      },
}