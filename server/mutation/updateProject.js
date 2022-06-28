const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLEnumType,
} = require("graphql");
const ProjectType = require("../schema/project");

const updateProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: {
      type: new GraphQLEnumType({
        name: "ProjectStatusUpdate",
        values: {
          new: { value: "Not Started" },
          progress: { value: "In Progress" },
          completed: { value: "Completed" },
        },
      }),
    },
  },
  resolve(parent, args) {
    return Project.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          description: args.description,
          status: args.status,
        },
      },
      { new: true }
    );
  },
};

module.exports = updateProject;
