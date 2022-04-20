export default {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
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
      name: "githuburl",
      title: "GitHubURL",
      type: "string",
    },
    {
      name: "linkedinurl",
      title: "LinkedInURL",
      type: "string",
    },
  ],
};
