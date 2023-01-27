export function getPrometheusPayload(canisterResponse) {
  return JSON.parse(JSON.stringify(canisterResponse, (key, value) =>
    typeof value === 'bigint'
      ? value.toString()
      : value
  ));
}