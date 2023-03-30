const { IncomingWebhook } = require('@slack/webhook')

require('dotenv').config()
const { SLACK_HOOK } = process.env

const webhook = new IncomingWebhook(SLACK_HOOK)
const main = async (text) => {
  await webhook.send({ text })
  return true
}

module.exports = main
