import { Button, Dialog, Tooltip } from "@mui/material";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";

export const ProductPreview = (props) => {
  const [open, setOpen] = useState(false);
  const { item } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Xem nhanh" placement="top">
        <Button variant='outlined' onClick={handleClickOpen}>
          <FaEye />
        </Button>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <div style={{ width: "400px" }}>
          <img src={item.image} alt={item.title} style={{ width: "200px" }} />
          <h2>{item.title}</h2>
        </div>
      </Dialog>
    </>
  )
}