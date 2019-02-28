const fs = require('fs');
const dotenv = require('dotenv');

function getClientEnvironment(env) {
  const appDirectory = fs.realpathSync(process.cwd());
  const productionFilePath = `${appDirectory}/.env`;
  const customEnvPath = `${productionFilePath}.${env.ENVIRONMENT}`;
  const finalEnvironmentPath = fs.existsSync(customEnvPath) ? customEnvPath : productionFilePath;
  const finalVariables = dotenv.config({ path: finalEnvironmentPath }).parsed;
  return Object.keys(finalVariables).reduce((objEnv, nextEnv) => {
    return Object.assign(objEnv, {
      [`process.env.${nextEnv}`]: JSON.stringify(finalVariables[nextEnv]),
    });
  }, {});
}

module.exports = getClientEnvironment;
