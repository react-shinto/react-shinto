import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';

import messages from './messages';

const RegisterConfirmForm = ({ intl, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      autoFocus
      fullWidth
      name="token"
      label={intl.formatMessage(messages.token.label)}
      margin="normal"
      component={TextField}
      helperText={intl.formatMessage(messages.token.help)}
      placeholder={intl.formatMessage(messages.token.placeholder)}
    />

    <Button type="submit" color="primary" variant="raised">
      <FormattedMessage {...messages.action} />
    </Button>
  </form>
);

RegisterConfirmForm.propTypes = {
  intl: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const withIntl = injectIntl(RegisterConfirmForm);

export default reduxForm({
  form: 'registerConfirm',
})(withIntl);
