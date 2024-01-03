import React from "react";
import { FaLock } from "react-icons/fa";
import Button from "../../components/common/Button";
import DragDropFile from "../../components/common/DragDropFile";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
const Step3 = (props) => {
  const {
    formData,
    handleInputChange,
    handleFileChange,
    multiple,
    errors,
    next,
    back,
  } = props;
  return (
    <Form>
      <DragDropFile
        name="image"
        onFilesSelected={(selectedFiles) => handleFileChange("image", selectedFiles)}
        multiple={multiple}
        accept="*/*"
        margin="0 0 5px 0"
        error={errors.image}
      />
      <Input
        name="password"
        lefticon={<FaLock />}
        type="password"
        placeholder="Enter your password"
        showPasswordToggle
        value={formData.password}
        onChange={(fieldName, newValue) =>
          handleInputChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
        error={errors.password}
      />
      <Input
        name="password_confirmation"
        lefticon={<FaLock />}
        type="password"
        placeholder="Enter your password confirmation"
        showPasswordToggle
        value={formData.password_confirmation}
        onChange={(fieldName, newValue) =>
          handleInputChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
        error={errors.password_confirmation}
      />
      <Button
        onClick={next}
        type="button"
        className="primary"
        margin="5px 0 5px 0"
      >
        Next
      </Button>

      <Button
        onClick={back}
        type="button"
        className="secondary"
        margin="5px 0 5px 0"
      >
        Previous
      </Button>
    </Form>
  );
};
export default Step3;
