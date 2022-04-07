import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { Flex, Text, Input, InputGroup, InputRightElement, Icon, Textarea, Button, Select } from "@chakra-ui/react";
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

const CommentForm = ({ disabledAll, onFormSubmitted }, ref) => {
  const typeList = [
    {
      value: "recommend",
      name: "แนะนำชื่นชม",
    },
    {
      value: "inquiry",
      name: "สอบถามข้อมูล",
    },
    {
      value: "report",
      name: "แจ้งปัญหาการใช้งาน",
    },
    {
      value: "complaint",
      name: "ร้องเรียน",
    },
    {
      value: "other",
      name: "อื่น ๆ",
    },
  ];

  const formikRef = useRef();

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      formikRef.current?.resetForm();
    },
  }));

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{ firstName: "", lastName: "", email: "", phoneNumber: "", type: "", comment: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(255, "ชื่อยาวเกิน").required("กรุณากรอกชื่อ"),
        lastName: Yup.string().max(255, "นามสกุลยาวเกิน").required("กรุณากรอกนามสกุล"),
        email: Yup.string().email("อีเมลผิดรูปแบบ").required("กรุณากรอกที่อยู่อีเมล"),
        phoneNumber: Yup.string()
          .matches(/^0[1-9][0-9]{7,8}$/, "หมายเลขโทรศัพท์ไม่ถูกต้อง")
          .required("กรุณากรอกเบอร์โทร"),
        type: Yup.string()
          .oneOf(typeList.map((type) => type.value))
          .required("โปรดเลือกประเภทข้อความ"),
        comment: Yup.string().required("กรุณากรอกข้อความ"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onFormSubmitted(values);
          setSubmitting(false);
        }, 10);
      }}
    >
      {(formik) => (
        <ChakraForm>
          <Flex direction="column" w="100%">
            <Flex direction={{ base: "column", md: "row" }}>
              <ChakraField name="firstName">
                {({ field, form, meta }) => (
                  <Flex direction="column" w="100%" h="112px" px={4} py={3}>
                    <Text color="gray.00" fontSize="lg">
                      ชื่อ
                    </Text>
                    <InputGroup>
                      <Input
                        {...field}
                        placeholder="กรอกชื่อ ไม่ต้องระบุคำนำหน้าชื่อ"
                        w="100%"
                        variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                        disabled={disabledAll}
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
              <ChakraField name="lastName">
                {({ field, form, meta }) => (
                  <Flex direction="column" w="100%" h="112px" px={4} py={3}>
                    <Text color="gray.00" fontSize="lg">
                      นามสกุล
                    </Text>
                    <InputGroup>
                      <Input
                        {...field}
                        placeholder="กรอกนามสกุล"
                        w="100%"
                        variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                        disabled={disabledAll}
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
            </Flex>
            <ChakraField name="email">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="112px" px={4} py={3}>
                  <Text color="gray.00" fontSize="lg">
                    อีเมล
                  </Text>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="กรอกอีเมล"
                      w="100%"
                      variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                      disabled={disabledAll}
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
            <ChakraField name="phoneNumber">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="112px" px={4} py={3}>
                  <Text color="gray.00" fontSize="lg">
                    หมายเลขโทรศัพท์
                  </Text>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="กรอกหมายเลขโทรศัพท์"
                      w="100%"
                      variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                      disabled={disabledAll}
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
            <ChakraField name="type">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="112px" px={4} py={3}>
                  <Text color="gray.00" fontSize="lg">
                    ประเภท
                  </Text>
                  <Select
                    {...field}
                    placeholder="เลือกประเภทข้อความ"
                    color={field.value == "" ? "gray.02" : "dark"}
                    variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                    disabled={disabledAll}
                  >
                    {typeList.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.name}
                      </option>
                    ))}
                  </Select>
                  {meta.error && meta.touched && (
                    <Text color="error.01" fontSize="sm">
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </ChakraField>
            <ChakraField name="comment">
              {({ field, form, meta }) => (
                <Flex direction="column" w="100%" h="192px" px={4} py={3}>
                  <Text color="gray.00" fontSize="lg">
                    ข้อความ
                  </Text>
                  <Textarea
                    {...field}
                    placeholder="ฝากข้อความให้เราติดต่อกลับ"
                    resize="none"
                    w="100%"
                    h="120px"
                    variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                    disabled={disabledAll}
                  />
                  {meta.error && meta.touched && (
                    <Text color="error.01" fontSize="sm">
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </ChakraField>
            <Button
              variant="primary"
              type="submit"
              my={8}
              mx={4}
              disabled={!(formik.isValid && formik.dirty) || disabledAll}
            >
              ส่งข้อความ
            </Button>
          </Flex>
        </ChakraForm>
      )}
    </Formik>
  );
};

export default forwardRef(CommentForm);
