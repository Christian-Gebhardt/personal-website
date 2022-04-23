export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImageURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
  ],
};
