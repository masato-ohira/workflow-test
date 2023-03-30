const dayjs = require('dayjs')
const { parse } = require('rss-to-json')
const _ = require('lodash')

const getFeeds = async () => {
  try {
    // RSS候補リスト
    const targets = [
      // `https://www.webcreatorbox.com/feed`,
      // `https://coliss.com/feed/`,
      // `https://stocker.jp/diary/feed/`,
      // `https://liginc.co.jp/feed/`,
      // `https://note.com/notemag/m/mdafce2b0ebe1/rss`,
      // `https://note.com/notemag/m/m57787022cedc/rss`,
      `https://www.publickey1.jp/atom.xml`,

      `https://note.com/notemag/m/mdafce2b0ebe1/rss`,
      // `https://note.com/hashtag/nocode/rss`,
      // `https://note.com/hashtag/API/rss`,
      // `https://note.com/hashtag/react/rss`,
    ]

    // RSSをjsonに変換
    const all = await Promise.all(
      _.map(targets, async (url) => {
        let res = await parse(url, undefined)
        return res.items
      }),
    )

    // 投稿日時が30日以内の記事を抽出
    const output = []
    _.map(_.flatMapDeep(all), (i) => {
      const published = dayjs(i.published)
      if (dayjs().diff(published, 'day') <= 30) {
        output.push({
          title: i.title,
          updated_at: dayjs(i.published).format(),
          url: i.link,
        })
      }
    })
    return output
  } catch (error) {
    console.log({ error })
  }
}

const action = async () => {
  try {
    let feeds = await getFeeds()
    let sample = _.sample(feeds)
    let output = [sample.title, sample.url].join('\n')
    return output
  } catch (error) {
    return ''
  }
}

module.exports = action
