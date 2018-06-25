
const dev = process.env.NODE_ENV !== 'production'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (!dev) {
    window.gtag('config', process.env.ANALYTICS_TOKEN, {
      page_location: url
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, parameters }) => {
  if (!dev) {
    window.gtag('event', action, parameters)
  }
}
