import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FiMail, FiUser, FiUserPlus } from "react-icons/fi";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
const Step1 = (props) => {
  const {
    formData,
    handleInputChange,
    handleSelectChange,
    errors,
    next,
    titleOptions,
  } = props;
  return (
    <Form>
      <Select
        name="title"
        placeHolder="Select a title"
        lefticon={<FiUserPlus />}
        options={titleOptions}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) =>
          handleSelectChange(fieldName, newValue)
        }
        align="left"
        margin="0 0 5px 0"
        error={errors.title}
      />
      <Input
        name="name"
        lefticon={<FiUser />}
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(fieldName, newValue) =>
          handleInputChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
        error={errors.name}
      />
      <Input
        name="email"
        lefticon={<FiMail />}
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(fieldName, newValue) =>
          handleInputChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
        error={errors.email}
      />
      <Input
        name="username"
        lefticon={<FiUser />}
        type="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={(fieldName, newValue) =>
          handleInputChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
        error={errors.username}
      />
      <Button
        onClick={next}
        type="button"
        className="primary"
        margin="5px 0 5px 0"
      >
        Next
      </Button>
    </Form>
  );
};
export default Step1;
