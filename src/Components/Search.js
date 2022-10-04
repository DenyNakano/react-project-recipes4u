import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Search = () => {
  const [search,setSearch] = useState('')
  console.log(search)
  return (
    <div className="main">
      <Card style={{ margin: "20px 0" }}>
        <CardBody>
          <InputGroup>
            <Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for recipe" />
            <InputGroupText>
              <Link to="/search">
                <Button color="primary">
                  <FaSearch/>
                </Button>
              </Link>
            </InputGroupText>
          </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};
