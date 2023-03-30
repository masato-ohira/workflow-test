const getFeed = require('./feed')
const slackHook = require('./slack')

const main = async () => {
  const article = await getFeed()
  await slackHook(article)
  // console.log(article)
}

main()
