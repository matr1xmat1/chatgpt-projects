export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Inbox Control Center</p>
        <h1>Bulk unsubscribe with enforcement built in.</h1>
        <p className="subhead">
          Scan your inbox, group providers, unsubscribe in bulk, and ensure they
          never hit your inbox again.
        </p>
        <div className="actions">
          <button className="primary">Connect Gmail</button>
          <button className="secondary">View demo audit log</button>
        </div>
      </section>
      <section className="grid">
        <article>
          <h2>Provider discovery</h2>
          <p>Cluster senders by brand and surface marketing-only subscriptions.</p>
        </article>
        <article>
          <h2>Safe unsubscribe</h2>
          <p>
            Use List-Unsubscribe headers first, then guide the rest with
            confirmations.
          </p>
        </article>
        <article>
          <h2>Never resubscribe</h2>
          <p>
            Enforce Gmail rules so blocked providers are quarantined instantly.
          </p>
        </article>
      </section>
    </main>
  );
}
