let baseUrl = 'http://localhost:5000/api';

if (window.location.host === 'maha-dev.falconweb.app') {
  baseUrl = 'https://maha-api-dev.falconweb.app/api';
} else if (window.location.host === 'maha-qa.falconweb.app') {
  baseUrl = 'https://maha-api-qa.falconweb.app/api';
} else if (window.location.host === 'maha-staging.falconweb.app') {
  baseUrl = 'https://maha-api-staging.falconweb.app/api';
} else if (window.location.host === 'maha-prod.falconweb.app/') {
  baseUrl = 'https://maha-api-prod.falconweb.app/api';
}

module.exports = { baseUrl };
