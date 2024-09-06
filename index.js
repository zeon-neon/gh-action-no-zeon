const core = require("@actions/core");
const github = require("@actions/github");

try {
if(github.context.payload.sender.login.includes("zeon-neon")) {
    core.setOutput("skip", true)
} else {
    core.setOutput('skip', false)
}
} catch (error) {
  core.setOutput("skip", true);
  core.setFailed(error.message);
}