import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = { vus: 1, duration: '15s', thresholds: { http_req_failed: ['rate<0.05'], http_req_duration: ['p(95)<3000'] } };
const base = __ENV.BASE_URL || 'http://13.200.185.1/c/sonam-c06faf';
export default function () {
  const r = http.get(`${base}/login`);
  check(r, { 'login page available': (res) => res.status === 200 });
  sleep(1);
}
