export function ProjectCard({
  title,
  problem,
  solution,
  tools,
  result,
  labels
}: {
  title: string;
  problem: string;
  solution: string;
  tools: string;
  result: string;
  labels: { problem: string; solution: string; tools: string; result: string };
}) {
  return (
    <article className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4 space-y-2 text-sm">
        <p>
          <span className="font-semibold text-violetBrand-500">{labels.problem}:</span> {problem}
        </p>
        <p>
          <span className="font-semibold text-violetBrand-500">{labels.solution}:</span> {solution}
        </p>
        <p>
          <span className="font-semibold text-violetBrand-500">{labels.tools}:</span> {tools}
        </p>
        <p>
          <span className="font-semibold text-violetBrand-500">{labels.result}:</span> {result}
        </p>
      </div>
    </article>
  );
}
