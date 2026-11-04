export default function Highlight({ size = "medium", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`highlight highlight--${size} ${className}`}
    />
  );
}
