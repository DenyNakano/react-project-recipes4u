
import { Button, Card, CardBody, Input, InputGroup, InputGroupText } from "reactstrap";
import { FaSearch } from "react-icons/fa";


export const BarSearch = ({getSearch, search}) => { 
  /*console.log(getSearch)*/
  /*const [search, setSearch] = useState('')*/
  return (
    <div className="main">
      <Card style={{ margin: "20px 0" }}>
        <CardBody>
          <InputGroup>
            <Input value={search} onChange={(e) => getSearch(e)} placeholder="Search for recipe" />
            <InputGroupText>

              <Button color="primary">
                <FaSearch />
              </Button>

            </InputGroupText>
          </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};
