import styled from "styled-components";
import { FormProps } from "./Form.types";
import { RadioButton } from "../RadioButton";
import { Button } from "../Button";
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between;
  margin-bottom: 20px; /* Add margin between the containers */
`;

const ColumnContainer = styled.div`
  display: flex;
  background-color: #f0f0f0;
`;

const StyledImage = styled.img<FormProps>`
  width: 60px; /* Reduced width */
  height: 60px; /* Reduced height */
  overflow: hidden;
  background-color: #b8b8b8;
  border-radius: 50%; /* Makes it a circle */
`;

const StyledText = styled.div<FormProps>`
  /* Add your styles for the text here */
`;

const StyledInput = styled.input`
  height: 25px;
  /* Add your styles for the input here */
`;

export const Form = ({
  description = "DescriptionLorem Ipsum is simply dummy text of the sheets containing Lorem Ipsum.",
  disabled = false,
  ...props
}: FormProps) => {
  const containerStyle = {
    marginTop: "20px",
    marginLeft: "43px",
    marginBottom: "10px",
  };
  const buttonStyle = {
    marginLeft: "90px",
    marginTop: "20px",
  };
  const imageStyles = {
    marginRight: "20px",
    marginTop: "20px",
  };
  return (
    <ColumnContainer>
      <FlexContainer>
        <ColumnContainer style={containerStyle}>
          <StyledText>Name: </StyledText>
          <StyledInput />
        </ColumnContainer>

        <ColumnContainer>
          <RadioButton
            name="test"
            options={[
              { label: "Email", value: "email" },
              { label: "Phone", value: "phone" },
            ]}
            {...props}
          ></RadioButton>
          <FlexContainer>
            <StyledInput style={{ marginBottom: "6px" }} />
            <StyledInput />
          </FlexContainer>
        </ColumnContainer>

        <ColumnContainer style={{ marginLeft: "26px" }}>
          <StyledText>Message: </StyledText>
          <StyledInput style={{ height: "60px" }} />
        </ColumnContainer>
        <div style={buttonStyle}>
          <Button
            primary={true}
            disabled={disabled}
            {...props}
            label="Send"
          ></Button>
        </div>
      </FlexContainer>
      <FlexContainer style={{ marginLeft: "200px" }}>
        <ColumnContainer style={imageStyles}>
          <StyledImage></StyledImage>
          <StyledText style={{ marginTop: "15px" }}>Facebook</StyledText>
        </ColumnContainer>

        <ColumnContainer>
          <StyledImage></StyledImage>
          <StyledText style={{ marginTop: "15px" }}>Linkedin</StyledText>
        </ColumnContainer>

        <ColumnContainer>
          <StyledImage></StyledImage>
          <StyledText style={{ marginTop: "15px" }}>GitHub</StyledText>
        </ColumnContainer>
      </FlexContainer>
    </ColumnContainer>
  );
};
