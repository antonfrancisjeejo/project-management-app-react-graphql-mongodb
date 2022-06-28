const { GraphQLObjectType } = require("graphql");
const addClient = require("./addClient");
const addProject = require("./addProject");
const deleteClient = require("./deleteClient");
const deleteProject = require("./deleteProject");
const updateProject = require("./updateProject");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addClient: addClient,
    //delete a client
    deleteClient: deleteClient,

    //Add a project
    addProject: addProject,

    // Delete a project
    deleteProject: deleteProject,
    // Update a project
    updateProject: updateProject,
  },
});

module.exports = mutation;
