import { Container, Row } from "react-bootstrap";
import Inventory from "../components/Inventory";
import { useState, useEffect } from "react";
import { Category, Item} from "../services/PurchaseRequest";

function InventoryPages() {
  const [getitem, setgetitem] = useState([]);
  const [getcattegory, setcattegory] = useState([]);

  useEffect(() => {
    const datafetch = async () => {
      try {
        const dataitem = await Item();
        const datacategory = await Category();

        setcattegory(datacategory);
        setgetitem(dataitem);
      } catch (error) {
        console.log(error);
      }
    };

    datafetch();
  }, []);
  const status = (item) => {
    if (item.quantity === 0) return "Out Stock";
    if (item.quantity <= item.minStock) return "Low Stock";
    return "In Stock";
  };

  return (
    <div>
      <Container>
        <Row>
          <Inventory
            getitem={getitem}
            getcattegory={getcattegory}
            status={status}
          />
        </Row>
      </Container>
    </div>
  );
}
export default InventoryPages;
