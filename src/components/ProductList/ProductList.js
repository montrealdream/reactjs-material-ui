import { Container, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductPreview } from './ProductPreview';

export const ProductList = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      })
  }, []);

  return (
    <>
      {productList && (
        <Container>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Hình ảnh</TableCell>
                  <TableCell>Tên</TableCell>
                  <TableCell>Giá</TableCell>
                  <TableCell>Đánh giá</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{
                          width: "60px"
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {item.title}
                    </TableCell>
                    <TableCell>
                      {item.price}$
                    </TableCell>
                    <TableCell>
                      <div>{item.rating.rate} sao</div>
                      <div>{item.rating.count} đánh giá</div>
                    </TableCell>
                    <TableCell>
                      <Switch defaultChecked={true} disabled />
                    </TableCell>
                    <TableCell>
                      <ProductPreview item={item} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  )
}