import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './ThemeSwitcher.css';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const DEFAULT_THEME = THEMES.DARK;

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  function saveNewTheme(newTheme) {
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <div className={styles.themeSwitcher}>
      <button
        className={classNames(styles.circle, styles.dark, {
          [styles.selected]: currentTheme === THEMES.DARK,
        })}
        onClick={() => saveNewTheme(THEMES.DARK)}
      />
      <button
        className={classNames(styles.circle, styles.light, {
          [styles.selected]: currentTheme === THEMES.LIGHT,
        })}
        onClick={() => saveNewTheme(THEMES.LIGHT)}
      />
    </div>
  );
}
