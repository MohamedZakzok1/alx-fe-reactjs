import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("اسم المستخدم مطلوب"),
  email: Yup.string().email("البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب"),
  password: Yup.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل").required("كلمة المرور مطلوبة"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("تم إرسال البيانات:", values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>تسجيل حساب</h2>
          <div>
            <Field type="text" name="username" placeholder="اسم المستخدم" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <Field type="email" name="email" placeholder="البريد الإلكتروني" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <Field type="password" name="password" placeholder="كلمة المرور" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>
          <button type="submit" disabled={isSubmitting}>تسجيل</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
