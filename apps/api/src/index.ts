import express from "express";

const app = express();

app.use(express.json());

const providerSummaries = [
  {
    id: "provider_mailchimp_001",
    name: "Mailchimp Sample",
    status: "blocked",
    messageCount: 42,
  },
  {
    id: "provider_sendgrid_001",
    name: "SendGrid Sample",
    status: "allowed",
    messageCount: 18,
  },
];

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/providers", (_req, res) => {
  res.json({ providers: providerSummaries });
});

app.post("/gmail/sync", (_req, res) => {
  res.json({
    status: "queued",
    message: "Gmail sync stubbed; OAuth + ingest comes next.",
  });
});

app.post("/unsubscribe", (req, res) => {
  res.json({
    status: "received",
    providerId: req.body?.providerId ?? null,
  });
});

const port = Number(process.env.PORT ?? 4000);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
