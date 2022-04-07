import React, { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Radio,
  RadioGroup,
  Button,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { MdOutlineErrorOutline } from "react-icons/md";

const ChakraForm = chakra(Form, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop);
  },
});

const ChakraField = chakra(Field, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop);
  },
});

const CalculationForm = ({ data, area, onFormSubmitted }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    if (formRef) {
      formRef.current.setValues((values) => ({ ...values, rooftopArea: area }));
    }
  }, [area]);

  return (
    <Formik
      innerRef={formRef}
      initialValues={data}
      validationSchema={Yup.object({
        rooftopArea: Yup.number()
          .min(2, "ตรวจสอบข้อมูลอีกครั้ง พื้นที่หลังคาต้องมีค่าอย่างน้อย 2 ตารางเมตร")
          .typeError("กรุณากรอกข้อมูลเป็นตัวเลขเท่านั้น")
          .required("กรุณากรอกพื้นที่หลังคา หรือกำหนดพื้นที่บน Map"),
        averageCharge: Yup.number()
          .typeError("กรุณากรอกข้อมูลเป็นตัวเลขเท่านั้น")
          .required("กรุณากรอกค่าไฟฟ้าต่อเดือน"),
        phase: Yup.string().oneOf(["1", "3", "unknown"]).required("กรุณาเลือกระบบไฟฟ้า หากไม่ทราบให้เลือก “ไม่แน่ใจ”"),
        dayNightConsumptionRatio: Yup.number().min(0).max(100),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          onFormSubmitted(values);
        }, 10);
      }}
    >
      {(formik) => (
        <ChakraForm w="100%">
          <Flex direction="column" w="100%">
            <Text color="dark" fontSize="2xl" fontWeight={600} mb={4}>
              ข้อมูลพื้นที่หลังคา
            </Text>
            <ChakraField name="rooftopArea">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="112px" pt={4} pb={8}>
                  <Text color="gray.00" fontSize="lg">
                    พื้นที่หลังคาโดยประมาณ (ตารางเมตร)
                  </Text>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="ขนาดพื้นที่หลังคา"
                      w="100%"
                      variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                    />
                    {meta.error && meta.touched && (
                      <InputRightElement>
                        <Icon as={MdOutlineErrorOutline} color="error.02" />
                      </InputRightElement>
                    )}
                  </InputGroup>
                  {meta.error && meta.touched && (
                    <Text color="error.01" fontSize="sm">
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </ChakraField>
            <Text color="dark" fontSize="2xl" fontWeight={600} mb={4}>
              ข้อมูลการใช้ไฟฟ้า
            </Text>
            <ChakraField name="averageCharge">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="112px" pt={4} pb={8}>
                  <Text color="gray.00" fontSize="lg">
                    ค่าไฟฟ้าต่อเดือน (บาท)
                  </Text>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="กรอกเฉพาะตัวเลขเท่านั้น"
                      w="100%"
                      variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                    />
                    {meta.error && meta.touched && (
                      <InputRightElement>
                        <Icon as={MdOutlineErrorOutline} color="error.02" />
                      </InputRightElement>
                    )}
                  </InputGroup>
                  {meta.error && meta.touched && (
                    <Text color="error.01" fontSize="sm">
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </ChakraField>
            <Field name="phase">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="112px" pt={4} pb={8}>
                  <Text color="gray.00" fontSize="lg" mb={3}>
                    ระบบไฟฟ้า
                  </Text>
                  <RadioGroup {...field}>
                    <Flex direction="row" justify="space-between">
                      <Radio {...field} value="1">
                        1 เฟส
                      </Radio>
                      <Radio {...field} value="3">
                        3 เฟส
                      </Radio>
                      <Radio {...field} value="unknown">
                        ไม่แน่ใจ
                      </Radio>
                    </Flex>
                  </RadioGroup>
                  {meta.error && meta.touched && (
                    <Text color="error.01" fontSize="sm">
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </Field>
            <Field name="dayNightConsumptionRatio">
              {({ field, form, meta }) => {
                return (
                  <Flex direction="column" w="100%" h="112px" pt={4} pb={8}>
                    <Text color="gray.00" fontSize="lg" mb={4}>
                      เปอร์เซ็นต์การใช้ไฟฟ้าในช่วงกลางวันและกลางคืน
                    </Text>
                    <Slider
                      onChange={(value) => form.setFieldValue(field.name, value)}
                      value={field.value}
                      defaultValue={50}
                      min={0}
                      max={100}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <SliderTrack bg="gray.07" h={2} borderRadius="4px">
                        <SliderFilledTrack bg="primary.01" />
                      </SliderTrack>
                      <Tooltip
                        hasArrow
                        bg="primary.01"
                        color="white"
                        placement="top"
                        isOpen={showTooltip}
                        label={`กลางวัน ${field.value} / ${100 - field.value} กลางคืน`}
                      >
                        <SliderThumb boxSize={6} />
                      </Tooltip>
                    </Slider>
                    <Flex direction="row" justify="space-between" mt={4}>
                      <Text color="gray.00" fontSize="lg">
                        ช่วงกลางวัน {field.value} %
                      </Text>
                      <Text color="gray.00" fontSize="lg">
                        ช่วงกลางคืน {100 - field.value} %
                      </Text>
                    </Flex>
                  </Flex>
                );
              }}
            </Field>
            <Button variant="primary" type="submit" my={8}>
              คำนวณขนาดติดตั้ง
            </Button>
          </Flex>
        </ChakraForm>
      )}
    </Formik>
  );
};

export default CalculationForm;
