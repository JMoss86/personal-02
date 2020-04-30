import React from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form';

export default function EmailForm() {
  return (
    <Mailchimp
      action="https://jdmoss86.us8.list-manage.com/subscribe/post?u=2e671b3adc45da5a2d1564fc4&amp;id=327b877b26"
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true,
        },
      ]}
    />
  );
}
