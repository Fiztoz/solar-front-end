import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Flex, Text, Input, InputGroup, InputRightElement, Icon, Textarea, Button, Select } from "@chakra-ui/react";
import { CustomRadioGroup } from "./custom-radio-group";
import TextRadio from "./text-radio";

const SuitabilityForm = () => {
  const radioQuestion = {
    behavior: {
      initial: "a",
      answers: [
        {
          value: "a",
          text: "ส่วนใหญ่จะใช้ไฟฟ้าในช่วงเช้า และช่วงเย็นเป็นหลัก",
          description: "เพราะต้องออกไปทำงานข้างนอกเป็นประจำ",
        },
        {
          value: "b",
          text: "ส่วนใหญ่จะใช้ไฟฟ้าในช่วงเช้า และกลางวัน เป็นหลัก",
          description: "เพราะทำงานที่บ้านแบบ WFH เปิดกิจการ  มีสำนักงาน ร้านอาหาร คาเฟ่ เปิดแอร์ตลอดทั้งวันเลย",
        },
        {
          value: "c",
          text: "ส่วนใหญ่จะใช้ไฟฟ้าคงที่สม่ำเสมอตลอดทั้งวัน ตั้งแต่เช้าถึงกลางคืน",
          description:
            "เพราะช่วงกลางวันมีเด็ก ผู้สูงอายุอาศัยอยู่บ้านในช่วงกลางวัน แม้จะออกไปทำงานช่วงเช้าและกลับบ้านในช่วงเย็น",
        },
      ],
    },
  };
  return (
    <Formik
      initialValues={{ behavior: radioQuestion.behavior.initial }}
      validationSchema={Yup.object({
        behavior: Yup.string()
          .oneOf(radioQuestion.behavior.answers.map((answer) => answer.value))
          .required("โปรดเลือกพฤติกรรมการใช้ไฟฟ้าของคุณ"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 10);
      }}
    >
      <Form>
        <Field name="behavior">
          {({ field, form, meta }) => (
            <CustomRadioGroup
              initValue={radioQuestion.behavior.initial}
              onValueChange={(value) => form.setFieldValue(field.name, value)}
            >
              {radioQuestion.behavior.answers.map((answer) => (
                <TextRadio key={answer.value} object={answer} />
              ))}
            </CustomRadioGroup>
          )}
        </Field>
      </Form>
    </Formik>
  );
};

export default SuitabilityForm;
