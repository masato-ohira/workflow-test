const { IncomingWebhook } = require('@slack/webhook')

require('dotenv').config()
const webhook = new IncomingWebhook(SLACK_HOOK)
const main = async (text) => {
  console.log({ SLACK_HOOK })
  await webhook.send({ text })
  return true
}

module.exports = main
