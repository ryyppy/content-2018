module.exports = {
  speakers: [
    require("../speakers/andrey-okonetchnikov"),
    require("../speakers/artem-sapegin"),
  ],
  session: {
    title: "Styleguide-driven Development",
    description:
      "Web applications becoming bigger and more complex, and as they grow, the complexity of the User Interface, arguably the most important part of your application, increases. And with it, your responsibility as a UI developer.\n\nA traditional development workflow — change code, refresh the app in the browser, click-click-click to reproduce the desired state, repeat — doesn't work anymore. Tools like React hot loader make it faster but don't really fix the underlying issue.\n\nThis workshop will help you:\n\n* Understand what a design system is and how to start thinking in design constraints\n\n* Analyze and split your UI into small reusable components\n\n* Setup an environment to create components in isolation\n\n* Create a living style guide and start building a component library\n\n* Structure your application around components\n\n* Write maintainable styles for your components based on the design system",
  },
};
