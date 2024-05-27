import { useState } from "react";
import { Form, Input, Button, Select, Cascader, Upload, Image } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

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
      setUploadedImage(file);
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

  console.log("hell");
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
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
                  name="University"
                  label="Select University"
                  rules={[
                    {
                      required: true,
                      message: "Please select your University!",
                    },
                  ]}
                >
                  <Select placeholder="Select your University">
                    <Option value="Astu">
                      Adama Science and Technology Universiy
                    </Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
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
                  name="residence"
                  label="Habitual Residence"
                  rules={[
                    {
                      type: "array",
                      required: true,
                      message: "Please select your habitual residence!",
                    },
                  ]}
                >
                  <Cascader options={residences} />
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
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </div>

              <div class="w-1/2  p-4">
                <Form.Item
                  name="Image"
                  label="Profile Image"
                  value={uploadedImage ? [uploadedImage] : []}
                  rules={[
                    {
                      required: false,
                      message: "Please select your profile number!",
                    },
                  ]}
                >
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-circle"
                    fileList={uploadedImage ? [uploadedImage] : []}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {uploadButton}
                  </Upload>
                  {previewImage && (
                    <Image
                      wrapperStyle={{
                        display: "none",
                      }}
                      preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                          !visible && setPreviewImage(""),
                      }}
                      src={previewImage}
                    />
                  )}
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
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
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
