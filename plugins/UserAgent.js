export default function(context, inject) {
  const USER_DEVISE = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent;
  const DEVISE_LIST = ['iPhone', 'iPad', 'Android', 'Mobile'];
  const PATTERN = new RegExp(DEVISE_LIST.join('|'), 'i');
  const RESULT = PATTERN.test(USER_DEVISE);
  inject('isMobile', RESULT);
}
