import "./App.css";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import {
  Columns,
  Container,
  Form,
  Box,
  Button,
  Tag,
  Modal,
} from "react-bulma-components";
import { RadioField, InputField, CheckboxField, fields } from "./FormFields";

const offset = 0;

function App() {
  const [isSiteFieldInvisible, setSiteFieldInvisible] = useState(false);
  const handleHide = () => setSiteFieldInvisible(true);
  const handleShow = () => setSiteFieldInvisible(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const modalHide = () => setModalVisible(false);
  const modalShow = () => setModalVisible(true);

  return (
    <div className="App">
      <Container>
        <Box style={{ backgroundColor: "#ddeaff" }}>
          <Columns justifyContent="space-between">
            <form>
              <Modal
                show={isModalVisible}
                showClose
                onClose={() => modalHide()}
              >
                <Modal.Content>
                <Modal.Card.Title/>
             

                  <Modal.Card.Body>
                    <span className="modal-text">
                    Заявка отправлена
                    </span>
                  </Modal.Card.Body>
                
                </Modal.Content>
              </Modal>
              <Columns.Column>
                <Form.Label>Регистрация</Form.Label>
              </Columns.Column>
              <Columns.Column offset={2}>
                <Form.Label>Вы регистрируетесь как</Form.Label>
              </Columns.Column>
              <RadioField handleHide={handleHide} handleShow={handleShow} />
              <InputField {...fields[0]} />
              <Columns.Column>
                <Form.Label>Название организации</Form.Label>
              </Columns.Column>
              <Columns.Column offset={offset}>
                <InputField {...fields[1]} />
                <InputField {...fields[2]} />
              </Columns.Column>
              <Columns.Column>
                <Form.Label>Физический адрес</Form.Label>
              </Columns.Column>
              <Columns.Column>
                <InputField {...fields[3]} />
              </Columns.Column>

              <Columns.Column display="flex">
                <Columns.Column size={4}>
                  <InputField {...fields[4]} />
                </Columns.Column>
                <Columns.Column size={5}>
                  <InputField {...fields[5]} />
                </Columns.Column>
                <Columns.Column size={3}>
                  <InputField {...fields[6]} />
                </Columns.Column>
              </Columns.Column>
              <Columns.Column offset={offset}>
                <Form.Field horizontal>
                  <Columns.Column size={4}>
                    <Form.Field.Label>{fields[7].label}</Form.Field.Label>
                  </Columns.Column>
                  <Columns.Column size={1}>
                    <Tag size="large">+7</Tag>
                  </Columns.Column>
                  <Columns.Column>
                    <Form.Input className="form-input" />
                  </Columns.Column>
                </Form.Field>
              </Columns.Column>

              <Columns.Column>
                <Form.Field
                  horizontal
                  invisible={isSiteFieldInvisible}
                  className="form-input"
                >
                  <Columns.Column size={4}>
                    <Form.Field.Label>{fields[8].label}</Form.Field.Label>
                  </Columns.Column>
                  <Columns.Column>
                    <Form.Input className="form-input" />
                  </Columns.Column>
                </Form.Field>
              </Columns.Column>

              <Columns.Column>
                <Form.Label>Вид деятельности</Form.Label>
              </Columns.Column>
              <Columns.Column offset={offset}>
                <CheckboxField {...fields[9]} />
                <CheckboxField {...fields[10]} />
                <CheckboxField {...fields[11]} />
                <CheckboxField {...fields[12]} />
                <CheckboxField {...fields[13]} />
              </Columns.Column>
              <Columns.Column>
                <InputField {...fields[14]} />
              </Columns.Column>
            </form>
          </Columns>
          <Button size={"medium"} color={"info"} onClick={() => modalShow()}>
            Отправить заявку
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
