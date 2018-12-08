import React, {Component} from 'react';
import {
  getLanguageCode,
  getSupportedLanguages,
  setLanguage
  // @ts-ignore
} from 'web-translate';

import Percent from './percent/percent';
import ThemePicker from './theme-picker/theme-picker';

import './App.css';
import {loadavg} from 'os';

interface IProps {}
interface IState {
  languageCode: string;
  languages: {[key: string]: string};
}

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {languageCode: '', languages: {}};
  }

  async componentDidMount(): Promise<void> {
    const languageCode = getLanguageCode();
    const languages = await getSupportedLanguages();
    this.setState({languageCode, languages});
  }

  changeLanguage = async (
    event: React.SyntheticEvent<{value: string}>
  ): Promise<void> => {
    const languageCode = event.currentTarget.value;
    await setLanguage(languageCode);
    this.setState({languageCode});
  };

  render() {
    const {languageCode, languages} = this.state;
    const languageNames = Object.keys(languages);

    return (
      <div className="App">
        <div>
          <label>Language:</label>
          <select onChange={this.changeLanguage} value={languageCode}>
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
  }
}

export default App;
