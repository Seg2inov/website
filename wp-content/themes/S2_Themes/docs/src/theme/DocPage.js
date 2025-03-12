import React from 'react';
import OriginalDocPage from '@theme-original/DocPage';
import CustomLayout from '@site/src/theme/Layout';

export default function CustomDocPage(props) {
  return (
    <CustomLayout>
      <OriginalDocPage {...props} />
    </CustomLayout>
  );
}