import { Reveal } from "./reveal";

export function SectionHeader({
  id,
  title,
  lead,
}: {
  id: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal kind="fade-up" className="section-header">
      <h2 id={id}>{title}</h2>
      {lead && <p>{lead}</p>}
    </Reveal>
  );
}
