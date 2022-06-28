const { GraphQLID, GraphQLNonNull } = require("graphql");
const Project = require("../models/Project");
const ProjectType = require("../schema/project");

const deleteProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Project.findByIdAndRemove(args.id);
  },
};

module.exports = deleteProject;
