// Uppercase section heading with a hairline rule (echoes the CV's \titlerule).
export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`border-b border-ink pb-1 font-sans text-sm font-bold uppercase tracking-[0.2em] text-ink ${className}`}
    >
      {children}
    </h2>
  );
}
