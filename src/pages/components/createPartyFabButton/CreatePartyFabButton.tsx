import { IconPensil } from "jjan-icon";
import { Link } from "react-router-dom";

import { Fab } from "@/components/fab";

const CreatePartyFabButton = () => (
  <Link to="/party-create">
    <Fab
      width="61px"
      height="61px"
      location="auto 20 20 auto"
      boxShadow="0 4px 5px 1px rgba(0, 0, 0, 0.3)"
      color="white"
    >
      <IconPensil width="60%" height="60%" />
    </Fab>
  </Link>
);

export { CreatePartyFabButton };
