import { motion } from "framer-motion";

const nodes = ["Lead capture", "CRM", "Email/WhatsApp", "Follow-up", "Report"];

export function WorkflowVisual() {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violetBrand-500">Workflow mockup</p>
      <div className="mt-4 grid gap-3 md:grid-cols-5">
        {nodes.map((node, i) => (
          <motion.div key={node} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="relative rounded-xl border border-violetBrand-300/30 bg-white/60 p-3 text-center text-sm dark:bg-black/30">
            {node}
            {i < nodes.length - 1 && <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-violetBrand-500 md:block">→</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
