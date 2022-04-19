const getState = require("./get.js")
const getAllState = require("./getAll.js")
const insertState = require("./insert.js")
const updateState = require("./update.js")
const deleteState = require("./delete.js")
const schema = require("./_model.js")
module.exports ={
  paths: {
    "/state": {
      ...getAllState,
      ...insertState,
      ...updateState,
    },
    "/state/{id}": {
      ...getState,
      ...deleteState,
    },
  },
  schema: {
    ...schema,
  },
};
