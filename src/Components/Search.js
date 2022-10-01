import React from 'react'
import { Button, Card, CardBody, Collapse, Input, InputGroup, InputGroupText } from 'reactstrap'

export const Search = () => {
  return (
    <div>
        <Collapse>
            <Card>
                <CardBody>
                    <InputGroup>
                        <Input placeholder='search'/>
                        <InputGroupText><Button color='primary'>
                            
                        </Button></InputGroupText>
                    </InputGroup>
                </CardBody>
            </Card>
        </Collapse>
    </div>
  )
}
