import chalk from "chalk";

const printNextSteps = () => {
  console.log("\n\n✅ ", chalk.black.bgGreen(" All done! Happy coding. \n"));
  console.log(
    "Installer has added 🎈 WordPressify files to the current directory.  ",
    "\nInside this directory, you can run this command:",
  );

  // Scripts
  console.log(
    "\n👉 ",
    " Type",
    chalk.black.bgWhite(" npm run dev "),
    "\n\n",
    "	Use to compile and run your files.",
    "\n",
    "	Watches for any changes and reports back any errors in your code.",
  );

  // Support
  console.log("\n✊ ", chalk.black.bgYellow(" Support WordPressify \n"));
  console.log("Like WordPressify? Check out our other free and open source repositories: \n");
  console.log(
    `	${chalk.yellow("Cherry → ")} https://bit.ly/3sEr75P`,
    "\n",
    `	${chalk.gray("• A design system to build the web.")}`,
    "\n",
    `	${chalk.green("Powered by Riangle → ")} https://bit.ly/2P5i26I`,
    "\n",
    "\n",
    `	${chalk.red("Thank you for using 🎈 WordPressify → ")} https://www.wordpressify.co`,
  );

  // Get started
  console.log("\n\n🎯 ", chalk.black.bgGreen(" Get Started → \n"));
  console.log(" You can start: \n");
  console.log(
    ` ${chalk.dim("1.")} Rename: ${chalk.green(".env_example")} to ${chalk.green(".env")}`,
  );
  console.log(
    `	${chalk.dim("Set your new theme directory name:")} ${chalk.green(
      "THEME_NAME=",
    )}${chalk.red("wordpressify")} `,
    "\n",
  );
  console.log(
    ` ${chalk.dim("2.")} Run: ${chalk.green("npm")} run start  ${chalk.dim(
      "or",
    )}  ${chalk.green("docker")} compose up`,
    "\n",
    `	${chalk.dim("Make sure")} ${chalk.red("Docker")} ${chalk.green("is running")}`,
    "\n\n",
  );
  process.exit();
};

export { printNextSteps };

