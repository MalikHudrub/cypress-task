const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.forbes.com/digital-assets',
    pageLoadTimeout: 120000,
    testIsolation: false

  },
  blockHosts :  [
    "aax.amazon-adsystem.com",
    "adservice.google.com",
    "adservex.media.net",
    "ampcid.google.com",
    "amprtc.media.net",
    "attr.ml-api.io",
    "c.amazon-adsystem.com",
    "cdn.adsafeprotected.com",
    "connect.facebook.net",
    "consent.trustarc.com",
    "contextual.media.net",
    "d.email.forbes.com",
    "dc.ads.linkedin.com",
    "edittools.forbes.com",
    "fast.forbes.com",
    "google-analytics.com",
    "googletagservices.com",
    "gum.criteo.com",
    "lightboxapi1.azurewebsites.net",
    "lightboxcdn.com",
    "mb.moatads.com",
    "ml314.com",
    "mydmp.exelator.com",
    "paywall.unlock-protocol.com",
    "ping.chartbeat.net",
    "pixel.quantserve.com",
    "pubads.g.doubleclick.net",
    "px.ads.linkedin.com",
    "px.moatads.com",
    "sb.scorecardresearch.com",
    "secure.adnxs.com",
    "securepubads.g.doubleclick.net",
    "siteintercept.qualtrics.com",
    "stags.bluekai.com",
    "stats.g.doubleclick.net",
    "googletagmanager.com",
    "cd.connatix.com",
    "ampcid.google.com"
  ],
  chromeWebSecurity: false,
});
