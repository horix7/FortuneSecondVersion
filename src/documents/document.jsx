import React, { Component } from "react";
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/entry.webpack";
// import "react-pdf/dist/Page/AnnotationLayer.css";
import docum from '../documents/terms.pdf'

export default class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav className="white">
          <button className="black white-text" onClick={this.goToPrevPage}>Prev</button>
          <button className="black white-text" onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={docum}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}
