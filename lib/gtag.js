// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", "G-XXX", {
    page_path: url,
  });
  window.gtag("config", "UA-XXX", {
    page_path: url,
  });
  window.gtag("config", "AW-XXX", {
    page_path: url,
  });
  window.fbq("track", "PageView");
};
export const gconversion = (id) => {
  window.gtag("event", "conversion", {
    send_to: id,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
