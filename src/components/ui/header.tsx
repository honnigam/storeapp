import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const header  = () => {
  return ( 
    <Card className="flex justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon/>
      </Button>

      <h1 className="font-semibold text-lg">Store 
      <span className="text-primary"> APP</span>
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon/>
      </Button>
    </Card>
   );
}

export default header;