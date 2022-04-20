export default {
  name: "vita",
  title: "Vita",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      title: "iconType",
      name: "IconType",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "school" },
          { title: "Software", value: "laptop" },
        ],
      },
    },
  ],
};
