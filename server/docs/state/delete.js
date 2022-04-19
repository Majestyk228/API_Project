module.exports={
    delete: {
        tags: ["state"],
        description: "delete state by Id",
        operationId: "deleteStateById",
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
            description: "state deleted succesfully",
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