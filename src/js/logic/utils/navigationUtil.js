import { browserHistory } from 'react-router'

export function navigateTo(path) {
    return browserHistory.push(path);
}
