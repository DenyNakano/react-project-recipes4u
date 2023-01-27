import {
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";

export const BarSearch = ({ getSearch, search, inputValue }) => {
  return (
    <div>
      <Card style={{ margin: "20px 0" }}>
        <CardBody>
          <InputGroup>
            <Input
              value={search}
              onChange={(e) => inputValue(e)}
              placeholder="Search for recipe"
            />
            <InputGroupText>
              <Button color="second" onClick={getSearch}>
                <FaSearch />
              </Button>
            </InputGroupText>
          </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};
