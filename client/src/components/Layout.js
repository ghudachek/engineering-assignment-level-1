import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import { SITE_TITLE } from "../constants";
import { Link } from "@material-ui/core";
function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{SITE_TITLE}</Typography>
          <Link
            href="/"
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              position: "fixed",
              right: "0",
              marginRight: "20px",
            }}
          >
            Products
          </Link>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>{children}</div>
    </>
  );
}

export { Layout };
