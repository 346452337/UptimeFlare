// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Uptime Status Page",
  // Links shown at the header of your status page
  links: [
    { link: 'https://www.gaojinbo.com/', label: 'Blog' },
    { link: 'mailto:346452337@qq.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  passwordProtection: 'gaojinbo:gaojinbo.com',

  monitors: [
    {
      id: 'http1001',
      name: 'www.gaojinbo.com',
      method: 'GET',
      target: 'https://www.gaojinbo.com',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://www.gaojinbo.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },

    {
      id: 'http1002',
      name: 'www.btmovies.com',
      method: 'GET',
      target: 'https://www.btmovies.com',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://www.btmovies.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },

    {
      id: 'test_tcp_monitor',
      name: 'Example TCP Monitor',
      method: 'TCP_PING',
      target: '1.2.3.4:22',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },
  ],

  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = [
  {
    monitors: ['foo_monitor', 'bar_monitor'],
    title: 'Test Maintenance',
    body: 'This is a test maintenance, server software upgrade',
    start: '2020-01-01T00:00:00+08:00',
    end: '2050-01-01T00:00:00+08:00',
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
