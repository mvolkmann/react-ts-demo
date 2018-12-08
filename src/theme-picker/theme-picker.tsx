import React, {useCallback, useState} from 'react';
// @ts-ignore
import {i18n} from 'web-translate';
import './theme-picker.scss';

export default (): JSX.Element => {
  const [theme, setTheme] = useState('Foo');
  console.log('theme =', theme);
  const handleChange = useCallback(e => setTheme(e.target.value), []);

  return (
    <div className="theme-picker">
      {theme && <link rel="stylesheet" href={theme + '.css'} />}
      <label>{i18n('Theme')}</label>
      <select onChange={handleChange} value={theme}>
        <option>Foo</option>
        <option>Bar</option>
      </select>
    </div>
  );
};
