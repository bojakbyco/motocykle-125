export type AnalyticsEvent = 'quiz_started'|'quiz_completed'|'recommendation_viewed'|'compare_opened'|'dealer_locator_opened'|'dealer_selected'|'dealer_website_clicked'|'dealer_phone_clicked'|'dealer_route_clicked';
declare global { interface Window { analytics?: { track:(event:string, props?:Record<string,unknown>)=>void } } }
export function track(event:AnalyticsEvent, properties:Record<string,unknown>={}) {
  if (typeof window === 'undefined') return;
  window.analytics?.track(event, properties);
  window.dispatchEvent(new CustomEvent('m125:analytics', { detail:{ event, properties } }));
}
