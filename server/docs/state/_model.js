module.exports ={
    state: {
        type: "object",
        properties: {
          id: {
            type: "int",
            description: "id of state",
            example: "1",
          },
          label: {
            type: "varchar",
            description: "label of state",
            example: "waiting",
          },
        },
      },
      states: {
        type: "object",
        additionalProperties: { $ref: "#/components/schemas/state" },
      },
}