import React, {useEffect, useState} from 'react';
import {
  getLanguageCode,
  getSupportedLanguages,
  setLanguage
  // @ts-ignore
} from 'web-translate';

import Percent from './percent/percent';
import ThemePicker from './theme-picker/theme-picker';

import './App.css';

type StrToStrType = {[key: string]: string};
const initialLanguages: StrToStrType = {};

export default (): JSX.Element => {
  const [languageCode, setLanguageCode] = useState('');

  const [languages, setLanguages] = useState(initialLanguages);

  useEffect(() => {
    setLanguageCode(getLanguageCode());
    getSupportedLanguages().then(
      // @ts-ignore
      (langs: string[]): void => setLanguages(langs)
    );
  });

  const changeLanguage = async (
    event: React.SyntheticEvent<{value: string}>
  ): Promise<void> => {
    const languageCode = event.currentTarget.value;
    console.log('App.tsx changeLanguage: languageCode =', languageCode);
    await setLanguage(languageCode);
    console.log('App.tsx changeLanguage: changed');
    setLanguageCode(languageCode);
  };

  const languageNames = Object.keys(languages);

  return (
    <div className="App">
      <div>
        <label>Language:</label>
        <select onChange={changeLanguage} value={languageCode}>
          {languageNames.map(
            (name: string): any => (
              <option key={name} value={languages[name]}>
                {name}
              </option>
            )
          )}
        </select>
      </div>
      <ThemePicker />
      <Percent count={2} total={7} />
      <Percent count={5} total={7} />
    </div>
  );
};
