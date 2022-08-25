import { Columns, Form } from "react-bulma-components";
import React from "react";

export class Field {
  constructor(id = 0, label = "", className = "") {
    this.label = label;
    this.className = className;
  }
}

const className = "form-input";


export const fields = [
  new Field(0, "Эл. почта", className),
  new Field(1, "ИП или Юр. лицо", className),
  new Field(2, "ИНН", className),
  new Field(3, "Ваш город", className),
  new Field(4, "Улица", className),
  new Field(5, "Дом/стр.", className),
  new Field(6, "Офис", className),
  new Field(7, "Телефон", className),
  new Field(8, "Сайт вашей компании", className),
  new Field(9, "Магазин", className),
  new Field(10, "Региональная сеть магазинов", className),
  new Field(11, "Федеральная сеть магазинов", className),
  new Field(12, "Интернет-магазин", className),
  new Field(13, "Автосервис", className),
  new Field(14, "Прочее", className),
];

export const RadioField = ({handleHide, handleShow}) => {
  return (
    <>
      <Form.Field className="bold form-input">
        <Columns.Column offset={2}>
          <Form.Radio name="registerAs" 
          value="buyer"
          onClick={() => handleHide()}
          >
            Покупатель
          </Form.Radio>
          <br />
          <Form.Radio
            name="registerAs"
            value="seller"
            defaultChecked
            onClick={() => handleShow()}
          >
            Поставщик
          </Form.Radio>
        </Columns.Column>
      </Form.Field>
    </>
  );
};

export const InputField = ({ label }) => {
  return (
    <>
      <Columns.Column >
        <Form.Field horizontal className="form-input">
          <Columns.Column size={4}>
            <Form.Field.Label>{label}</Form.Field.Label>
          </Columns.Column>
          <Columns.Column>
            <Form.Input className="form-input" />
          </Columns.Column>
        </Form.Field>
      </Columns.Column>
    </>
  );
};

export const CheckboxField = ({ label }) => {
  return (
    <>
      <Columns.Column>
        <Form.Field horizontal className="form-input">
          <Columns.Column size={4}>
            <Form.Field.Label>{label}</Form.Field.Label>
          </Columns.Column>
          <Columns.Column>
            <Form.Checkbox className="form-input" />
          </Columns.Column>
        </Form.Field>
      </Columns.Column>
    </>
  );
};
