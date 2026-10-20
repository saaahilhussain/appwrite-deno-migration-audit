export default async ({ req, res }: any) => {
  if (req.method === "GET") {
    return res.text("Hello, World!");
  }

  return res.json({ ok: true, body: req.bodyJson });
};
