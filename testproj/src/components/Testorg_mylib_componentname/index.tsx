import { Input, withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

import StyledTestorgMylibComponentnameWrapper from './styles';

// interface for props
interface TestorgMylibComponentnameProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here

}

// interface for StateProps object
interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function TestorgMylibComponentname(props: TestorgMylibComponentnameProps) {
  const { getPConnect, value, placeholder, disabled = false, readOnly = false, required = false, label, hideLabel = false, testId } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;

  const handleOnChange = (event: any) => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
  };

  return (
    <StyledTestorgMylibComponentnameWrapper>
      <Input
        type='text'
        value={value}
        label={label}
        labelHidden={hideLabel}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleOnChange}
        testId={testId}
      />
    </StyledTestorgMylibComponentnameWrapper>
  );
};


export default withConfiguration(TestorgMylibComponentname);
