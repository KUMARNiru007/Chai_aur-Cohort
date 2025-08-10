import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      App Layout
      <h2>Routes</h2>
      <li>
        <Link to="/app/dashboard">/app/dashboard</Link>
      </li>
      <Outlet />
    </div>
  );
}