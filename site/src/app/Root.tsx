import { Outlet, ScrollRestoration } from "react-router";
import Layout from "../components/Layout";

export default function Root() {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
}
