const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
} = require("graphql");
const Project = require("../models/Project");
const ProjectType = require("../schema/project");

const addProject = {
  type: ProjectType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    status: {
      type: new GraphQLEnumType({
        //unique name
        name: "ProjectStatus",
        values: {
          new: { value: "Not Started" },
          progress: { value: "In Progress" },
          completed: { value: "Completed" },
        },
      }),
      defaultValue: "Not Started",
    },
    clientId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    const project = new Project({
      name: args.name,
      description: args.description,
      status: args.status,
      clientId: args.clientId,
    });
    return project.save();
  },
};

module.exports = addProject;
