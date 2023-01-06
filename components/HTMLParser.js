import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';

const HTMLParser = ({ children, options = undefined, ...args }) => {
  return parse(sanitizeHtml(children), options);
};

export default HTMLParser;
