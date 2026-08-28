export default function RoleCard({ role, date, children }) {
  return (
    <div className="role-card fade-right">
      <h5>{role}</h5>
      <p className="role-date">{date}</p>
      {children && <p className="role-desc">{children}</p>}
    </div>
  );
}
