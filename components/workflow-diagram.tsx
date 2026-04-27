const steps = [
  "Client submits a form",
  "Data is saved in your CRM",
  "Email and WhatsApp confirmation are sent",
  "Automatic follow-up is scheduled"
];

export function WorkflowDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-600">Automation flow</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
              {index + 1}
            </span>
            <p className="text-sm text-slate-700">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
