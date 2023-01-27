export default function healthcheck(req, res) {
  res.json({
    status: 'ok',
  });
}