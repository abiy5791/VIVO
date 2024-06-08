import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Upload, Button } from "antd";

const { TextArea } = Input;
function TaskSection5() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <>
      <section>
        <div class=" flex flex-col items-center px-5 py-8 mx-auto">
          <div class="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
              <h2 className="text-2xl font-medium text-slate-700 mb-8 dark:text-slate-400">
                When you’re finished, commit and push your changes to your
                forked repo, then upload a git patch file below.
              </h2>
              <p className="dark:text-slate-500">
                If you want a bonus challenge for this step… It is optional to
                add tests to the methods in the client application so that
                developers are more confident these methods work as expected
                with different inputs given to them.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="textfield"
              label="URL"
              rules={[{ required: true, message: "Please input your text!" }]}
            >
              <Input placeholder="https://www.example.com" />
            </Form.Item>

            <Form.Item
              name="textarea"
              label="Task Result"
              rules={[{ required: true, message: "Please input your text!" }]}
            >
              <TextArea rows={4} placeholder="Write you task answer here!" />
            </Form.Item>

            <Form.Item
              name="upload"
              label="File Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "Please upload a file!" }]}
            >
              <Upload name="file" action="/upload.do" listType="text">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
}
export default TaskSection5;
