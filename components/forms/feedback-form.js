import { useRef, forwardRef, useImperativeHandle } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import {
  Divider,
  Flex,
  Text,
  Checkbox,
  Box,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
  Textarea,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdOutlineErrorOutline } from "react-icons/md";

const FeedbackForm = ({ disabledAll, onFormSubmitted }, ref) => {
  const bp = useBreakpointValue({ base: "base", sm: "sm" });
  const otherCheckHandler = (name, check, form) => {
    form.setFieldValue(name, check);
    if (check == false) {
      form.setFieldValue("otherText", "");
      form.setTouched({ ...form.touched, otherText: false });
      form.validateField("otherText");
    }
  };
  const formikRef = useRef();

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      formikRef.current?.resetForm();
    },
  }));
  return (
    <>
      <Flex direction="column" w="100%">
        <Text fontSize="20px" color="dark" fontWeight="600">
          สิ่งที่คุณไม่ชอบหรืออยากให้เราปรับปรุง
        </Text>
        <Text fontSize="14px" color="gray.01">
          เลือกได้มากกว่า 1 ข้อ
        </Text>
        {bp == "base" ? <Divider pt="20px" /> : null}
        <Box w="100%" pt="26px">
          <Formik
            innerRef={formikRef}
            initialValues={{
              hardToUse: false,
              analyticResultHardToUnderstand: false,
              tooLongProcessingTime: false,
              installationPriceInaccurate: false,
              paybackPeriodInaccurate: false,
              wantMoreCostEffectivenessPerspectives: false,
              wantResultsOfEnvironmentalAnalysis: false,
              notEnoughInformationToMakeDecision: false,
              other: false,
              otherText: "",
              otherFeedback: "",
            }}
            validationSchema={Yup.object({
              hardToUse: Yup.boolean(),
              analyticResultHardToUnderstand: Yup.boolean(),
              tooLongProcessingTime: Yup.boolean(),
              installationPriceInaccurate: Yup.boolean(),
              paybackPeriodInaccurate: Yup.boolean(),
              wantMoreCostEffectivenessPerspectives: Yup.boolean(),
              wantResultsOfEnvironmentalAnalysis: Yup.boolean(),
              notEnoughInformationToMakeDecision: Yup.boolean(),
              other: Yup.boolean(),
              otherText: Yup.string().when("other", {
                is: true,
                then: Yup.string().required("กรุณาระบุ"),
              }),
              otherFeedback: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                onFormSubmitted(values);
                setSubmitting(false);
              }, 10);
            }}
          >
            {(formik) => (
              <Form>
                <Flex direction="column" w="100%">
                  <Field name="hardToUse">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          ใช้งานยาก ไม่เข้าใจว่าต้องใส่ข้อมูลอย่างไร
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="analyticResultHardToUnderstand">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          ไม่เข้าใจความหมายของผลการวิเคราะห์
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="tooLongProcessingTime">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          การประมวลผลใช้เวลานาน
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="installationPriceInaccurate">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          ผลการคำนวณค่าใช้จ่ายในการติดตั้งไม่สอดคล้องกับราคาในท้องตลาด
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="paybackPeriodInaccurate">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          ข้อมูลระยะเวลาคืนทุนแตกต่างไปจากผู้ให้บริการติดตั้งหรือแหล่งข้อมูลอื่น
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="wantMoreCostEffectivenessPerspectives">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          อยากรู้มุมมองความคุ้มทุนด้านอื่น ๆ ด้วย เช่น การขอสินเชื่อ การให้พันธมิตรลงทุนติดตั้งให้
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="notEnoughInformationToMakeDecision">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
                          disabled={disabledAll}
                        >
                          ข้อมูลยังไม่เพียงพอในการตัดสินใจที่จะติดตั้ง
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="other">
                    {({ field, form, meta }) => (
                      <>
                        <Checkbox
                          variant="primary"
                          size="md"
                          pt="32px"
                          isChecked={field.value}
                          onChange={(e) => otherCheckHandler(field.name, e.target.checked, form)}
                          disabled={disabledAll}
                        >
                          อื่น ๆ
                        </Checkbox>
                      </>
                    )}
                  </Field>
                  <Field name="otherText">
                    {({ field, form, meta }) => (
                      <Flex direction="column" w="100%" h="85px" pl={4} py={3}>
                        <InputGroup>
                          <Input
                            {...field}
                            placeholder="โปรดระบุ"
                            w="100%"
                            variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                            disabled={form.values.other == false || disabledAll}
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
                  </Field>
                  <Text fontSize="20px" color="dark" fontWeight="600" mt="32px">
                    ข้อเสนอแนะเพิ่มเติม
                  </Text>
                  {bp == "base" ? <Divider pt="20px" /> : null}
                  <Field name="otherFeedback">
                    {({ field, form, meta }) => (
                      <Flex direction="column" w="100%" h="150px" mt="20px">
                        <Text color="gray.00" fontSize="md" mb="6px">
                          ข้อเสนอแนะเพิ่มเติม เพื่อให้ผลการวิเคราะห์มีประโยชน์มากขึ้น
                        </Text>
                        <Textarea
                          {...field}
                          placeholder="สิ่งที่อยากเสนอแนะ หรือติชมเกี่ยวกับ PEA Solar Hero"
                          resize="none"
                          w="100%"
                          h="120px"
                          variant={meta.error && meta.touched ? "outline-invalid" : "outline-valid"}
                          disabled={disabledAll}
                        />
                      </Flex>
                    )}
                  </Field>
                  <Button
                    variant="primary"
                    w="100%"
                    type="submit"
                    mt="32px"
                    disabled={!(formik.isValid && formik.dirty) || disabledAll}
                  >
                    ส่งข้อมูล
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};
export default forwardRef(FeedbackForm);
