import DocumentPage from '../pages/DocumentPage.js';
import { NAVIGATE_EVENT_KEY } from '../utils/navigate.js';

export default class App {
  constructor({ $target }) {
    this.documentPage = new DocumentPage({
      $target,
      initialState: {
        documentId: 0,
      },
    });

    this.initEvents();
    this.route();
  }

  initEvents() {
    window.addEventListener(NAVIGATE_EVENT_KEY, (e) => {
      const { nextUrl } = e.detail;
      if (!nextUrl) return;

      history.pushState(null, null, nextUrl);
      this.route();
    });
  }

  route() {
    const { pathname } = window.location;

    if (pathname === '/') {
    } else if (pathname.indexOf('/documents/') === 0) {
      const [, , documentId] = pathname.split('/');

      this.documentPage.setState({ documentId: Number(documentId) });
    }
  }
}
