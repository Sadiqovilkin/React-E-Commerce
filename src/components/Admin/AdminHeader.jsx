import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// { adminID, setAdminID, setLocalAdminID }
// eslint-disable-next-line react/prop-types
const AdminHeader = ({ adminID, setAdminID, setLocalAdminID }) => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(43deg, rgba(108,29,29,1) 0%, rgba(159,78,68,1) 48%, rgba(209,116,116,1) 100%)",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Side
          </Typography>
          {adminID && (
            <>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin"}>Dashboard</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/add-category"}>AddCategory</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/categorys"}>Categorys</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/add-product"}>AddProduct</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/products"}>Products</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/users"}>Users</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/orders"}>Orders</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white'}} to={"/admin/messages"}>Messages</Link>
              </Button>

              <Button
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setAdminID(null);
                      setLocalAdminID(null);
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      }).then(() => {
                        navigate("/admin/login");
                      });
                    }
                  });
                }}
                color="inherit"
              >
                Log Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminHeader;
