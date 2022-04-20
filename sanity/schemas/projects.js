export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "imageurls",
      title: "ImageURLS",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "videourl",
      title: "VideoURL",
      type: "string",
    },
    {
      name: "githuburl",
      title: "GitHubURL",
      type: "string",
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
  ],
};
