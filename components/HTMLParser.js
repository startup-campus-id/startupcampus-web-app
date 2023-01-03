import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser'

const HTMLParser = ({ children, options=undefined, ...args }) => {
  return (
    parse(sanitizeHtml(children), options)
  );
}

export default HTMLParser
