import './style.scss'

import { makePageTitle } from './headline';
import json from './data.json';

const ptitle = document.getElementById("app");

makePageTitle(ptitle, json.headline.homepage);
