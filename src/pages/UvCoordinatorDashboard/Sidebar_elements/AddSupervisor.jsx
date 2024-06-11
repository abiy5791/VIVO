import { useState } from "react";
import { Form, Input, Button, Select, Cascader, Upload, Image } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "../../../api/axios";

import useAuth from "../../../hooks/useAuth";

const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const AddSupervisor = () => {
  const {
    user: { user_id, email, role, university_coordinator_id },
  } = useAuth();
  // const main = useAuth();
  // console.log(main);
  // console.log(email);
  // console.log(role);
  // console.log(university_coordinator_id);
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = async ({ file }) => {
    if (file) {
      const preview = await getBase64(file.originFileObj);
      setPreviewImage(preview);
      setUploadedImage();

      // console.log(file);
      // Set the value of the Image field in the form
      form.setFieldsValue({ Image: file.name });
    } else {
      setPreviewImage("");
      setUploadedImage(null);
      // Reset the value of the Image field in the form
      form.setFieldsValue({ Image: null });
    }

    if (file && file.status === "removed") {
      setUploadedImage(null); // Reset uploadedImage state when file is removed
      // Reset the value of the Image field in the form
      form.setFieldsValue({ Image: null });
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const normFile = (e) => {
    // console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Please input your password!"));
    }

    const passwordRules = [
      {
        regex: /.{8,}/,
        message: "Password must be at least 8 characters long",
      },
      {
        regex: /[A-Z]/,
        message: "Password must include at least one uppercase letter",
      },
      {
        regex: /[a-z]/,
        message: "Password must include at least one lowercase letter",
      },
      { regex: /\d/, message: "Password must include at least one number" },
      {
        regex: /[^A-Za-z0-9]/,
        message: "Password must include at least one special character",
      },
    ];

    for (let rule of passwordRules) {
      if (!rule.regex.test(value)) {
        return Promise.reject(new Error(rule.message));
      }
    }

    return Promise.resolve();
  };

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName);
      formData.append("email", values.email);
      formData.append("phone_number", values.phone);
      formData.append("password", values.password);
      formData.append("department", values.Department);
      formData.append("coordinator", user_id);
      formData.append("specialization", values.SpecializationField);

      const response = await axios.post("/UvSupervisors/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert('"Form submitted successfully:"');
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Received values of form:", values);
  };

  return (
    <>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add University Supervisor
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            When filling in the supervisor's details, provide accurate and
            complete information. This section helps verify your background and
            experience.
          </p>
        </div>
        <div className="w-full">
          <Form
            {...formItemLayout}
            form={form}
            className=" mx-auto w-full "
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <div class="flex ">
              <div class="w-1/2  p-4">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  tooltip="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Last Name"
                  tooltip="Last Name"
                  rules={[
                    { required: true, message: "Please input your Last Name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="Department"
                  label="Department"
                  tooltip="University Department"
                  rules={[
                    {
                      required: true,
                      message: "Please input University Department!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="SpecializationField"
                  label="Specialization Field"
                  tooltip="Specialized Department Field"
                  rules={[
                    {
                      required: true,
                      message: "Please input Specialization Field!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Select placeholder="Select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>
              </div>

              <div class="w-1/2  p-4">
                <Form.Item
                  name="upload"
                  label="Upload Image"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                >
                  <Upload
                    name="image"
                    listType="picture"
                    beforeUpload={() => false} // Prevent auto upload
                    accept="image/*"
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    { required: true, message: "Please input your E-mail!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true }, { validator: validatePassword }]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="IdFile"
                  label="Id File"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="Please Attach any formal Id for supervisor"
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
              </div>
            </div>

            {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[{ validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('You must accept the agreement'))) }]}
        {...tailFormItemLayout}
      >
        <Checkbox>I have read the <a href="#">agreement</a></Checkbox>
      </Form.Item> */}

            <Form.Item className="float-right mr-28" {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddSupervisor;
