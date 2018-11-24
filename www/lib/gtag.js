import getConfig from 'next/config'

const { ANALYTICS_TOKEN, NODE_ENV } = getConfig().publicRuntimeConfig
const isDev = NODE_ENV !== 'production'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (!isDev) {
    window.gtag('config', ANALYTICS_TOKEN, {
      page_location: url
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, parameters }) => {
  if (!isDev) {
    window.gtag('event', action, parameters)
  }
}
